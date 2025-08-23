"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhyChooseUsSectionRoute = void 0;
const express_1 = require("express");
const whyChooseUsSection_controller_1 = require("./whyChooseUsSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const whyChooseUsSection_validation_1 = require("./whyChooseUsSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /why-choose-us-section Create Why Choose Us Section
 * @apiName CreateWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} benefits Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(whyChooseUsSection_validation_1.WhyChooseUsSectionValidation.createWhyChooseUsSectionZodSchema), whyChooseUsSection_controller_1.WhyChooseUsSectionController.createWhyChooseUsSection);
/**
 * @api {get} /why-choose-us-section Get Why Choose Us Section
 * @apiName GetWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', whyChooseUsSection_controller_1.WhyChooseUsSectionController.getWhyChooseUsSection);
/**
 * @api {patch} /why-choose-us-section Update Why Choose Us Section
 * @apiName UpdateWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [benefits] Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(whyChooseUsSection_validation_1.WhyChooseUsSectionValidation.updateWhyChooseUsSectionZodSchema), whyChooseUsSection_controller_1.WhyChooseUsSectionController.updateWhyChooseUsSection);
/**
 * @api {patch} /why-choose-us-section/benefits Update Benefits
 * @apiName UpdateBenefits
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {Array} benefits Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/benefits', (0, zodValidateRequest_1.default)(whyChooseUsSection_validation_1.WhyChooseUsSectionValidation.updateBenefitsZodSchema), whyChooseUsSection_controller_1.WhyChooseUsSectionController.updateBenefits);
/**
 * @api {delete} /why-choose-us-section Delete Why Choose Us Section
 * @apiName DeleteWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', whyChooseUsSection_controller_1.WhyChooseUsSectionController.deleteWhyChooseUsSection);
exports.WhyChooseUsSectionRoute = router;
