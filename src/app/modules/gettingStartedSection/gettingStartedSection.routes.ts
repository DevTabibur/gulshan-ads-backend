import { Router } from 'express';
import { GettingStartedSectionController } from './gettingStartedSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { GettingStartedSectionValidation } from './gettingStartedSection.validation';

const router = Router();

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
router.post(
  '/',
  zodValidateRequest(GettingStartedSectionValidation.createGettingStartedSectionZodSchema),
  GettingStartedSectionController.createGettingStartedSection,
);

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
router.get('/', GettingStartedSectionController.getGettingStartedSection);

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
router.patch(
  '/',
  zodValidateRequest(GettingStartedSectionValidation.updateGettingStartedSectionZodSchema),
  GettingStartedSectionController.updateGettingStartedSection,
);

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
router.patch(
  '/steps',
  zodValidateRequest(GettingStartedSectionValidation.updateStepsZodSchema),
  GettingStartedSectionController.updateSteps,
);

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
router.patch(
  '/cta-buttons',
  zodValidateRequest(GettingStartedSectionValidation.updateCTAButtonsZodSchema),
  GettingStartedSectionController.updateCTAButtons,
);

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
router.delete('/', GettingStartedSectionController.deleteGettingStartedSection);

export const GettingStartedSectionRoute = router;
