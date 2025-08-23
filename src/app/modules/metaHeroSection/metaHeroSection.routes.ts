import { Router } from 'express';
import { MetaHeroSectionController } from './metaHeroSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { MetaHeroSectionValidation } from './metaHeroSection.validation';

const router = Router();

/**
 * @api {post} /meta-hero-section Create Meta Hero Section
 * @apiName CreateMetaHeroSection
 * @apiGroup MetaHeroSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} ctaButtons Array of CTA buttons
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(MetaHeroSectionValidation.createMetaHeroSectionZodSchema),
  MetaHeroSectionController.createMetaHeroSection,
);

/**
 * @api {get} /meta-hero-section Get Meta Hero Section
 * @apiName GetMetaHeroSection
 * @apiGroup MetaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', MetaHeroSectionController.getMetaHeroSection);

/**
 * @api {patch} /meta-hero-section Update Meta Hero Section
 * @apiName UpdateMetaHeroSection
 * @apiGroup MetaHeroSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [ctaButtons] Array of CTA buttons
 * @apiParam {Array} [statistics] Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(MetaHeroSectionValidation.updateMetaHeroSectionZodSchema),
  MetaHeroSectionController.updateMetaHeroSection,
);

/**
 * @api {patch} /meta-hero-section/cta-buttons Update CTA Buttons
 * @apiName UpdateCTAButtons
 * @apiGroup MetaHeroSection
 *
 * @apiParam {Array} ctaButtons Array of CTA buttons
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cta-buttons',
  zodValidateRequest(MetaHeroSectionValidation.updateCTAButtonsZodSchema),
  MetaHeroSectionController.updateCTAButtons,
);

/**
 * @api {patch} /meta-hero-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup MetaHeroSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(MetaHeroSectionValidation.updateStatisticsZodSchema),
  MetaHeroSectionController.updateStatistics,
);

/**
 * @api {delete} /meta-hero-section Delete Meta Hero Section
 * @apiName DeleteMetaHeroSection
 * @apiGroup MetaHeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', MetaHeroSectionController.deleteMetaHeroSection);

export const MetaHeroSectionRoute = router;
