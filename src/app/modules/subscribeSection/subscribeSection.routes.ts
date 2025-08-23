import { Router } from 'express';
import { SubscribeSectionController } from './subscribeSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { SubscribeSectionValidation } from './subscribeSection.validation';

const router = Router();

/**
 * @api {post} /subscribe-section Create Subscribe Section
 * @apiName CreateSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiParam {String} icon Icon identifier or URL
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle text
 * @apiParam {String} emailPlaceholder Email input placeholder text
 * @apiParam {String} subscribeButtonText Subscribe button text
 * @apiParam {String} legalDisclaimer Legal disclaimer text
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(SubscribeSectionValidation.createSubscribeSectionZodSchema),
  SubscribeSectionController.createSubscribeSection,
);

/**
 * @api {get} /subscribe-section Get Subscribe Section
 * @apiName GetSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', SubscribeSectionController.getSubscribeSection);

/**
 * @api {patch} /subscribe-section Update Subscribe Section
 * @apiName UpdateSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiParam {String} [icon] Icon identifier or URL
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle text
 * @apiParam {String} [emailPlaceholder] Email input placeholder text
 * @apiParam {String} [subscribeButtonText] Subscribe button text
 * @apiParam {String} [legalDisclaimer] Legal disclaimer text
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(SubscribeSectionValidation.updateSubscribeSectionZodSchema),
  SubscribeSectionController.updateSubscribeSection,
);

/**
 * @api {delete} /subscribe-section Delete Subscribe Section
 * @apiName DeleteSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', SubscribeSectionController.deleteSubscribeSection);

export const SubscribeSectionRoute = router;
