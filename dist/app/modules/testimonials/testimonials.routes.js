"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialRoute = void 0;
const express_1 = require("express");
const testimonials_controller_1 = require("./testimonials.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const testimonials_validation_1 = require("./testimonials.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /testimonials Create Testimonial
 * @apiName CreateTestimonial
 * @apiGroup Testimonials
 *
 * @apiParam {String} authorUrl Author's profile URL
 * @apiParam {String} fullName Author's full name
 * @apiParam {Number} rating Rating (1-5)
 * @apiParam {String} companyName Company name
 * @apiParam {String} description Testimonial description
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created testimonial data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(testimonials_validation_1.TestimonialValidation.createTestimonialZodSchema), testimonials_controller_1.TestimonialController.createTestimonial);
/**
 * @api {get} /testimonials Get All Testimonials
 * @apiName GetAllTestimonials
 * @apiGroup Testimonials
 *
 * @apiQuery {String} [searchTerm] Search term for filtering
 * @apiQuery {String} [fullName] Filter by full name
 * @apiQuery {String} [companyName] Filter by company name
 * @apiQuery {Number} [rating] Filter by rating
 * @apiQuery {Number} [page] Page number
 * @apiQuery {Number} [limit] Items per page
 * @apiQuery {String} [sortBy] Sort field
 * @apiQuery {String} [sortOrder] Sort order (asc/desc)
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Array} data Array of testimonials
 * @apiSuccess {Object} meta Pagination metadata
 *
 * @apiError {Object} error Error message
 */
router.get('/', testimonials_controller_1.TestimonialController.getAllTestimonials);
/**
 * @api {get} /testimonials/:id Get Testimonial by ID
 * @apiName GetTestimonialById
 * @apiGroup Testimonials
 *
 * @apiParam {String} id Testimonial ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Testimonial data
 *
 * @apiError {Object} error Error message
 */
router.get('/:id', (0, zodValidateRequest_1.default)(testimonials_validation_1.TestimonialValidation.getTestimonialByIdZodSchema), testimonials_controller_1.TestimonialController.getTestimonialById);
/**
 * @api {patch} /testimonials/:id Update Testimonial
 * @apiName UpdateTestimonial
 * @apiGroup Testimonials
 *
 * @apiParam {String} id Testimonial ID
 * @apiParam {String} [authorUrl] Author's profile URL
 * @apiParam {String} [fullName] Author's full name
 * @apiParam {Number} [rating] Rating (1-5)
 * @apiParam {String} [companyName] Company name
 * @apiParam {String} [description] Testimonial description
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated testimonial data
 *
 * @apiError {Object} error Error message
 */
router.patch('/:id', (0, zodValidateRequest_1.default)(testimonials_validation_1.TestimonialValidation.updateTestimonialZodSchema), testimonials_controller_1.TestimonialController.updateTestimonial);
/**
 * @api {delete} /testimonials/:id Delete Testimonial
 * @apiName DeleteTestimonial
 * @apiGroup Testimonials
 *
 * @apiParam {String} id Testimonial ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted testimonial data
 *
 * @apiError {Object} error Error message
 */
router.delete('/:id', (0, zodValidateRequest_1.default)(testimonials_validation_1.TestimonialValidation.deleteTestimonialZodSchema), testimonials_controller_1.TestimonialController.deleteTestimonial);
exports.TestimonialRoute = router;
