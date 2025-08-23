import { Router } from 'express';
import { PricingSectionController } from './pricingSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { PricingSectionValidation } from './pricingSection.validation';

const router = Router();

/**
 * @api {post} /pricing-section Create Pricing Section
 * @apiName CreatePricingSection
 * @apiGroup PricingSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created pricing section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(PricingSectionValidation.createPricingSectionZodSchema),
  PricingSectionController.createPricingSection,
);

/**
 * @api {get} /pricing-section Get Pricing Section
 * @apiName GetPricingSection
 * @apiGroup PricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Pricing section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', PricingSectionController.getPricingSection);

/**
 * @api {patch} /pricing-section Update Pricing Section
 * @apiName UpdatePricingSection
 * @apiGroup PricingSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [plans] Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(PricingSectionValidation.updatePricingSectionZodSchema),
  PricingSectionController.updatePricingSection,
);

/**
 * @api {patch} /pricing-section/plans Update Pricing Plans
 * @apiName UpdatePlans
 * @apiGroup PricingSection
 *
 * @apiParam {Array} plans Array of pricing plans
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated pricing section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/plans',
  zodValidateRequest(PricingSectionValidation.updatePlansZodSchema),
  PricingSectionController.updatePlans,
);

/**
 * @api {delete} /pricing-section Delete Pricing Section
 * @apiName DeletePricingSection
 * @apiGroup PricingSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted pricing section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', PricingSectionController.deletePricingSection);

export const PricingSectionRoute = router;
