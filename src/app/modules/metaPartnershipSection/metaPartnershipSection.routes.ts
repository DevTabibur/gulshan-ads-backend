import { Router } from 'express';
import { MetaPartnershipSectionController } from './metaPartnershipSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { MetaPartnershipSectionValidation } from './metaPartnershipSection.validation';

const router = Router();

/**
 * @api {post} /meta-partnership-section Create Meta Partnership Section
 * @apiName CreateMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Object} leftLogo Left logo object
 * @apiParam {Object} rightLogo Right logo object
 * @apiParam {String} title Main title
 * @apiParam {Array} featureCards Array of feature cards
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(MetaPartnershipSectionValidation.createMetaPartnershipSectionZodSchema),
  MetaPartnershipSectionController.createMetaPartnershipSection,
);

/**
 * @api {get} /meta-partnership-section Get Meta Partnership Section
 * @apiName GetMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', MetaPartnershipSectionController.getMetaPartnershipSection);

/**
 * @api {patch} /meta-partnership-section Update Meta Partnership Section
 * @apiName UpdateMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Object} [leftLogo] Left logo object
 * @apiParam {Object} [rightLogo] Right logo object
 * @apiParam {String} [title] Main title
 * @apiParam {Array} [featureCards] Array of feature cards
 * @apiParam {Object} [ctaButton] CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(MetaPartnershipSectionValidation.updateMetaPartnershipSectionZodSchema),
  MetaPartnershipSectionController.updateMetaPartnershipSection,
);

/**
 * @api {patch} /meta-partnership-section/feature-cards Update Feature Cards
 * @apiName UpdateFeatureCards
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Array} featureCards Array of feature cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/feature-cards',
  zodValidateRequest(MetaPartnershipSectionValidation.updateFeatureCardsZodSchema),
  MetaPartnershipSectionController.updateFeatureCards,
);

/**
 * @api {delete} /meta-partnership-section Delete Meta Partnership Section
 * @apiName DeleteMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', MetaPartnershipSectionController.deleteMetaPartnershipSection);

export const MetaPartnershipSectionRoute = router;
