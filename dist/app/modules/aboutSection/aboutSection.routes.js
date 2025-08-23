"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutSectionRoute = void 0;
const express_1 = require("express");
const aboutSection_controller_1 = require("./aboutSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const aboutSection_validation_1 = require("./aboutSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(aboutSection_validation_1.AboutSectionValidation.createAboutSectionZodSchema), aboutSection_controller_1.AboutSectionController.createAboutSection);
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
router.get('/', aboutSection_controller_1.AboutSectionController.getAboutSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(aboutSection_validation_1.AboutSectionValidation.updateAboutSectionZodSchema), aboutSection_controller_1.AboutSectionController.updateAboutSection);
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
router.patch('/statistics', (0, zodValidateRequest_1.default)(aboutSection_validation_1.AboutSectionValidation.updateStatisticsZodSchema), aboutSection_controller_1.AboutSectionController.updateStatistics);
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
router.patch('/client-types', (0, zodValidateRequest_1.default)(aboutSection_validation_1.AboutSectionValidation.updateClientTypesZodSchema), aboutSection_controller_1.AboutSectionController.updateClientTypes);
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
router.patch('/mission-pillars', (0, zodValidateRequest_1.default)(aboutSection_validation_1.AboutSectionValidation.updateMissionPillarsZodSchema), aboutSection_controller_1.AboutSectionController.updateMissionPillars);
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
router.delete('/', aboutSection_controller_1.AboutSectionController.deleteAboutSection);
exports.AboutSectionRoute = router;
