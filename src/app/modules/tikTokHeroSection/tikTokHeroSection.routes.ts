import { Router } from 'express';
import { TikTokHeroSectionController } from './tikTokHeroSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TikTokHeroSectionValidation } from './tikTokHeroSection.validation';

const router = Router();

/**
 * @api {post} /tik-tok-hero-section Create TikTok Hero Section
 * @apiName CreateTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} description Section description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} phoneMockup Phone mockup object
 * @apiParam {Object} decorativeElements Decorative elements object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TikTokHeroSectionValidation.createTikTokHeroSectionZodSchema),
  TikTokHeroSectionController.createTikTokHeroSection,
);

/**
 * @api {get} /tik-tok-hero-section Get TikTok Hero Section
 * @apiName GetTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TikTokHeroSectionController.getTikTokHeroSection);

/**
 * @api {patch} /tik-tok-hero-section Update TikTok Hero Section
 * @apiName UpdateTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [description] Section description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [phoneMockup] Phone mockup object
 * @apiParam {Object} [decorativeElements] Decorative elements object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TikTokHeroSectionValidation.updateTikTokHeroSectionZodSchema),
  TikTokHeroSectionController.updateTikTokHeroSection,
);

/**
 * @api {patch} /tik-tok-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-buttons',
  zodValidateRequest(TikTokHeroSectionValidation.updateCTAButtonsZodSchema),
  TikTokHeroSectionController.updateCTAButtons,
);

/**
 * @api {patch} /tik-tok-hero-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(TikTokHeroSectionValidation.updateStatisticsZodSchema),
  TikTokHeroSectionController.updateStatistics,
);

/**
 * @api {patch} /tik-tok-hero-section/phone-mockup Update Phone Mockup
 * @apiName UpdatePhoneMockup
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Object} phoneMockup Phone mockup object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/phone-mockup',
  zodValidateRequest(TikTokHeroSectionValidation.updatePhoneMockupZodSchema),
  TikTokHeroSectionController.updatePhoneMockup,
);

/**
 * @api {delete} /tik-tok-hero-section Delete TikTok Hero Section
 * @apiName DeleteTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TikTokHeroSectionController.deleteTikTokHeroSection);

export const TikTokHeroSectionRoute = router;
