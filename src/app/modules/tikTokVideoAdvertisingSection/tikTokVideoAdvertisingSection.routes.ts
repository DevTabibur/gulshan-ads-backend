import { Router } from 'express';
import { TikTokVideoAdvertisingSectionController } from './tikTokVideoAdvertisingSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TikTokVideoAdvertisingSectionValidation } from './tikTokVideoAdvertisingSection.validation';

const router = Router();

/**
 * @api {post} /tik-tok-video-advertising-section Create TikTok Video Advertising Section
 * @apiName CreateTikTokVideoAdvertisingSection
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {String} mainTitle Main title
 * @apiParam {String} subtitle Subtitle
 * @apiParam {String} description Description
 * @apiParam {Array} advertisingOptions Array of advertising options
 * @apiParam {Object} budgetInfo Budget information
 * @apiParam {Object} phoneMockup Phone mockup object
 * @apiParam {Object} engagementStatistic Engagement statistic object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.createTikTokVideoAdvertisingSectionZodSchema),
  TikTokVideoAdvertisingSectionController.createTikTokVideoAdvertisingSection,
);

/**
 * @api {get} /tik-tok-video-advertising-section Get TikTok Video Advertising Section
 * @apiName GetTikTokVideoAdvertisingSection
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TikTokVideoAdvertisingSectionController.getTikTokVideoAdvertisingSection);

/**
 * @api {patch} /tik-tok-video-advertising-section Update TikTok Video Advertising Section
 * @apiName UpdateTikTokVideoAdvertisingSection
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {String} [mainTitle] Main title
 * @apiParam {String} [subtitle] Subtitle
 * @apiParam {String} [description] Description
 * @apiParam {Array} [advertisingOptions] Array of advertising options
 * @apiParam {Object} [budgetInfo] Budget information
 * @apiParam {Object} [phoneMockup] Phone mockup object
 * @apiParam {Object} [engagementStatistic] Engagement statistic object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.updateTikTokVideoAdvertisingSectionZodSchema),
  TikTokVideoAdvertisingSectionController.updateTikTokVideoAdvertisingSection,
);

/**
 * @api {patch} /tik-tok-video-advertising-section/advertising-options Update Advertising Options
 * @apiName UpdateAdvertisingOptions
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {Array} advertisingOptions Array of advertising options
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/advertising-options',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.updateAdvertisingOptionsZodSchema),
  TikTokVideoAdvertisingSectionController.updateAdvertisingOptions,
);

/**
 * @api {patch} /tik-tok-video-advertising-section/budget-info Update Budget Info
 * @apiName UpdateBudgetInfo
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {Object} budgetInfo Budget information
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/budget-info',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.updateBudgetInfoZodSchema),
  TikTokVideoAdvertisingSectionController.updateBudgetInfo,
);

/**
 * @api {patch} /tik-tok-video-advertising-section/phone-mockup Update Phone Mockup
 * @apiName UpdatePhoneMockup
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {Object} phoneMockup Phone mockup object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/phone-mockup',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.updatePhoneMockupZodSchema),
  TikTokVideoAdvertisingSectionController.updatePhoneMockup,
);

/**
 * @api {patch} /tik-tok-video-advertising-section/engagement-statistic Update Engagement Statistic
 * @apiName UpdateEngagementStatistic
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiParam {Object} engagementStatistic Engagement statistic object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/engagement-statistic',
  zodValidateRequest(TikTokVideoAdvertisingSectionValidation.updateEngagementStatisticZodSchema),
  TikTokVideoAdvertisingSectionController.updateEngagementStatistic,
);

/**
 * @api {delete} /tik-tok-video-advertising-section Delete TikTok Video Advertising Section
 * @apiName DeleteTikTokVideoAdvertisingSection
 * @apiGroup TikTokVideoAdvertisingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok video advertising section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TikTokVideoAdvertisingSectionController.deleteTikTokVideoAdvertisingSection);

export const TikTokVideoAdvertisingSectionRoute = router;
