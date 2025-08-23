"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSectionRoute = void 0;
const express_1 = require("express");
const heroSection_controller_1 = require("./heroSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const heroSection_validation_1 = require("./heroSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /hero-section Create Hero Section
 * @apiName CreateHeroSection
 * @apiGroup HeroSection
 *
 * @apiParam {String} title Hero section title
 * @apiParam {String} subtitle Hero section subtitle
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created hero section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(heroSection_validation_1.HeroSectionValidation.createHeroSectionZodSchema), heroSection_controller_1.HeroSectionController.createHeroSection);
/**
 * @api {get} /hero-section Get Hero Section
 * @apiName GetHeroSection
 * @apiGroup HeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', heroSection_controller_1.HeroSectionController.getHeroSection);
/**
 * @api {patch} /hero-section Update Hero Section
 * @apiName UpdateHeroSection
 * @apiGroup HeroSection
 *
 * @apiParam {String} [title] Hero section title
 * @apiParam {String} [subtitle] Hero section subtitle
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(heroSection_validation_1.HeroSectionValidation.updateHeroSectionZodSchema), heroSection_controller_1.HeroSectionController.updateHeroSection);
/**
 * @api {delete} /hero-section Delete Hero Section
 * @apiName DeleteHeroSection
 * @apiGroup HeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', heroSection_controller_1.HeroSectionController.deleteHeroSection);
exports.HeroSectionRoute = router;
