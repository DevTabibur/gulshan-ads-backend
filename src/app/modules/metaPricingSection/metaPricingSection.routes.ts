import { Router } from 'express';
import { MetaPricingSectionController } from './metaPricingSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { MetaPricingSectionValidation } from './metaPricingSection.validation';

const router = Router();

/**
 * @api {post} /meta-pricing-section Create Meta Pricing Section
 * @apiName CreateMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Section subtitle
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(MetaPricingSectionValidation.createMetaPricingSectionZodSchema),
  MetaPricingSectionController.createMetaPricingSection,
);

/**
 * @api {get} /meta-pricing-section Get Meta Pricing Section
 * @apiName GetMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', MetaPricingSectionController.getMetaPricingSection);

/**
 * @api {patch} /meta-pricing-section Update Meta Pricing Section
 * @apiName UpdateMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Section subtitle
 * @apiParam {Array} [plans] Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(MetaPricingSectionValidation.updateMetaPricingSectionZodSchema),
  MetaPricingSectionController.updateMetaPricingSection,
);

/**
 * @api {patch} /meta-pricing-section/plans Update Pricing Plans
 * @apiName UpdatePlans
 * @apiGroup MetaPricingSection
 *
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/plans',
  zodValidateRequest(MetaPricingSectionValidation.updatePlansZodSchema),
  MetaPricingSectionController.updatePlans,
);

/**
 * @api {delete} /meta-pricing-section Delete Meta Pricing Section
 * @apiName DeleteMetaPricingSection
 * @apiGroup MetaPricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta pricing section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', MetaPricingSectionController.deleteMetaPricingSection);

export const MetaPricingSectionRoute = router;
