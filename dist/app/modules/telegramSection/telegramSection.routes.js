"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramSectionRoute = void 0;
const express_1 = require("express");
const telegramSection_controller_1 = require("./telegramSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const telegramSection_validation_1 = require("./telegramSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /telegram-section Create Telegram Section
 * @apiName CreateTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} keyFeatures Array of key features
 * @apiParam {String} pricingTitle Pricing section title
 * @apiParam {Array} pricingPoints Array of pricing points
 * @apiParam {Object} ctaButton CTA button object
 * @apiParam {Object} chatInterface Chat interface object
 * @apiParam {Object} futureBanner Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created telegram section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.createTelegramSectionZodSchema), telegramSection_controller_1.TelegramSectionController.createTelegramSection);
/**
 * @api {get} /telegram-section Get Telegram Section
 * @apiName GetTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Telegram section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', telegramSection_controller_1.TelegramSectionController.getTelegramSection);
/**
 * @api {patch} /telegram-section Update Telegram Section
 * @apiName UpdateTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [keyFeatures] Array of key features
 * @apiParam {String} [pricingTitle] Pricing section title
 * @apiParam {Array} [pricingPoints] Array of pricing points
 * @apiParam {Object} [ctaButton] CTA button object
 * @apiParam {Object} [chatInterface] Chat interface object
 * @apiParam {Object} [futureBanner] Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.updateTelegramSectionZodSchema), telegramSection_controller_1.TelegramSectionController.updateTelegramSection);
/**
 * @api {patch} /telegram-section/key-features Update Key Features
 * @apiName UpdateKeyFeatures
 * @apiGroup TelegramSection
 *
 * @apiParam {Array} keyFeatures Array of key features
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/key-features', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.updateKeyFeaturesZodSchema), telegramSection_controller_1.TelegramSectionController.updateKeyFeatures);
/**
 * @api {patch} /telegram-section/pricing-points Update Pricing Points
 * @apiName UpdatePricingPoints
 * @apiGroup TelegramSection
 *
 * @apiParam {Array} pricingPoints Array of pricing points
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/pricing-points', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.updatePricingPointsZodSchema), telegramSection_controller_1.TelegramSectionController.updatePricingPoints);
/**
 * @api {patch} /telegram-section/chat-interface Update Chat Interface
 * @apiName UpdateChatInterface
 * @apiGroup TelegramSection
 *
 * @apiParam {Object} chatInterface Chat interface object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/chat-interface', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.updateChatInterfaceZodSchema), telegramSection_controller_1.TelegramSectionController.updateChatInterface);
/**
 * @api {patch} /telegram-section/future-banner Update Future Banner
 * @apiName UpdateFutureBanner
 * @apiGroup TelegramSection
 *
 * @apiParam {Object} futureBanner Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/future-banner', (0, zodValidateRequest_1.default)(telegramSection_validation_1.TelegramSectionValidation.updateFutureBannerZodSchema), telegramSection_controller_1.TelegramSectionController.updateFutureBanner);
/**
 * @api {delete} /telegram-section Delete Telegram Section
 * @apiName DeleteTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted telegram section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', telegramSection_controller_1.TelegramSectionController.deleteTelegramSection);
exports.TelegramSectionRoute = router;
