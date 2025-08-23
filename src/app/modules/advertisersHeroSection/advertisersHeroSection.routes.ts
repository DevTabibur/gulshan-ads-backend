import { Router } from 'express';
import { AdvertisersHeroSectionController } from './advertisersHeroSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AdvertisersHeroSectionValidation } from './advertisersHeroSection.validation';

const router = Router();

/**
 * @api {post} /advertisers-hero-section Create Advertisers Hero Section
 * @apiName CreateAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} topPill Top pill object
 * @apiParam {String} mainTitle Main title
 * @apiParam {String} mainDescription Main description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Object} rating Rating object
 * @apiParam {Object} campaignPerformance Campaign performance object
 * @apiParam {Array} bottomStatistics Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(AdvertisersHeroSectionValidation.createAdvertisersHeroSectionZodSchema),
  AdvertisersHeroSectionController.createAdvertisersHeroSection,
);

/**
 * @api {get} /advertisers-hero-section Get Advertisers Hero Section
 * @apiName GetAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', AdvertisersHeroSectionController.getAdvertisersHeroSection);

/**
 * @api {patch} /advertisers-hero-section Update Advertisers Hero Section
 * @apiName UpdateAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} [topPill] Top pill object
 * @apiParam {String} [mainTitle] Main title
 * @apiParam {String} [mainDescription] Main description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Object} [rating] Rating object
 * @apiParam {Object} [campaignPerformance] Campaign performance object
 * @apiParam {Array} [bottomStatistics] Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(AdvertisersHeroSectionValidation.updateAdvertisersHeroSectionZodSchema),
  AdvertisersHeroSectionController.updateAdvertisersHeroSection,
);

/**
 * @api {patch} /advertisers-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-buttons',
  zodValidateRequest(AdvertisersHeroSectionValidation.updateCTAButtonsZodSchema),
  AdvertisersHeroSectionController.updateCTAButtons,
);

/**
 * @api {patch} /advertisers-hero-section/campaign-performance Update Campaign Performance
 * @apiName UpdateCampaignPerformance
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} campaignPerformance Campaign performance object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/campaign-performance',
  zodValidateRequest(AdvertisersHeroSectionValidation.updateCampaignPerformanceZodSchema),
  AdvertisersHeroSectionController.updateCampaignPerformance,
);

/**
 * @api {patch} /advertisers-hero-section/bottom-statistics Update Bottom Statistics
 * @apiName UpdateBottomStatistics
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Array} bottomStatistics Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/bottom-statistics',
  zodValidateRequest(AdvertisersHeroSectionValidation.updateBottomStatisticsZodSchema),
  AdvertisersHeroSectionController.updateBottomStatistics,
);

/**
 * @api {delete} /advertisers-hero-section Delete Advertisers Hero Section
 * @apiName DeleteAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', AdvertisersHeroSectionController.deleteAdvertisersHeroSection);

export const AdvertisersHeroSectionRoute = router;
