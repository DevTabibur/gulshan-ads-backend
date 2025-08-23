import { Router } from 'express';
import { TrustSectionController } from './trustSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { TrustSectionValidation } from './trustSection.validation';

const router = Router();

/**
 * @api {post} /trust-section Create Trust Section
 * @apiName CreateTrustSection
 * @apiGroup TrustSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle description
 * @apiParam {Array} trustedCompanies Array of trusted companies
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {Object} featuredTestimonial Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created trust section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(TrustSectionValidation.createTrustSectionZodSchema),
  TrustSectionController.createTrustSection,
);

/**
 * @api {get} /trust-section Get Trust Section
 * @apiName GetTrustSection
 * @apiGroup TrustSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Trust section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', TrustSectionController.getTrustSection);

/**
 * @api {patch} /trust-section Update Trust Section
 * @apiName UpdateTrustSection
 * @apiGroup TrustSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle description
 * @apiParam {Array} [trustedCompanies] Array of trusted companies
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {Object} [featuredTestimonial] Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(TrustSectionValidation.updateTrustSectionZodSchema),
  TrustSectionController.updateTrustSection,
);

/**
 * @api {patch} /trust-section/companies Update Trusted Companies
 * @apiName UpdateTrustedCompanies
 * @apiGroup TrustSection
 *
 * @apiParam {Array} trustedCompanies Array of trusted companies
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/companies',
  zodValidateRequest(TrustSectionValidation.updateTrustedCompaniesZodSchema),
  TrustSectionController.updateTrustedCompanies,
);

/**
 * @api {patch} /trust-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup TrustSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(TrustSectionValidation.updateStatisticsZodSchema),
  TrustSectionController.updateStatistics,
);

/**
 * @api {patch} /trust-section/testimonial Update Featured Testimonial
 * @apiName UpdateFeaturedTestimonial
 * @apiGroup TrustSection
 *
 * @apiParam {Object} featuredTestimonial Featured testimonial object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated trust section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/testimonial',
  zodValidateRequest(TrustSectionValidation.updateFeaturedTestimonialZodSchema),
  TrustSectionController.updateFeaturedTestimonial,
);

/**
 * @api {delete} /trust-section Delete Trust Section
 * @apiName DeleteTrustSection
 * @apiGroup TrustSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted trust section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', TrustSectionController.deleteTrustSection);

export const TrustSectionRoute = router;
