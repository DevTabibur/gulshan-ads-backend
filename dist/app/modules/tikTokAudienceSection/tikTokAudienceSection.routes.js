"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokAudienceSectionRoute = void 0;
const express_1 = require("express");
const tikTokAudienceSection_controller_1 = require("./tikTokAudienceSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const tikTokAudienceSection_validation_1 = require("./tikTokAudienceSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /tik-tok-audience-section Create TikTok Audience Section
 * @apiName CreateTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {String} title Main title
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} advertisingBenefit Advertising benefit object
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(tikTokAudienceSection_validation_1.TikTokAudienceSectionValidation.createTikTokAudienceSectionZodSchema), tikTokAudienceSection_controller_1.TikTokAudienceSectionController.createTikTokAudienceSection);
/**
 * @api {get} /tik-tok-audience-section Get TikTok Audience Section
 * @apiName GetTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', tikTokAudienceSection_controller_1.TikTokAudienceSectionController.getTikTokAudienceSection);
/**
 * @api {patch} /tik-tok-audience-section Update TikTok Audience Section
 * @apiName UpdateTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [advertisingBenefit] Advertising benefit object
 * @apiParam {Object} [testimonialCard] Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(tikTokAudienceSection_validation_1.TikTokAudienceSectionValidation.updateTikTokAudienceSectionZodSchema), tikTokAudienceSection_controller_1.TikTokAudienceSectionController.updateTikTokAudienceSection);
/**
 * @api {patch} /tik-tok-audience-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/statistics', (0, zodValidateRequest_1.default)(tikTokAudienceSection_validation_1.TikTokAudienceSectionValidation.updateStatisticsZodSchema), tikTokAudienceSection_controller_1.TikTokAudienceSectionController.updateStatistics);
/**
 * @api {patch} /tik-tok-audience-section/advertising-benefit Update Advertising Benefit
 * @apiName UpdateAdvertisingBenefit
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Object} advertisingBenefit Advertising benefit object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/advertising-benefit', (0, zodValidateRequest_1.default)(tikTokAudienceSection_validation_1.TikTokAudienceSectionValidation.updateAdvertisingBenefitZodSchema), tikTokAudienceSection_controller_1.TikTokAudienceSectionController.updateAdvertisingBenefit);
/**
 * @api {patch} /tik-tok-audience-section/testimonial-card Update Testimonial Card
 * @apiName UpdateTestimonialCard
 * @apiGroup TikTokAudienceSection
 *
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonial-card', (0, zodValidateRequest_1.default)(tikTokAudienceSection_validation_1.TikTokAudienceSectionValidation.updateTestimonialCardZodSchema), tikTokAudienceSection_controller_1.TikTokAudienceSectionController.updateTestimonialCard);
/**
 * @api {delete} /tik-tok-audience-section Delete TikTok Audience Section
 * @apiName DeleteTikTokAudienceSection
 * @apiGroup TikTokAudienceSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok audience section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', tikTokAudienceSection_controller_1.TikTokAudienceSectionController.deleteTikTokAudienceSection);
exports.TikTokAudienceSectionRoute = router;
