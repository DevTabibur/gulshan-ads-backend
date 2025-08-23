import { Router } from 'express';
import { TelegramSectionController } from './telegramSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TelegramSectionValidation } from './telegramSection.validation';

const router = Router();

/**
 * @api {post} /telegram-section Create Telegram Section
 * @apiName CreateTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} keyFeatures Array of key features
 * @apiParam {String} pricingTitle Pricing section title
 * @apiParam {Array} pricingPoints Array of pricing points
 * @apiParam {Object} ctaButton CTA button object
 * @apiParam {Object} chatInterface Chat interface object
 * @apiParam {Object} futureBanner Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created telegram section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TelegramSectionValidation.createTelegramSectionZodSchema),
  TelegramSectionController.createTelegramSection,
);

/**
 * @api {get} /telegram-section Get Telegram Section
 * @apiName GetTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Telegram section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TelegramSectionController.getTelegramSection);

/**
 * @api {patch} /telegram-section Update Telegram Section
 * @apiName UpdateTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [keyFeatures] Array of key features
 * @apiParam {String} [pricingTitle] Pricing section title
 * @apiParam {Array} [pricingPoints] Array of pricing points
 * @apiParam {Object} [ctaButton] CTA button object
 * @apiParam {Object} [chatInterface] Chat interface object
 * @apiParam {Object} [futureBanner] Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TelegramSectionValidation.updateTelegramSectionZodSchema),
  TelegramSectionController.updateTelegramSection,
);

/**
 * @api {patch} /telegram-section/key-features Update Key Features
 * @apiName UpdateKeyFeatures
 * @apiGroup TelegramSection
 *
 * @apiParam {Array} keyFeatures Array of key features
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/key-features',
  zodValidateRequest(TelegramSectionValidation.updateKeyFeaturesZodSchema),
  TelegramSectionController.updateKeyFeatures,
);

/**
 * @api {patch} /telegram-section/pricing-points Update Pricing Points
 * @apiName UpdatePricingPoints
 * @apiGroup TelegramSection
 *
 * @apiParam {Array} pricingPoints Array of pricing points
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/pricing-points',
  zodValidateRequest(TelegramSectionValidation.updatePricingPointsZodSchema),
  TelegramSectionController.updatePricingPoints,
);

/**
 * @api {patch} /telegram-section/chat-interface Update Chat Interface
 * @apiName UpdateChatInterface
 * @apiGroup TelegramSection
 *
 * @apiParam {Object} chatInterface Chat interface object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/chat-interface',
  zodValidateRequest(TelegramSectionValidation.updateChatInterfaceZodSchema),
  TelegramSectionController.updateChatInterface,
);

/**
 * @api {patch} /telegram-section/future-banner Update Future Banner
 * @apiName UpdateFutureBanner
 * @apiGroup TelegramSection
 *
 * @apiParam {Object} futureBanner Future banner object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated telegram section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/future-banner',
  zodValidateRequest(TelegramSectionValidation.updateFutureBannerZodSchema),
  TelegramSectionController.updateFutureBanner,
);

/**
 * @api {delete} /telegram-section Delete Telegram Section
 * @apiName DeleteTelegramSection
 * @apiGroup TelegramSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted telegram section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TelegramSectionController.deleteTelegramSection);

export const TelegramSectionRoute = router;
