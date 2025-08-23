import { Router } from 'express';
import { TikTokClientSaysSectionController } from './tikTokClientSaysSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TikTokClientSaysSectionValidation } from './tikTokClientSaysSection.validation';

const router = Router();

/**
 * @api {post} /tik-tok-client-says-section Create TikTok Client Says Section
 * @apiName CreateTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle text
 * @apiParam {Array} testimonialCards Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TikTokClientSaysSectionValidation.createTikTokClientSaysSectionZodSchema),
  TikTokClientSaysSectionController.createTikTokClientSaysSection,
);

/**
 * @api {get} /tik-tok-client-says-section Get TikTok Client Says Section
 * @apiName GetTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TikTokClientSaysSectionController.getTikTokClientSaysSection);

/**
 * @api {patch} /tik-tok-client-says-section Update TikTok Client Says Section
 * @apiName UpdateTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle text
 * @apiParam {Array} [testimonialCards] Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TikTokClientSaysSectionValidation.updateTikTokClientSaysSectionZodSchema),
  TikTokClientSaysSectionController.updateTikTokClientSaysSection,
);

/**
 * @api {patch} /tik-tok-client-says-section/testimonial-cards Update Testimonial Cards
 * @apiName UpdateTestimonialCards
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Array} testimonialCards Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/testimonial-cards',
  zodValidateRequest(TikTokClientSaysSectionValidation.updateTestimonialCardsZodSchema),
  TikTokClientSaysSectionController.updateTestimonialCards,
);

/**
 * @api {post} /tik-tok-client-says-section/add-testimonial-card Add Testimonial Card
 * @apiName AddTestimonialCard
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/add-testimonial-card',
  zodValidateRequest(TikTokClientSaysSectionValidation.addTestimonialCardZodSchema),
  TikTokClientSaysSectionController.addTestimonialCard,
);

/**
 * @api {patch} /tik-tok-client-says-section/testimonial-card/:index Update Testimonial Card by Index
 * @apiName UpdateTestimonialCardByIndex
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Number} index Testimonial card index
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/testimonial-card/:index',
  zodValidateRequest(TikTokClientSaysSectionValidation.updateTestimonialCardByIndexZodSchema),
  TikTokClientSaysSectionController.updateTestimonialCardByIndex,
);

/**
 * @api {delete} /tik-tok-client-says-section/testimonial-card/:index Delete Testimonial Card by Index
 * @apiName DeleteTestimonialCardByIndex
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Number} index Testimonial card index
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.delete(
  '/testimonial-card/:index',
  TikTokClientSaysSectionController.deleteTestimonialCardByIndex,
);

/**
 * @api {delete} /tik-tok-client-says-section Delete TikTok Client Says Section
 * @apiName DeleteTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TikTokClientSaysSectionController.deleteTikTokClientSaysSection);

export const TikTokClientSaysSectionRoute = router;
