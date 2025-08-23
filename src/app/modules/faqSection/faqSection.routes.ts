import { Router } from 'express';
import { FAQSectionController } from './faqSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { FAQSectionValidation } from './faqSection.validation';

const router = Router();

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
router.post(
  '/',
  zodValidateRequest(FAQSectionValidation.createFAQSectionZodSchema),
  FAQSectionController.createFAQSection,
);

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
router.get('/', FAQSectionController.getFAQSection);

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
router.patch(
  '/',
  zodValidateRequest(FAQSectionValidation.updateFAQSectionZodSchema),
  FAQSectionController.updateFAQSection,
);

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
router.patch(
  '/faq-items',
  zodValidateRequest(FAQSectionValidation.updateFAQItemsZodSchema),
  FAQSectionController.updateFAQItems,
);

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
router.delete('/', FAQSectionController.deleteFAQSection);

export const FAQSectionRoute = router;
