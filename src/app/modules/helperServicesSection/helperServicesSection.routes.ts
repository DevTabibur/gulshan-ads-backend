import { Router } from 'express';
import { HelperServicesSectionController } from './helperServicesSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { HelperServicesSectionValidation } from './helperServicesSection.validation';

const router = Router();

/**
 * @api {post} /helper-services-section Create Helper Services Section
 * @apiName CreateHelperServicesSection
 * @apiGroup HelperServicesSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} icon Section icon
 * @apiParam {String} description Section description
 * @apiParam {String} recommendedLabel Recommended label
 * @apiParam {Number} recommendedCount Recommended count
 * @apiParam {String} currentlyUsedLabel Currently used label
 * @apiParam {Number} currentlyUsedCount Currently used count
 * @apiParam {Array} services Array of service cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created helper services section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(HelperServicesSectionValidation.createHelperServicesSectionZodSchema),
  HelperServicesSectionController.createHelperServicesSection,
);

/**
 * @api {get} /helper-services-section Get Helper Services Section
 * @apiName GetHelperServicesSection
 * @apiGroup HelperServicesSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Helper services section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', HelperServicesSectionController.getHelperServicesSection);

/**
 * @api {patch} /helper-services-section Update Helper Services Section
 * @apiName UpdateHelperServicesSection
 * @apiGroup HelperServicesSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [icon] Section icon
 * @apiParam {String} [description] Section description
 * @apiParam {String} [recommendedLabel] Recommended label
 * @apiParam {Number} [recommendedCount] Recommended count
 * @apiParam {String} [currentlyUsedLabel] Currently used label
 * @apiParam {Number} [currentlyUsedCount] Currently used count
 * @apiParam {Array} [services] Array of service cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated helper services section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(HelperServicesSectionValidation.updateHelperServicesSectionZodSchema),
  HelperServicesSectionController.updateHelperServicesSection,
);

/**
 * @api {patch} /helper-services-section/services Update Services
 * @apiName UpdateServices
 * @apiGroup HelperServicesSection
 *
 * @apiParam {Array} services Array of service cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated helper services section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/services',
  zodValidateRequest(HelperServicesSectionValidation.updateServicesZodSchema),
  HelperServicesSectionController.updateServices,
);

/**
 * @api {delete} /helper-services-section Delete Helper Services Section
 * @apiName DeleteHelperServicesSection
 * @apiGroup HelperServicesSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted helper services section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', HelperServicesSectionController.deleteHelperServicesSection);

export const HelperServicesSectionRoute = router;
