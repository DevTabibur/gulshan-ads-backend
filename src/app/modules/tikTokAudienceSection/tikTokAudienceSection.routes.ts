import { Router } from 'express';
import { TikTokAudienceSectionController } from './tikTokAudienceSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TikTokAudienceSectionValidation } from './tikTokAudienceSection.validation';

const router = Router();

/**
 * @api {post} /tik-tok-audience-section Create TikTok Audience Section
 * @apiName CreateTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {String} title Main title
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} advertisingBenefit Advertising benefit object
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TikTokAudienceSectionValidation.createTikTokAudienceSectionZodSchema),
  TikTokAudienceSectionController.createTikTokAudienceSection,
);

/**
 * @api {get} /tik-tok-audience-section Get TikTok Audience Section
 * @apiName GetTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TikTokAudienceSectionController.getTikTokAudienceSection);

/**
 * @api {patch} /tik-tok-audience-section Update TikTok Audience Section
 * @apiName UpdateTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [advertisingBenefit] Advertising benefit object
 * @apiParam {Object} [testimonialCard] Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TikTokAudienceSectionValidation.updateTikTokAudienceSectionZodSchema),
  TikTokAudienceSectionController.updateTikTokAudienceSection,
);

/**
 * @api {patch} /tik-tok-audience-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(TikTokAudienceSectionValidation.updateStatisticsZodSchema),
  TikTokAudienceSectionController.updateStatistics,
);

/**
 * @api {patch} /tik-tok-audience-section/advertising-benefit Update Advertising Benefit
 * @apiName UpdateAdvertisingBenefit
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Object} advertisingBenefit Advertising benefit object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/advertising-benefit',
  zodValidateRequest(TikTokAudienceSectionValidation.updateAdvertisingBenefitZodSchema),
  TikTokAudienceSectionController.updateAdvertisingBenefit,
);

/**
 * @api {patch} /tik-tok-audience-section/testimonial-card Update Testimonial Card
 * @apiName UpdateTestimonialCard
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/testimonial-card',
  zodValidateRequest(TikTokAudienceSectionValidation.updateTestimonialCardZodSchema),
  TikTokAudienceSectionController.updateTestimonialCard,
);

/**
 * @api {delete} /tik-tok-audience-section Delete TikTok Audience Section
 * @apiName DeleteTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TikTokAudienceSectionController.deleteTikTokAudienceSection);

export const TikTokAudienceSectionRoute = router;
