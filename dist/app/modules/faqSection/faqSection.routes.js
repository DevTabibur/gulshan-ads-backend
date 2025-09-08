"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQSectionRoute = void 0;
const express_1 = require("express");
const faqSection_controller_1 = require("./faqSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const faqSection_validation_1 = require("./faqSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /faq-section Create FAQ Section
 * @apiName CreateFAQSection
 * @apiGroup FAQSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Section subtitle
 * @apiParam {Array} faqItems Array of FAQ items
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created FAQ section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(faqSection_validation_1.FAQSectionValidation.createFAQSectionZodSchema), faqSection_controller_1.FAQSectionController.createFAQSection);
/**
 * @api {get} /faq-section Get FAQ Section
 * @apiName GetFAQSection
 * @apiGroup FAQSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data FAQ section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', faqSection_controller_1.FAQSectionController.getFAQSection);
/**
 * @api {patch} /faq-section Update FAQ Section
 * @apiName UpdateFAQSection
 * @apiGroup FAQSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Section subtitle
 * @apiParam {Array} [faqItems] Array of FAQ items
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated FAQ section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(faqSection_validation_1.FAQSectionValidation.updateFAQSectionZodSchema), faqSection_controller_1.FAQSectionController.updateFAQSection);
/**
 * @api {patch} /faq-section/faq-items Update FAQ Items
 * @apiName UpdateFAQItems
 * @apiGroup FAQSection
 *
 * @apiParam {Array} faqItems Array of FAQ items
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated FAQ section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/faq-items', (0, zodValidateRequest_1.default)(faqSection_validation_1.FAQSectionValidation.updateFAQItemsZodSchema), faqSection_controller_1.FAQSectionController.updateFAQItems);
/**
 * @api {delete} /faq-section Delete FAQ Section
 * @apiName DeleteFAQSection
 * @apiGroup FAQSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted FAQ section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', faqSection_controller_1.FAQSectionController.deleteFAQSection);
exports.FAQSectionRoute = router;
