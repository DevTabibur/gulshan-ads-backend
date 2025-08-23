import { Router } from 'express';
import { TikTokPartnerSectionController } from './tikTokPartnerSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TikTokPartnerSectionValidation } from './tikTokPartnerSection.validation';

const router = Router();

/**
 * @api {post} /tik-tok-partner-section Create TikTok Partner Section
 * @apiName CreateTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} description Description text
 * @apiParam {Object} partnershipLogos Partnership logos object
 * @apiParam {Array} featureCards Array of feature cards
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TikTokPartnerSectionValidation.createTikTokPartnerSectionZodSchema),
  TikTokPartnerSectionController.createTikTokPartnerSection,
);

/**
 * @api {get} /tik-tok-partner-section Get TikTok Partner Section
 * @apiName GetTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TikTokPartnerSectionController.getTikTokPartnerSection);

/**
 * @api {patch} /tik-tok-partner-section Update TikTok Partner Section
 * @apiName UpdateTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [description] Description text
 * @apiParam {Object} [partnershipLogos] Partnership logos object
 * @apiParam {Array} [featureCards] Array of feature cards
 * @apiParam {Object} [ctaButton] CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TikTokPartnerSectionValidation.updateTikTokPartnerSectionZodSchema),
  TikTokPartnerSectionController.updateTikTokPartnerSection,
);

/**
 * @api {patch} /tik-tok-partner-section/partnership-logos Update Partnership Logos
 * @apiName UpdatePartnershipLogos
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Object} partnershipLogos Partnership logos object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/partnership-logos',
  zodValidateRequest(TikTokPartnerSectionValidation.updatePartnershipLogosZodSchema),
  TikTokPartnerSectionController.updatePartnershipLogos,
);

/**
 * @api {patch} /tik-tok-partner-section/feature-cards Update Feature Cards
 * @apiName UpdateFeatureCards
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Array} featureCards Array of feature cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/feature-cards',
  zodValidateRequest(TikTokPartnerSectionValidation.updateFeatureCardsZodSchema),
  TikTokPartnerSectionController.updateFeatureCards,
);

/**
 * @api {patch} /tik-tok-partner-section/cta-button Update CTA Button
 * @apiName UpdateCTAButton
 * @apiGroup TikTokPartnerSection
 *
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-button',
  zodValidateRequest(TikTokPartnerSectionValidation.updateCTAButtonZodSchema),
  TikTokPartnerSectionController.updateCTAButton,
);

/**
 * @api {delete} /tik-tok-partner-section Delete TikTok Partner Section
 * @apiName DeleteTikTokPartnerSection
 * @apiGroup TikTokPartnerSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok Partner section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TikTokPartnerSectionController.deleteTikTokPartnerSection);

export const TikTokPartnerSectionRoute = router;
