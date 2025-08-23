"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaPartnershipSectionRoute = void 0;
const express_1 = require("express");
const metaPartnershipSection_controller_1 = require("./metaPartnershipSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const metaPartnershipSection_validation_1 = require("./metaPartnershipSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /meta-partnership-section Create Meta Partnership Section
 * @apiName CreateMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Object} leftLogo Left logo object
 * @apiParam {Object} rightLogo Right logo object
 * @apiParam {String} title Main title
 * @apiParam {Array} featureCards Array of feature cards
 * @apiParam {Object} ctaButton CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(metaPartnershipSection_validation_1.MetaPartnershipSectionValidation.createMetaPartnershipSectionZodSchema), metaPartnershipSection_controller_1.MetaPartnershipSectionController.createMetaPartnershipSection);
/**
 * @api {get} /meta-partnership-section Get Meta Partnership Section
 * @apiName GetMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', metaPartnershipSection_controller_1.MetaPartnershipSectionController.getMetaPartnershipSection);
/**
 * @api {patch} /meta-partnership-section Update Meta Partnership Section
 * @apiName UpdateMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Object} [leftLogo] Left logo object
 * @apiParam {Object} [rightLogo] Right logo object
 * @apiParam {String} [title] Main title
 * @apiParam {Array} [featureCards] Array of feature cards
 * @apiParam {Object} [ctaButton] CTA button object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(metaPartnershipSection_validation_1.MetaPartnershipSectionValidation.updateMetaPartnershipSectionZodSchema), metaPartnershipSection_controller_1.MetaPartnershipSectionController.updateMetaPartnershipSection);
/**
 * @api {patch} /meta-partnership-section/feature-cards Update Feature Cards
 * @apiName UpdateFeatureCards
 * @apiGroup MetaPartnershipSection
 *
 * @apiParam {Array} featureCards Array of feature cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/feature-cards', (0, zodValidateRequest_1.default)(metaPartnershipSection_validation_1.MetaPartnershipSectionValidation.updateFeatureCardsZodSchema), metaPartnershipSection_controller_1.MetaPartnershipSectionController.updateFeatureCards);
/**
 * @api {delete} /meta-partnership-section Delete Meta Partnership Section
 * @apiName DeleteMetaPartnershipSection
 * @apiGroup MetaPartnershipSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted meta partnership section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', metaPartnershipSection_controller_1.MetaPartnershipSectionController.deleteMetaPartnershipSection);
exports.MetaPartnershipSectionRoute = router;
