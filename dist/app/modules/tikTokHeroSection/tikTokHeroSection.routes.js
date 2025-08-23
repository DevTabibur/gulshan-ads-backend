"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokHeroSectionRoute = void 0;
const express_1 = require("express");
const tikTokHeroSection_controller_1 = require("./tikTokHeroSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const tikTokHeroSection_validation_1 = require("./tikTokHeroSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /tik-tok-hero-section Create TikTok Hero Section
 * @apiName CreateTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} description Section description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} phoneMockup Phone mockup object
 * @apiParam {Object} decorativeElements Decorative elements object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(tikTokHeroSection_validation_1.TikTokHeroSectionValidation.createTikTokHeroSectionZodSchema), tikTokHeroSection_controller_1.TikTokHeroSectionController.createTikTokHeroSection);
/**
 * @api {get} /tik-tok-hero-section Get TikTok Hero Section
 * @apiName GetTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', tikTokHeroSection_controller_1.TikTokHeroSectionController.getTikTokHeroSection);
/**
 * @api {patch} /tik-tok-hero-section Update TikTok Hero Section
 * @apiName UpdateTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [description] Section description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [phoneMockup] Phone mockup object
 * @apiParam {Object} [decorativeElements] Decorative elements object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(tikTokHeroSection_validation_1.TikTokHeroSectionValidation.updateTikTokHeroSectionZodSchema), tikTokHeroSection_controller_1.TikTokHeroSectionController.updateTikTokHeroSection);
/**
 * @api {patch} /tik-tok-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(tikTokHeroSection_validation_1.TikTokHeroSectionValidation.updateCTAButtonsZodSchema), tikTokHeroSection_controller_1.TikTokHeroSectionController.updateCTAButtons);
/**
 * @api {patch} /tik-tok-hero-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/statistics', (0, zodValidateRequest_1.default)(tikTokHeroSection_validation_1.TikTokHeroSectionValidation.updateStatisticsZodSchema), tikTokHeroSection_controller_1.TikTokHeroSectionController.updateStatistics);
/**
 * @api {patch} /tik-tok-hero-section/phone-mockup Update Phone Mockup
 * @apiName UpdatePhoneMockup
 * @apiGroup TikTokHeroSection
 *
 * @apiParam {Object} phoneMockup Phone mockup object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/phone-mockup', (0, zodValidateRequest_1.default)(tikTokHeroSection_validation_1.TikTokHeroSectionValidation.updatePhoneMockupZodSchema), tikTokHeroSection_controller_1.TikTokHeroSectionController.updatePhoneMockup);
/**
 * @api {delete} /tik-tok-hero-section Delete TikTok Hero Section
 * @apiName DeleteTikTokHeroSection
 * @apiGroup TikTokHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', tikTokHeroSection_controller_1.TikTokHeroSectionController.deleteTikTokHeroSection);
exports.TikTokHeroSectionRoute = router;
