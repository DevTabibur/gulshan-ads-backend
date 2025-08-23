import { Router } from 'express';
import { CampaignLaunchManagementSectionController } from './campaignLaunchManagementSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { CampaignLaunchManagementSectionValidation } from './campaignLaunchManagementSection.validation';

const router = Router();

/**
 * @api {post} /campaign-launch-management-section Create Campaign Launch Management Section
 * @apiName CreateCampaignLaunchManagementSection
 * @apiGroup CampaignLaunchManagementSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} icon Section icon
 * @apiParam {Array} cards Array of management cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created campaign launch management section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(CampaignLaunchManagementSectionValidation.createCampaignLaunchManagementSectionZodSchema),
  CampaignLaunchManagementSectionController.createCampaignLaunchManagementSection,
);

/**
 * @api {get} /campaign-launch-management-section Get Campaign Launch Management Section
 * @apiName GetCampaignLaunchManagementSection
 * @apiGroup CampaignLaunchManagementSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Campaign launch management section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', CampaignLaunchManagementSectionController.getCampaignLaunchManagementSection);

/**
 * @api {patch} /campaign-launch-management-section Update Campaign Launch Management Section
 * @apiName UpdateCampaignLaunchManagementSection
 * @apiGroup CampaignLaunchManagementSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [icon] Section icon
 * @apiParam {Array} [cards] Array of management cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated campaign launch management section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(CampaignLaunchManagementSectionValidation.updateCampaignLaunchManagementSectionZodSchema),
  CampaignLaunchManagementSectionController.updateCampaignLaunchManagementSection,
);

/**
 * @api {patch} /campaign-launch-management-section/cards Update Management Cards
 * @apiName UpdateCards
 * @apiGroup CampaignLaunchManagementSection
 *
 * @apiParam {Array} cards Array of management cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated campaign launch management section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/cards',
  zodValidateRequest(CampaignLaunchManagementSectionValidation.updateCardsZodSchema),
  CampaignLaunchManagementSectionController.updateCards,
);

/**
 * @api {delete} /campaign-launch-management-section Delete Campaign Launch Management Section
 * @apiName DeleteCampaignLaunchManagementSection
 * @apiGroup CampaignLaunchManagementSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted campaign launch management section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', CampaignLaunchManagementSectionController.deleteCampaignLaunchManagementSection);

export const CampaignLaunchManagementSectionRoute = router;
