"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisingSectionRoute = void 0;
const express_1 = require("express");
const advertisingSection_controller_1 = require("./advertisingSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const advertisingSection_validation_1 = require("./advertisingSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.createAdvertisingSectionZodSchema), advertisingSection_controller_1.AdvertisingSectionController.createAdvertisingSection);
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
router.get('/', advertisingSection_controller_1.AdvertisingSectionController.getAdvertisingSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.updateAdvertisingSectionZodSchema), advertisingSection_controller_1.AdvertisingSectionController.updateAdvertisingSection);
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
router.patch('/features', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.updateKeyFeaturesZodSchema), advertisingSection_controller_1.AdvertisingSectionController.updateKeyFeatures);
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
router.patch('/cards', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.updateServiceCardsZodSchema), advertisingSection_controller_1.AdvertisingSectionController.updateServiceCards);
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
router.patch('/statistics', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.updateStatisticsZodSchema), advertisingSection_controller_1.AdvertisingSectionController.updateStatistics);
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
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(advertisingSection_validation_1.AdvertisingSectionValidation.updateCTAButtonsZodSchema), advertisingSection_controller_1.AdvertisingSectionController.updateCTAButtons);
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
router.delete('/', advertisingSection_controller_1.AdvertisingSectionController.deleteAdvertisingSection);
exports.AdvertisingSectionRoute = router;
