import { Router } from 'express';
import { PaymentAutomationSectionController } from './paymentAutomationSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { PaymentAutomationSectionValidation } from './paymentAutomationSection.validation';

const router = Router();

/**
 * @api {post} /payment-automation-section Create Payment Automation Section
 * @apiName CreatePaymentAutomationSection
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {String} mainTitle Main title
 * @apiParam {String} highlightedText Highlighted text
 * @apiParam {Array} benefitTags Array of benefit tags
 * @apiParam {Array} featureCards Array of feature cards
 * @apiParam {String} financialCalloutText Financial callout text
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(PaymentAutomationSectionValidation.createPaymentAutomationSectionZodSchema),
  PaymentAutomationSectionController.createPaymentAutomationSection,
);

/**
 * @api {get} /payment-automation-section Get Payment Automation Section
 * @apiName GetPaymentAutomationSection
 * @apiGroup PaymentAutomationSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', PaymentAutomationSectionController.getPaymentAutomationSection);

/**
 * @api {patch} /payment-automation-section Update Payment Automation Section
 * @apiName UpdatePaymentAutomationSection
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {String} [mainTitle] Main title
 * @apiParam {String} [highlightedText] Highlighted text
 * @apiParam {Array} [benefitTags] Array of benefit tags
 * @apiParam {Array} [featureCards] Array of feature cards
 * @apiParam {String} [financialCalloutText] Financial callout text
 * @apiParam {Object} [ctaButton] CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(PaymentAutomationSectionValidation.updatePaymentAutomationSectionZodSchema),
  PaymentAutomationSectionController.updatePaymentAutomationSection,
);

/**
 * @api {patch} /payment-automation-section/benefit-tags Update Benefit Tags
 * @apiName UpdateBenefitTags
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {Array} benefitTags Array of benefit tags
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/benefit-tags',
  zodValidateRequest(PaymentAutomationSectionValidation.updateBenefitTagsZodSchema),
  PaymentAutomationSectionController.updateBenefitTags,
);

/**
 * @api {patch} /payment-automation-section/feature-cards Update Feature Cards
 * @apiName UpdateFeatureCards
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {Array} featureCards Array of feature cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/feature-cards',
  zodValidateRequest(PaymentAutomationSectionValidation.updateFeatureCardsZodSchema),
  PaymentAutomationSectionController.updateFeatureCards,
);

/**
 * @api {patch} /payment-automation-section/financial-callout-text Update Financial Callout Text
 * @apiName UpdateFinancialCalloutText
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {String} financialCalloutText Financial callout text
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/financial-callout-text',
  zodValidateRequest(PaymentAutomationSectionValidation.updateFinancialCalloutTextZodSchema),
  PaymentAutomationSectionController.updateFinancialCalloutText,
);

/**
 * @api {patch} /payment-automation-section/cta-button Update CTA Button
 * @apiName UpdateCTAButton
 * @apiGroup PaymentAutomationSection
 *
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-button',
  zodValidateRequest(PaymentAutomationSectionValidation.updateCTAButtonZodSchema),
  PaymentAutomationSectionController.updateCTAButton,
);

/**
 * @api {delete} /payment-automation-section Delete Payment Automation Section
 * @apiName DeletePaymentAutomationSection
 * @apiGroup PaymentAutomationSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted Payment Automation section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', PaymentAutomationSectionController.deletePaymentAutomationSection);

export const PaymentAutomationSectionRoute = router;
