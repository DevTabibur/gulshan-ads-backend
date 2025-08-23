"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaPricingSectionRoute = void 0;
const express_1 = require("express");
const metaPricingSection_controller_1 = require("./metaPricingSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const metaPricingSection_validation_1 = require("./metaPricingSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /meta-pricing-section Create Meta Pricing Section
 * @apiName CreateMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Section subtitle
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(metaPricingSection_validation_1.MetaPricingSectionValidation.createMetaPricingSectionZodSchema), metaPricingSection_controller_1.MetaPricingSectionController.createMetaPricingSection);
/**
 * @api {get} /meta-pricing-section Get Meta Pricing Section
 * @apiName GetMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', metaPricingSection_controller_1.MetaPricingSectionController.getMetaPricingSection);
/**
 * @api {patch} /meta-pricing-section Update Meta Pricing Section
 * @apiName UpdateMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Section subtitle
 * @apiParam {Array} [plans] Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(metaPricingSection_validation_1.MetaPricingSectionValidation.updateMetaPricingSectionZodSchema), metaPricingSection_controller_1.MetaPricingSectionController.updateMetaPricingSection);
/**
 * @api {patch} /meta-pricing-section/plans Update Pricing Plans
 * @apiName UpdatePlans
 * @apiGroup MetaPricingSection
 *
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/plans', (0, zodValidateRequest_1.default)(metaPricingSection_validation_1.MetaPricingSectionValidation.updatePlansZodSchema), metaPricingSection_controller_1.MetaPricingSectionController.updatePlans);
/**
 * @api {delete} /meta-pricing-section Delete Meta Pricing Section
 * @apiName DeleteMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', metaPricingSection_controller_1.MetaPricingSectionController.deleteMetaPricingSection);
exports.MetaPricingSectionRoute = router;
