import { Router } from 'express';
import { MetaSuccessStoriesSectionController } from './metaSuccessStoriesSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { MetaSuccessStoriesSectionValidation } from './metaSuccessStoriesSection.validation';

const router = Router();

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
router.post(
  '/',
  zodValidateRequest(MetaSuccessStoriesSectionValidation.createMetaSuccessStoriesSectionZodSchema),
  MetaSuccessStoriesSectionController.createMetaSuccessStoriesSection,
);

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
router.get('/', MetaSuccessStoriesSectionController.getMetaSuccessStoriesSection);

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
router.patch(
  '/',
  zodValidateRequest(MetaSuccessStoriesSectionValidation.updateMetaSuccessStoriesSectionZodSchema),
  MetaSuccessStoriesSectionController.updateMetaSuccessStoriesSection,
);

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
router.patch(
  '/testimonials',
  zodValidateRequest(MetaSuccessStoriesSectionValidation.updateTestimonialsZodSchema),
  MetaSuccessStoriesSectionController.updateTestimonials,
);

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
router.delete('/', MetaSuccessStoriesSectionController.deleteMetaSuccessStoriesSection);

export const MetaSuccessStoriesSectionRoute = router;
