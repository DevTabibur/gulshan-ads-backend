import { Router } from 'express';
import { AdvertisersGettingStartedSecController } from './advertisersGettingStartedSec.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AdvertisersGettingStartedSecValidation } from './advertisersGettingStartedSec.validation';

const router = Router();

/**
 * @api {post} /advertisers-getting-started-sec Create Advertisers Getting Started Section
 * @apiName CreateAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} steps Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(AdvertisersGettingStartedSecValidation.createAdvertisersGettingStartedSecZodSchema),
  AdvertisersGettingStartedSecController.createAdvertisersGettingStartedSec,
);

/**
 * @api {get} /advertisers-getting-started-sec Get Advertisers Getting Started Section
 * @apiName GetAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', AdvertisersGettingStartedSecController.getAdvertisersGettingStartedSec);

/**
 * @api {patch} /advertisers-getting-started-sec Update Advertisers Getting Started Section
 * @apiName UpdateAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [steps] Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(AdvertisersGettingStartedSecValidation.updateAdvertisersGettingStartedSecZodSchema),
  AdvertisersGettingStartedSecController.updateAdvertisersGettingStartedSec,
);

/**
 * @api {patch} /advertisers-getting-started-sec/steps Update Process Steps
 * @apiName UpdateSteps
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {Array} steps Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/steps',
  zodValidateRequest(AdvertisersGettingStartedSecValidation.updateStepsZodSchema),
  AdvertisersGettingStartedSecController.updateSteps,
);

/**
 * @api {delete} /advertisers-getting-started-sec Delete Advertisers Getting Started Section
 * @apiName DeleteAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', AdvertisersGettingStartedSecController.deleteAdvertisersGettingStartedSec);

export const AdvertisersGettingStartedSecRoute = router;
