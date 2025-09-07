import { Router } from 'express';
import { TestimonialController } from './testimonials.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TestimonialValidation } from './testimonials.validation';
import authGuard from '../../middlewares/authGuard';
import uploadMiddleware from '../../middlewares/fileUploadAndConvertToWebP';

const router = Router();

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
router.post(
  '/',
  authGuard(),
  uploadMiddleware,
  TestimonialController.createTestimonial,
);

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
router.get('/', TestimonialController.getAllTestimonials);

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
router.get(
  '/:id',
  zodValidateRequest(TestimonialValidation.getTestimonialByIdZodSchema),
  TestimonialController.getTestimonialById,
);

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
router.patch(
  '/:id',
  zodValidateRequest(TestimonialValidation.updateTestimonialZodSchema),
  TestimonialController.updateTestimonial,
);

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
router.delete(
  '/:id',
  zodValidateRequest(TestimonialValidation.deleteTestimonialZodSchema),
  TestimonialController.deleteTestimonial,
);

export const TestimonialRoute = router;
