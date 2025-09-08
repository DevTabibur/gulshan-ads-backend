"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaSuccessStoriesSectionRoute = void 0;
const express_1 = require("express");
const metaSuccessStoriesSection_controller_1 = require("./metaSuccessStoriesSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const metaSuccessStoriesSection_validation_1 = require("./metaSuccessStoriesSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /meta-success-stories-section Create Meta Success Stories Section
 * @apiName CreateMetaSuccessStoriesSection
 * @apiGroup MetaSuccessStoriesSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Section subtitle
 * @apiParam {Array} testimonials Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta success stories section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(metaSuccessStoriesSection_validation_1.MetaSuccessStoriesSectionValidation.createMetaSuccessStoriesSectionZodSchema), metaSuccessStoriesSection_controller_1.MetaSuccessStoriesSectionController.createMetaSuccessStoriesSection);
/**
 * @api {get} /meta-success-stories-section Get Meta Success Stories Section
 * @apiName GetMetaSuccessStoriesSection
 * @apiGroup MetaSuccessStoriesSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta success stories section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', metaSuccessStoriesSection_controller_1.MetaSuccessStoriesSectionController.getMetaSuccessStoriesSection);
/**
 * @api {patch} /meta-success-stories-section Update Meta Success Stories Section
 * @apiName UpdateMetaSuccessStoriesSection
 * @apiGroup MetaSuccessStoriesSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Section subtitle
 * @apiParam {Array} [testimonials] Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta success stories section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(metaSuccessStoriesSection_validation_1.MetaSuccessStoriesSectionValidation.updateMetaSuccessStoriesSectionZodSchema), metaSuccessStoriesSection_controller_1.MetaSuccessStoriesSectionController.updateMetaSuccessStoriesSection);
/**
 * @api {patch} /meta-success-stories-section/testimonials Update Testimonials
 * @apiName UpdateTestimonials
 * @apiGroup MetaSuccessStoriesSection
 *
 * @apiParam {Array} testimonials Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta success stories section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonials', (0, zodValidateRequest_1.default)(metaSuccessStoriesSection_validation_1.MetaSuccessStoriesSectionValidation.updateTestimonialsZodSchema), metaSuccessStoriesSection_controller_1.MetaSuccessStoriesSectionController.updateTestimonials);
/**
 * @api {delete} /meta-success-stories-section Delete Meta Success Stories Section
 * @apiName DeleteMetaSuccessStoriesSection
 * @apiGroup MetaSuccessStoriesSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta success stories section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', metaSuccessStoriesSection_controller_1.MetaSuccessStoriesSectionController.deleteMetaSuccessStoriesSection);
exports.MetaSuccessStoriesSectionRoute = router;
