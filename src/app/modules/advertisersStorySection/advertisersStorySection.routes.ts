import { Router } from 'express';
import { AdvertisersStorySectionController } from './advertisersStorySection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AdvertisersStorySectionValidation } from './advertisersStorySection.validation';

const router = Router();

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
router.post(
  '/',
  zodValidateRequest(AdvertisersStorySectionValidation.createAdvertisersStorySectionZodSchema),
  AdvertisersStorySectionController.createAdvertisersStorySection,
);

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
router.get('/', AdvertisersStorySectionController.getAdvertisersStorySection);

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
router.patch(
  '/',
  zodValidateRequest(AdvertisersStorySectionValidation.updateAdvertisersStorySectionZodSchema),
  AdvertisersStorySectionController.updateAdvertisersStorySection,
);

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
router.patch(
  '/testimonials',
  zodValidateRequest(AdvertisersStorySectionValidation.updateTestimonialsZodSchema),
  AdvertisersStorySectionController.updateTestimonials,
);

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
router.delete('/', AdvertisersStorySectionController.deleteAdvertisersStorySection);

export const AdvertisersStorySectionRoute = router;
