"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustSectionRoute = void 0;
const express_1 = require("express");
const trustSection_controller_1 = require("./trustSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const trustSection_validation_1 = require("./trustSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /trust-section Create Trust Section
 * @apiName CreateTrustSection
 * @apiGroup TrustSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} trustedCompanies Array of trusted companies
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} featuredTestimonial Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created trust section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(trustSection_validation_1.TrustSectionValidation.createTrustSectionZodSchema), trustSection_controller_1.TrustSectionController.createTrustSection);
/**
 * @api {get} /trust-section Get Trust Section
 * @apiName GetTrustSection
 * @apiGroup TrustSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Trust section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', trustSection_controller_1.TrustSectionController.getTrustSection);
/**
 * @api {patch} /trust-section Update Trust Section
 * @apiName UpdateTrustSection
 * @apiGroup TrustSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [trustedCompanies] Array of trusted companies
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [featuredTestimonial] Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(trustSection_validation_1.TrustSectionValidation.updateTrustSectionZodSchema), trustSection_controller_1.TrustSectionController.updateTrustSection);
/**
 * @api {patch} /trust-section/companies Update Trusted Companies
 * @apiName UpdateTrustedCompanies
 * @apiGroup TrustSection
 *
 * @apiParam {Array} trustedCompanies Array of trusted companies
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/companies', (0, zodValidateRequest_1.default)(trustSection_validation_1.TrustSectionValidation.updateTrustedCompaniesZodSchema), trustSection_controller_1.TrustSectionController.updateTrustedCompanies);
/**
 * @api {patch} /trust-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TrustSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/statistics', (0, zodValidateRequest_1.default)(trustSection_validation_1.TrustSectionValidation.updateStatisticsZodSchema), trustSection_controller_1.TrustSectionController.updateStatistics);
/**
 * @api {patch} /trust-section/testimonial Update Featured Testimonial
 * @apiName UpdateFeaturedTestimonial
 * @apiGroup TrustSection
 *
 * @apiParam {Object} featuredTestimonial Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonial', (0, zodValidateRequest_1.default)(trustSection_validation_1.TrustSectionValidation.updateFeaturedTestimonialZodSchema), trustSection_controller_1.TrustSectionController.updateFeaturedTestimonial);
/**
 * @api {delete} /trust-section Delete Trust Section
 * @apiName DeleteTrustSection
 * @apiGroup TrustSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted trust section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', trustSection_controller_1.TrustSectionController.deleteTrustSection);
exports.TrustSectionRoute = router;
