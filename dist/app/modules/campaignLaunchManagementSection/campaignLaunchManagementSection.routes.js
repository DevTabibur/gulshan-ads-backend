"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignLaunchManagementSectionRoute = void 0;
const express_1 = require("express");
const campaignLaunchManagementSection_controller_1 = require("./campaignLaunchManagementSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const campaignLaunchManagementSection_validation_1 = require("./campaignLaunchManagementSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(campaignLaunchManagementSection_validation_1.CampaignLaunchManagementSectionValidation.createCampaignLaunchManagementSectionZodSchema), campaignLaunchManagementSection_controller_1.CampaignLaunchManagementSectionController.createCampaignLaunchManagementSection);
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
router.get('/', campaignLaunchManagementSection_controller_1.CampaignLaunchManagementSectionController.getCampaignLaunchManagementSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(campaignLaunchManagementSection_validation_1.CampaignLaunchManagementSectionValidation.updateCampaignLaunchManagementSectionZodSchema), campaignLaunchManagementSection_controller_1.CampaignLaunchManagementSectionController.updateCampaignLaunchManagementSection);
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
router.patch('/cards', (0, zodValidateRequest_1.default)(campaignLaunchManagementSection_validation_1.CampaignLaunchManagementSectionValidation.updateCardsZodSchema), campaignLaunchManagementSection_controller_1.CampaignLaunchManagementSectionController.updateCards);
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
router.delete('/', campaignLaunchManagementSection_controller_1.CampaignLaunchManagementSectionController.deleteCampaignLaunchManagementSection);
exports.CampaignLaunchManagementSectionRoute = router;
