"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersStorySectionRoute = void 0;
const express_1 = require("express");
const advertisersStorySection_controller_1 = require("./advertisersStorySection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const advertisersStorySection_validation_1 = require("./advertisersStorySection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /advertisers-story-section Create Advertisers Story Section
 * @apiName CreateAdvertisersStorySection
 * @apiGroup AdvertisersStorySection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} testimonials Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers story section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(advertisersStorySection_validation_1.AdvertisersStorySectionValidation.createAdvertisersStorySectionZodSchema), advertisersStorySection_controller_1.AdvertisersStorySectionController.createAdvertisersStorySection);
/**
 * @api {get} /advertisers-story-section Get Advertisers Story Section
 * @apiName GetAdvertisersStorySection
 * @apiGroup AdvertisersStorySection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers story section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', advertisersStorySection_controller_1.AdvertisersStorySectionController.getAdvertisersStorySection);
/**
 * @api {patch} /advertisers-story-section Update Advertisers Story Section
 * @apiName UpdateAdvertisersStorySection
 * @apiGroup AdvertisersStorySection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [testimonials] Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers story section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(advertisersStorySection_validation_1.AdvertisersStorySectionValidation.updateAdvertisersStorySectionZodSchema), advertisersStorySection_controller_1.AdvertisersStorySectionController.updateAdvertisersStorySection);
/**
 * @api {patch} /advertisers-story-section/testimonials Update Testimonials
 * @apiName UpdateTestimonials
 * @apiGroup AdvertisersStorySection
 *
 * @apiParam {Array} testimonials Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers story section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonials', (0, zodValidateRequest_1.default)(advertisersStorySection_validation_1.AdvertisersStorySectionValidation.updateTestimonialsZodSchema), advertisersStorySection_controller_1.AdvertisersStorySectionController.updateTestimonials);
/**
 * @api {delete} /advertisers-story-section Delete Advertisers Story Section
 * @apiName DeleteAdvertisersStorySection
 * @apiGroup AdvertisersStorySection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers story section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', advertisersStorySection_controller_1.AdvertisersStorySectionController.deleteAdvertisersStorySection);
exports.AdvertisersStorySectionRoute = router;
