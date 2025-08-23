"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAutomationSectionRoute = void 0;
const express_1 = require("express");
const paymentAutomationSection_controller_1 = require("./paymentAutomationSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const paymentAutomationSection_validation_1 = require("./paymentAutomationSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.createPaymentAutomationSectionZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.createPaymentAutomationSection);
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
router.get('/', paymentAutomationSection_controller_1.PaymentAutomationSectionController.getPaymentAutomationSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.updatePaymentAutomationSectionZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.updatePaymentAutomationSection);
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
router.patch('/benefit-tags', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.updateBenefitTagsZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.updateBenefitTags);
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
router.patch('/feature-cards', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.updateFeatureCardsZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.updateFeatureCards);
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
router.patch('/financial-callout-text', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.updateFinancialCalloutTextZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.updateFinancialCalloutText);
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
router.patch('/cta-button', (0, zodValidateRequest_1.default)(paymentAutomationSection_validation_1.PaymentAutomationSectionValidation.updateCTAButtonZodSchema), paymentAutomationSection_controller_1.PaymentAutomationSectionController.updateCTAButton);
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
router.delete('/', paymentAutomationSection_controller_1.PaymentAutomationSectionController.deletePaymentAutomationSection);
exports.PaymentAutomationSectionRoute = router;
