import { Router } from 'express';
import { AdvertisersCtaHeroSectionController } from './advertisersCtaHeroSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AdvertisersCtaHeroSectionValidation } from './advertisersCtaHeroSection.validation';

const router = Router();

/**
 * @api {post} /advertisers-cta-hero-section Create Advertisers CTA Hero Section
 * @apiName CreateAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Array} benefits Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(AdvertisersCtaHeroSectionValidation.createAdvertisersCtaHeroSectionZodSchema),
  AdvertisersCtaHeroSectionController.createAdvertisersCtaHeroSection,
);

/**
 * @api {get} /advertisers-cta-hero-section Get Advertisers CTA Hero Section
 * @apiName GetAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', AdvertisersCtaHeroSectionController.getAdvertisersCtaHeroSection);

/**
 * @api {patch} /advertisers-cta-hero-section Update Advertisers CTA Hero Section
 * @apiName UpdateAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Array} [benefits] Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(AdvertisersCtaHeroSectionValidation.updateAdvertisersCtaHeroSectionZodSchema),
  AdvertisersCtaHeroSectionController.updateAdvertisersCtaHeroSection,
);

/**
 * @api {patch} /advertisers-cta-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-buttons',
  zodValidateRequest(AdvertisersCtaHeroSectionValidation.updateCTAButtonsZodSchema),
  AdvertisersCtaHeroSectionController.updateCTAButtons,
);

/**
 * @api {patch} /advertisers-cta-hero-section/benefits Update Benefits
 * @apiName UpdateBenefits
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {Array} benefits Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/benefits',
  zodValidateRequest(AdvertisersCtaHeroSectionValidation.updateBenefitsZodSchema),
  AdvertisersCtaHeroSectionController.updateBenefits,
);

/**
 * @api {delete} /advertisers-cta-hero-section Delete Advertisers CTA Hero Section
 * @apiName DeleteAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', AdvertisersCtaHeroSectionController.deleteAdvertisersCtaHeroSection);

export const AdvertisersCtaHeroSectionRoute = router;
