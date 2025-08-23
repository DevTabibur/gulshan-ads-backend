"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GettingStartedSectionRoute = void 0;
const express_1 = require("express");
const gettingStartedSection_controller_1 = require("./gettingStartedSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const gettingStartedSection_validation_1 = require("./gettingStartedSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /getting-started-section Create Getting Started Section
 * @apiName CreateGettingStartedSection
 * @apiGroup GettingStartedSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} description Main description
 * @apiParam {Array} steps Array of steps
 * @apiParam {String} ctaTitle Call-to-action title
 * @apiParam {String} ctaDescription Call-to-action description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created getting started section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(gettingStartedSection_validation_1.GettingStartedSectionValidation.createGettingStartedSectionZodSchema), gettingStartedSection_controller_1.GettingStartedSectionController.createGettingStartedSection);
/**
 * @api {get} /getting-started-section Get Getting Started Section
 * @apiName GetGettingStartedSection
 * @apiGroup GettingStartedSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Getting started section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', gettingStartedSection_controller_1.GettingStartedSectionController.getGettingStartedSection);
/**
 * @api {patch} /getting-started-section Update Getting Started Section
 * @apiName UpdateGettingStartedSection
 * @apiGroup GettingStartedSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [description] Main description
 * @apiParam {Array} [steps] Array of steps
 * @apiParam {String} [ctaTitle] Call-to-action title
 * @apiParam {String} [ctaDescription] Call-to-action description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(gettingStartedSection_validation_1.GettingStartedSectionValidation.updateGettingStartedSectionZodSchema), gettingStartedSection_controller_1.GettingStartedSectionController.updateGettingStartedSection);
/**
 * @api {patch} /getting-started-section/steps Update Steps
 * @apiName UpdateSteps
 * @apiGroup GettingStartedSection
 *
 * @apiParam {Array} steps Array of steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/steps', (0, zodValidateRequest_1.default)(gettingStartedSection_validation_1.GettingStartedSectionValidation.updateStepsZodSchema), gettingStartedSection_controller_1.GettingStartedSectionController.updateSteps);
/**
 * @api {patch} /getting-started-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup GettingStartedSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(gettingStartedSection_validation_1.GettingStartedSectionValidation.updateCTAButtonsZodSchema), gettingStartedSection_controller_1.GettingStartedSectionController.updateCTAButtons);
/**
 * @api {delete} /getting-started-section Delete Getting Started Section
 * @apiName DeleteGettingStartedSection
 * @apiGroup GettingStartedSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted getting started section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', gettingStartedSection_controller_1.GettingStartedSectionController.deleteGettingStartedSection);
exports.GettingStartedSectionRoute = router;
