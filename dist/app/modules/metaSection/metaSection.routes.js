"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaSectionRoute = void 0;
const express_1 = require("express");
const metaSection_controller_1 = require("./metaSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const metaSection_validation_1 = require("./metaSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.createMetaSectionZodSchema), metaSection_controller_1.MetaSectionController.createMetaSection);
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
router.get('/', metaSection_controller_1.MetaSectionController.getMetaSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.updateMetaSectionZodSchema), metaSection_controller_1.MetaSectionController.updateMetaSection);
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
router.patch('/platform-icons', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.updatePlatformIconsZodSchema), metaSection_controller_1.MetaSectionController.updatePlatformIcons);
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
router.patch('/feature-buttons', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.updateFeatureButtonsZodSchema), metaSection_controller_1.MetaSectionController.updateFeatureButtons);
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
router.patch('/service-cards', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.updateServiceCardsZodSchema), metaSection_controller_1.MetaSectionController.updateServiceCards);
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
router.patch('/performance-statistics', (0, zodValidateRequest_1.default)(metaSection_validation_1.MetaSectionValidation.updatePerformanceStatisticsZodSchema), metaSection_controller_1.MetaSectionController.updatePerformanceStatistics);
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
router.delete('/', metaSection_controller_1.MetaSectionController.deleteMetaSection);
exports.MetaSectionRoute = router;
