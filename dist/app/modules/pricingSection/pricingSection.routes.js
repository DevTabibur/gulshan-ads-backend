"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingSectionRoute = void 0;
const express_1 = require("express");
const pricingSection_controller_1 = require("./pricingSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const pricingSection_validation_1 = require("./pricingSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /pricing-section Create Pricing Section
 * @apiName CreatePricingSection
 * @apiGroup PricingSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created pricing section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(pricingSection_validation_1.PricingSectionValidation.createPricingSectionZodSchema), pricingSection_controller_1.PricingSectionController.createPricingSection);
/**
 * @api {get} /pricing-section Get Pricing Section
 * @apiName GetPricingSection
 * @apiGroup PricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Pricing section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', pricingSection_controller_1.PricingSectionController.getPricingSection);
/**
 * @api {patch} /pricing-section Update Pricing Section
 * @apiName UpdatePricingSection
 * @apiGroup PricingSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [plans] Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(pricingSection_validation_1.PricingSectionValidation.updatePricingSectionZodSchema), pricingSection_controller_1.PricingSectionController.updatePricingSection);
/**
 * @api {patch} /pricing-section/plans Update Pricing Plans
 * @apiName UpdatePlans
 * @apiGroup PricingSection
 *
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/plans', (0, zodValidateRequest_1.default)(pricingSection_validation_1.PricingSectionValidation.updatePlansZodSchema), pricingSection_controller_1.PricingSectionController.updatePlans);
/**
 * @api {delete} /pricing-section Delete Pricing Section
 * @apiName DeletePricingSection
 * @apiGroup PricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted pricing section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', pricingSection_controller_1.PricingSectionController.deletePricingSection);
exports.PricingSectionRoute = router;
