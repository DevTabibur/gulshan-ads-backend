"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokVideoAdvertisingSectionRoute = void 0;
const express_1 = require("express");
const tikTokVideoAdvertisingSection_controller_1 = require("./tikTokVideoAdvertisingSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const tikTokVideoAdvertisingSection_validation_1 = require("./tikTokVideoAdvertisingSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.createTikTokVideoAdvertisingSectionZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.createTikTokVideoAdvertisingSection);
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
router.get('/', tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.getTikTokVideoAdvertisingSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.updateTikTokVideoAdvertisingSectionZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.updateTikTokVideoAdvertisingSection);
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
router.patch('/advertising-options', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.updateAdvertisingOptionsZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.updateAdvertisingOptions);
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
router.patch('/budget-info', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.updateBudgetInfoZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.updateBudgetInfo);
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
router.patch('/phone-mockup', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.updatePhoneMockupZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.updatePhoneMockup);
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
router.patch('/engagement-statistic', (0, zodValidateRequest_1.default)(tikTokVideoAdvertisingSection_validation_1.TikTokVideoAdvertisingSectionValidation.updateEngagementStatisticZodSchema), tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.updateEngagementStatistic);
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
router.delete('/', tikTokVideoAdvertisingSection_controller_1.TikTokVideoAdvertisingSectionController.deleteTikTokVideoAdvertisingSection);
exports.TikTokVideoAdvertisingSectionRoute = router;
