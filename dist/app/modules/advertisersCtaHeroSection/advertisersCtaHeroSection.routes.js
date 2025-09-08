"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersCtaHeroSectionRoute = void 0;
const express_1 = require("express");
const advertisersCtaHeroSection_controller_1 = require("./advertisersCtaHeroSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const advertisersCtaHeroSection_validation_1 = require("./advertisersCtaHeroSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /advertisers-cta-hero-section Create Advertisers CTA Hero Section
 * @apiName CreateAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Array} benefits Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(advertisersCtaHeroSection_validation_1.AdvertisersCtaHeroSectionValidation.createAdvertisersCtaHeroSectionZodSchema), advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.createAdvertisersCtaHeroSection);
/**
 * @api {get} /advertisers-cta-hero-section Get Advertisers CTA Hero Section
 * @apiName GetAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.getAdvertisersCtaHeroSection);
/**
 * @api {patch} /advertisers-cta-hero-section Update Advertisers CTA Hero Section
 * @apiName UpdateAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Array} [benefits] Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(advertisersCtaHeroSection_validation_1.AdvertisersCtaHeroSectionValidation.updateAdvertisersCtaHeroSectionZodSchema), advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.updateAdvertisersCtaHeroSection);
/**
 * @api {patch} /advertisers-cta-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(advertisersCtaHeroSection_validation_1.AdvertisersCtaHeroSectionValidation.updateCTAButtonsZodSchema), advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.updateCTAButtons);
/**
 * @api {patch} /advertisers-cta-hero-section/benefits Update Benefits
 * @apiName UpdateBenefits
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiParam {Array} benefits Array of benefits
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/benefits', (0, zodValidateRequest_1.default)(advertisersCtaHeroSection_validation_1.AdvertisersCtaHeroSectionValidation.updateBenefitsZodSchema), advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.updateBenefits);
/**
 * @api {delete} /advertisers-cta-hero-section Delete Advertisers CTA Hero Section
 * @apiName DeleteAdvertisersCtaHeroSection
 * @apiGroup AdvertisersCtaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers CTA hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', advertisersCtaHeroSection_controller_1.AdvertisersCtaHeroSectionController.deleteAdvertisersCtaHeroSection);
exports.AdvertisersCtaHeroSectionRoute = router;
