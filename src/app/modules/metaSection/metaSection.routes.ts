import { Router } from 'express';
import { MetaSectionController } from './metaSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { MetaSectionValidation } from './metaSection.validation';

const router = Router();

/**
 * @api {post} /meta-section Create Meta Section
 * @apiName CreateMetaSection
 * @apiGroup MetaSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} platformIcons Array of platform icons
 * @apiParam {Array} featureButtons Array of feature buttons
 * @apiParam {Array} serviceCards Array of service cards
 * @apiParam {String} performanceTitle Performance section title
 * @apiParam {String} performanceSubtitle Performance section subtitle
 * @apiParam {Array} performanceStatistics Array of performance statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(MetaSectionValidation.createMetaSectionZodSchema),
  MetaSectionController.createMetaSection,
);

/**
 * @api {get} /meta-section Get Meta Section
 * @apiName GetMetaSection
 * @apiGroup MetaSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', MetaSectionController.getMetaSection);

/**
 * @api {patch} /meta-section Update Meta Section
 * @apiName UpdateMetaSection
 * @apiGroup MetaSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [platformIcons] Array of platform icons
 * @apiParam {Array} [featureButtons] Array of feature buttons
 * @apiParam {Array} [serviceCards] Array of service cards
 * @apiParam {String} [performanceTitle] Performance section title
 * @apiParam {String} [performanceSubtitle] Performance section subtitle
 * @apiParam {Array} [performanceStatistics] Array of performance statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(MetaSectionValidation.updateMetaSectionZodSchema),
  MetaSectionController.updateMetaSection,
);

/**
 * @api {patch} /meta-section/platform-icons Update Platform Icons
 * @apiName UpdatePlatformIcons
 * @apiGroup MetaSection
 *
 * @apiParam {Array} platformIcons Array of platform icons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/platform-icons',
  zodValidateRequest(MetaSectionValidation.updatePlatformIconsZodSchema),
  MetaSectionController.updatePlatformIcons,
);

/**
 * @api {patch} /meta-section/feature-buttons Update Feature Buttons
 * @apiName UpdateFeatureButtons
 * @apiGroup MetaSection
 *
 * @apiParam {Array} featureButtons Array of feature buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/feature-buttons',
  zodValidateRequest(MetaSectionValidation.updateFeatureButtonsZodSchema),
  MetaSectionController.updateFeatureButtons,
);

/**
 * @api {patch} /meta-section/service-cards Update Service Cards
 * @apiName UpdateServiceCards
 * @apiGroup MetaSection
 *
 * @apiParam {Array} serviceCards Array of service cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/service-cards',
  zodValidateRequest(MetaSectionValidation.updateServiceCardsZodSchema),
  MetaSectionController.updateServiceCards,
);

/**
 * @api {patch} /meta-section/performance-statistics Update Performance Statistics
 * @apiName UpdatePerformanceStatistics
 * @apiGroup MetaSection
 *
 * @apiParam {Array} performanceStatistics Array of performance statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/performance-statistics',
  zodValidateRequest(MetaSectionValidation.updatePerformanceStatisticsZodSchema),
  MetaSectionController.updatePerformanceStatistics,
);

/**
 * @api {delete} /meta-section Delete Meta Section
 * @apiName DeleteMetaSection
 * @apiGroup MetaSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', MetaSectionController.deleteMetaSection);

export const MetaSectionRoute = router;
