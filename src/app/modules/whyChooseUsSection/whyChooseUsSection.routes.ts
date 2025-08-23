import { Router } from 'express';
import { WhyChooseUsSectionController } from './whyChooseUsSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { WhyChooseUsSectionValidation } from './whyChooseUsSection.validation';

const router = Router();

/**
 * @api {post} /why-choose-us-section Create Why Choose Us Section
 * @apiName CreateWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} benefits Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(WhyChooseUsSectionValidation.createWhyChooseUsSectionZodSchema),
  WhyChooseUsSectionController.createWhyChooseUsSection,
);

/**
 * @api {get} /why-choose-us-section Get Why Choose Us Section
 * @apiName GetWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', WhyChooseUsSectionController.getWhyChooseUsSection);

/**
 * @api {patch} /why-choose-us-section Update Why Choose Us Section
 * @apiName UpdateWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [benefits] Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(WhyChooseUsSectionValidation.updateWhyChooseUsSectionZodSchema),
  WhyChooseUsSectionController.updateWhyChooseUsSection,
);

/**
 * @api {patch} /why-choose-us-section/benefits Update Benefits
 * @apiName UpdateBenefits
 * @apiGroup WhyChooseUsSection
 *
 * @apiParam {Array} benefits Array of benefit cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/benefits',
  zodValidateRequest(WhyChooseUsSectionValidation.updateBenefitsZodSchema),
  WhyChooseUsSectionController.updateBenefits,
);

/**
 * @api {delete} /why-choose-us-section Delete Why Choose Us Section
 * @apiName DeleteWhyChooseUsSection
 * @apiGroup WhyChooseUsSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted why choose us section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', WhyChooseUsSectionController.deleteWhyChooseUsSection);

export const WhyChooseUsSectionRoute = router;
