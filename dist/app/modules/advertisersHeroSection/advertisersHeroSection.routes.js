"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersHeroSectionRoute = void 0;
const express_1 = require("express");
const advertisersHeroSection_controller_1 = require("./advertisersHeroSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const advertisersHeroSection_validation_1 = require("./advertisersHeroSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /advertisers-hero-section Create Advertisers Hero Section
 * @apiName CreateAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} topPill Top pill object
 * @apiParam {String} mainTitle Main title
 * @apiParam {String} mainDescription Main description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Object} rating Rating object
 * @apiParam {Object} campaignPerformance Campaign performance object
 * @apiParam {Array} bottomStatistics Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(advertisersHeroSection_validation_1.AdvertisersHeroSectionValidation.createAdvertisersHeroSectionZodSchema), advertisersHeroSection_controller_1.AdvertisersHeroSectionController.createAdvertisersHeroSection);
/**
 * @api {get} /advertisers-hero-section Get Advertisers Hero Section
 * @apiName GetAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', advertisersHeroSection_controller_1.AdvertisersHeroSectionController.getAdvertisersHeroSection);
/**
 * @api {patch} /advertisers-hero-section Update Advertisers Hero Section
 * @apiName UpdateAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} [topPill] Top pill object
 * @apiParam {String} [mainTitle] Main title
 * @apiParam {String} [mainDescription] Main description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Object} [rating] Rating object
 * @apiParam {Object} [campaignPerformance] Campaign performance object
 * @apiParam {Array} [bottomStatistics] Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(advertisersHeroSection_validation_1.AdvertisersHeroSectionValidation.updateAdvertisersHeroSectionZodSchema), advertisersHeroSection_controller_1.AdvertisersHeroSectionController.updateAdvertisersHeroSection);
/**
 * @api {patch} /advertisers-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(advertisersHeroSection_validation_1.AdvertisersHeroSectionValidation.updateCTAButtonsZodSchema), advertisersHeroSection_controller_1.AdvertisersHeroSectionController.updateCTAButtons);
/**
 * @api {patch} /advertisers-hero-section/campaign-performance Update Campaign Performance
 * @apiName UpdateCampaignPerformance
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Object} campaignPerformance Campaign performance object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/campaign-performance', (0, zodValidateRequest_1.default)(advertisersHeroSection_validation_1.AdvertisersHeroSectionValidation.updateCampaignPerformanceZodSchema), advertisersHeroSection_controller_1.AdvertisersHeroSectionController.updateCampaignPerformance);
/**
 * @api {patch} /advertisers-hero-section/bottom-statistics Update Bottom Statistics
 * @apiName UpdateBottomStatistics
 * @apiGroup AdvertisersHeroSection
 *
 * @apiParam {Array} bottomStatistics Array of bottom statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/bottom-statistics', (0, zodValidateRequest_1.default)(advertisersHeroSection_validation_1.AdvertisersHeroSectionValidation.updateBottomStatisticsZodSchema), advertisersHeroSection_controller_1.AdvertisersHeroSectionController.updateBottomStatistics);
/**
 * @api {delete} /advertisers-hero-section Delete Advertisers Hero Section
 * @apiName DeleteAdvertisersHeroSection
 * @apiGroup AdvertisersHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', advertisersHeroSection_controller_1.AdvertisersHeroSectionController.deleteAdvertisersHeroSection);
exports.AdvertisersHeroSectionRoute = router;
