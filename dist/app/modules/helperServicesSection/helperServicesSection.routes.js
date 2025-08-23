"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperServicesSectionRoute = void 0;
const express_1 = require("express");
const helperServicesSection_controller_1 = require("./helperServicesSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const helperServicesSection_validation_1 = require("./helperServicesSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(helperServicesSection_validation_1.HelperServicesSectionValidation.createHelperServicesSectionZodSchema), helperServicesSection_controller_1.HelperServicesSectionController.createHelperServicesSection);
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
router.get('/', helperServicesSection_controller_1.HelperServicesSectionController.getHelperServicesSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(helperServicesSection_validation_1.HelperServicesSectionValidation.updateHelperServicesSectionZodSchema), helperServicesSection_controller_1.HelperServicesSectionController.updateHelperServicesSection);
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
router.patch('/services', (0, zodValidateRequest_1.default)(helperServicesSection_validation_1.HelperServicesSectionValidation.updateServicesZodSchema), helperServicesSection_controller_1.HelperServicesSectionController.updateServices);
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
router.delete('/', helperServicesSection_controller_1.HelperServicesSectionController.deleteHelperServicesSection);
exports.HelperServicesSectionRoute = router;
