import { Router } from 'express';
import { AboutSectionController } from './aboutSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { AboutSectionValidation } from './aboutSection.validation';

const router = Router();

/**
 * @api {post} /about-section Create About Section
 * @apiName CreateAboutSection
 * @apiGroup AboutSection
 *
 * @apiParam {String} aboutTitle About section title
 * @apiParam {String} aboutDescription About section description
 * @apiParam {Array} statistics Array of statistics
 * @apiParam {String} weWorkWithTitle We Work With section title
 * @apiParam {String} weWorkWithDescription We Work With section description
 * @apiParam {Array} clientTypes Array of client types
 * @apiParam {String} missionTitle Mission section title
 * @apiParam {String} missionDescription Mission section description
 * @apiParam {Array} missionPillars Array of mission pillars
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created about section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(AboutSectionValidation.createAboutSectionZodSchema),
  AboutSectionController.createAboutSection,
);

/**
 * @api {get} /about-section Get About Section
 * @apiName GetAboutSection
 * @apiGroup AboutSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data About section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', AboutSectionController.getAboutSection);

/**
 * @api {patch} /about-section Update About Section
 * @apiName UpdateAboutSection
 * @apiGroup AboutSection
 *
 * @apiParam {String} [aboutTitle] About section title
 * @apiParam {String} [aboutDescription] About section description
 * @apiParam {Array} [statistics] Array of statistics
 * @apiParam {String} [weWorkWithTitle] We Work With section title
 * @apiParam {String} [weWorkWithDescription] We Work With section description
 * @apiParam {Array} [clientTypes] Array of client types
 * @apiParam {String} [missionTitle] Mission section title
 * @apiParam {String} [missionDescription] Mission section description
 * @apiParam {Array} [missionPillars] Array of mission pillars
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated about section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(AboutSectionValidation.updateAboutSectionZodSchema),
  AboutSectionController.updateAboutSection,
);

/**
 * @api {patch} /about-section/statistics Update Statistics
 * @apiName UpdateStatistics
 * @apiGroup AboutSection
 *
 * @apiParam {Array} statistics Array of statistics
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated about section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/statistics',
  zodValidateRequest(AboutSectionValidation.updateStatisticsZodSchema),
  AboutSectionController.updateStatistics,
);

/**
 * @api {patch} /about-section/client-types Update Client Types
 * @apiName UpdateClientTypes
 * @apiGroup AboutSection
 *
 * @apiParam {Array} clientTypes Array of client types
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated about section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/client-types',
  zodValidateRequest(AboutSectionValidation.updateClientTypesZodSchema),
  AboutSectionController.updateClientTypes,
);

/**
 * @api {patch} /about-section/mission-pillars Update Mission Pillars
 * @apiName UpdateMissionPillars
 * @apiGroup AboutSection
 *
 * @apiParam {Array} missionPillars Array of mission pillars
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated about section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/mission-pillars',
  zodValidateRequest(AboutSectionValidation.updateMissionPillarsZodSchema),
  AboutSectionController.updateMissionPillars,
);

/**
 * @api {delete} /about-section Delete About Section
 * @apiName DeleteAboutSection
 * @apiGroup AboutSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted about section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', AboutSectionController.deleteAboutSection);

export const AboutSectionRoute = router;
