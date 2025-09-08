"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GulshanAdsMetaManagementSectionRoute = void 0;
const express_1 = require("express");
const gulshanAdsMetaManagementSection_controller_1 = require("./gulshanAdsMetaManagementSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const gulshanAdsMetaManagementSection_validation_1 = require("./gulshanAdsMetaManagementSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /gulshan-ads-meta-management-section Create Gulshan Ads Meta Management Section
 * @apiName CreateGulshanAdsMetaManagementSection
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiParam {String} title Main title
 * @apiParam {Object} commissionTag Commission tag object
 * @apiParam {Object} paymentFeature Payment feature object
 * @apiParam {Object} paperworkFeature Paperwork feature object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(gulshanAdsMetaManagementSection_validation_1.GulshanAdsMetaManagementSectionValidation.createGulshanAdsMetaManagementSectionZodSchema), gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.createGulshanAdsMetaManagementSection);
/**
 * @api {get} /gulshan-ads-meta-management-section Get Gulshan Ads Meta Management Section
 * @apiName GetGulshanAdsMetaManagementSection
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.getGulshanAdsMetaManagementSection);
/**
 * @api {patch} /gulshan-ads-meta-management-section Update Gulshan Ads Meta Management Section
 * @apiName UpdateGulshanAdsMetaManagementSection
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {Object} [commissionTag] Commission tag object
 * @apiParam {Object} [paymentFeature] Payment feature object
 * @apiParam {Object} [paperworkFeature] Paperwork feature object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(gulshanAdsMetaManagementSection_validation_1.GulshanAdsMetaManagementSectionValidation.updateGulshanAdsMetaManagementSectionZodSchema), gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.updateGulshanAdsMetaManagementSection);
/**
 * @api {patch} /gulshan-ads-meta-management-section/commission-tag Update Commission Tag
 * @apiName UpdateCommissionTag
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiParam {Object} commissionTag Commission tag object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/commission-tag', (0, zodValidateRequest_1.default)(gulshanAdsMetaManagementSection_validation_1.GulshanAdsMetaManagementSectionValidation.updateCommissionTagZodSchema), gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.updateCommissionTag);
/**
 * @api {patch} /gulshan-ads-meta-management-section/payment-feature Update Payment Feature
 * @apiName UpdatePaymentFeature
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiParam {Object} paymentFeature Payment feature object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/payment-feature', (0, zodValidateRequest_1.default)(gulshanAdsMetaManagementSection_validation_1.GulshanAdsMetaManagementSectionValidation.updatePaymentFeatureZodSchema), gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.updatePaymentFeature);
/**
 * @api {patch} /gulshan-ads-meta-management-section/paperwork-feature Update Paperwork Feature
 * @apiName UpdatePaperworkFeature
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiParam {Object} paperworkFeature Paperwork feature object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/paperwork-feature', (0, zodValidateRequest_1.default)(gulshanAdsMetaManagementSection_validation_1.GulshanAdsMetaManagementSectionValidation.updatePaperworkFeatureZodSchema), gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.updatePaperworkFeature);
/**
 * @api {delete} /gulshan-ads-meta-management-section Delete Gulshan Ads Meta Management Section
 * @apiName DeleteGulshanAdsMetaManagementSection
 * @apiGroup GulshanAdsMetaManagementSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted gulshan ads meta management section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', gulshanAdsMetaManagementSection_controller_1.GulshanAdsMetaManagementSectionController.deleteGulshanAdsMetaManagementSection);
exports.GulshanAdsMetaManagementSectionRoute = router;
