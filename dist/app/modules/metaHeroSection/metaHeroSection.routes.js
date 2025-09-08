"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHeroSectionRoute = void 0;
const express_1 = require("express");
const metaHeroSection_controller_1 = require("./metaHeroSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const metaHeroSection_validation_1 = require("./metaHeroSection.validation");
const router = (0, express_1.Router)();
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
router.post('/', (0, zodValidateRequest_1.default)(metaHeroSection_validation_1.MetaHeroSectionValidation.createMetaHeroSectionZodSchema), metaHeroSection_controller_1.MetaHeroSectionController.createMetaHeroSection);
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
router.get('/', metaHeroSection_controller_1.MetaHeroSectionController.getMetaHeroSection);
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
router.patch('/', (0, zodValidateRequest_1.default)(metaHeroSection_validation_1.MetaHeroSectionValidation.updateMetaHeroSectionZodSchema), metaHeroSection_controller_1.MetaHeroSectionController.updateMetaHeroSection);
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
router.patch('/cta-buttons', (0, zodValidateRequest_1.default)(metaHeroSection_validation_1.MetaHeroSectionValidation.updateCTAButtonsZodSchema), metaHeroSection_controller_1.MetaHeroSectionController.updateCTAButtons);
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
router.patch('/statistics', (0, zodValidateRequest_1.default)(metaHeroSection_validation_1.MetaHeroSectionValidation.updateStatisticsZodSchema), metaHeroSection_controller_1.MetaHeroSectionController.updateStatistics);
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
router.delete('/', metaHeroSection_controller_1.MetaHeroSectionController.deleteMetaHeroSection);
exports.MetaHeroSectionRoute = router;
