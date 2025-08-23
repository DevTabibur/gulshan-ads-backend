"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokPartnerSectionRoute = void 0;
const express_1 = require("express");
const tikTokPartnerSection_controller_1 = require("./tikTokPartnerSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const tikTokPartnerSection_validation_1 = require("./tikTokPartnerSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /tik-tok-partner-section Create TikTok Partner Section
 * @apiName CreateTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} description Description text
 * @apiParam {Object} partnershipLogos Partnership logos object
 * @apiParam {Array} featureCards Array of feature cards
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(tikTokPartnerSection_validation_1.TikTokPartnerSectionValidation.createTikTokPartnerSectionZodSchema), tikTokPartnerSection_controller_1.TikTokPartnerSectionController.createTikTokPartnerSection);
/**
 * @api {get} /tik-tok-partner-section Get TikTok Partner Section
 * @apiName GetTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', tikTokPartnerSection_controller_1.TikTokPartnerSectionController.getTikTokPartnerSection);
/**
 * @api {patch} /tik-tok-partner-section Update TikTok Partner Section
 * @apiName UpdateTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [description] Description text
 * @apiParam {Object} [partnershipLogos] Partnership logos object
 * @apiParam {Array} [featureCards] Array of feature cards
 * @apiParam {Object} [ctaButton] CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(tikTokPartnerSection_validation_1.TikTokPartnerSectionValidation.updateTikTokPartnerSectionZodSchema), tikTokPartnerSection_controller_1.TikTokPartnerSectionController.updateTikTokPartnerSection);
/**
 * @api {patch} /tik-tok-partner-section/partnership-logos Update Partnership Logos
 * @apiName UpdatePartnershipLogos
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Object} partnershipLogos Partnership logos object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/partnership-logos', (0, zodValidateRequest_1.default)(tikTokPartnerSection_validation_1.TikTokPartnerSectionValidation.updatePartnershipLogosZodSchema), tikTokPartnerSection_controller_1.TikTokPartnerSectionController.updatePartnershipLogos);
/**
 * @api {patch} /tik-tok-partner-section/feature-cards Update Feature Cards
 * @apiName UpdateFeatureCards
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Array} featureCards Array of feature cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/feature-cards', (0, zodValidateRequest_1.default)(tikTokPartnerSection_validation_1.TikTokPartnerSectionValidation.updateFeatureCardsZodSchema), tikTokPartnerSection_controller_1.TikTokPartnerSectionController.updateFeatureCards);
/**
 * @api {patch} /tik-tok-partner-section/cta-button Update CTA Button
 * @apiName UpdateCTAButton
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/cta-button', (0, zodValidateRequest_1.default)(tikTokPartnerSection_validation_1.TikTokPartnerSectionValidation.updateCTAButtonZodSchema), tikTokPartnerSection_controller_1.TikTokPartnerSectionController.updateCTAButton);
/**
 * @api {delete} /tik-tok-partner-section Delete TikTok Partner Section
 * @apiName DeleteTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', tikTokPartnerSection_controller_1.TikTokPartnerSectionController.deleteTikTokPartnerSection);
exports.TikTokPartnerSectionRoute = router;
