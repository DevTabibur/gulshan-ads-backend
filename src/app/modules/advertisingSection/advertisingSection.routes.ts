import { Router } from 'express';
import { AdvertisingSectionController } from './advertisingSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AdvertisingSectionValidation } from './advertisingSection.validation';

const router = Router();

/**
 * @api {post} /advertising-section Create Advertising Section
 * @apiName CreateAdvertisingSection
 * @apiGroup AdvertisingSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} keyFeatures Array of key features
 * @apiParam {Array} serviceCards Array of service cards
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertising section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(AdvertisingSectionValidation.createAdvertisingSectionZodSchema),
  AdvertisingSectionController.createAdvertisingSection,
);

/**
 * @api {get} /advertising-section Get Advertising Section
 * @apiName GetAdvertisingSection
 * @apiGroup AdvertisingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertising section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', AdvertisingSectionController.getAdvertisingSection);

/**
 * @api {patch} /advertising-section Update Advertising Section
 * @apiName UpdateAdvertisingSection
 * @apiGroup AdvertisingSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [keyFeatures] Array of key features
 * @apiParam {Array} [serviceCards] Array of service cards
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(AdvertisingSectionValidation.updateAdvertisingSectionZodSchema),
  AdvertisingSectionController.updateAdvertisingSection,
);

/**
 * @api {patch} /advertising-section/features Update Key Features
 * @apiName UpdateKeyFeatures
 * @apiGroup AdvertisingSection
 *
 * @apiParam {Array} keyFeatures Array of key features
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/features',
  zodValidateRequest(AdvertisingSectionValidation.updateKeyFeaturesZodSchema),
  AdvertisingSectionController.updateKeyFeatures,
);

/**
 * @api {patch} /advertising-section/cards Update Service Cards
 * @apiName UpdateServiceCards
 * @apiGroup AdvertisingSection
 *
 * @apiParam {Array} serviceCards Array of service cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cards',
  zodValidateRequest(AdvertisingSectionValidation.updateServiceCardsZodSchema),
  AdvertisingSectionController.updateServiceCards,
);

/**
 * @api {patch} /advertising-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup AdvertisingSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(AdvertisingSectionValidation.updateStatisticsZodSchema),
  AdvertisingSectionController.updateStatistics,
);

/**
 * @api {patch} /advertising-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup AdvertisingSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertising section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-buttons',
  zodValidateRequest(AdvertisingSectionValidation.updateCTAButtonsZodSchema),
  AdvertisingSectionController.updateCTAButtons,
);

/**
 * @api {delete} /advertising-section Delete Advertising Section
 * @apiName DeleteAdvertisingSection
 * @apiGroup AdvertisingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertising section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', AdvertisingSectionController.deleteAdvertisingSection);

export const AdvertisingSectionRoute = router;
