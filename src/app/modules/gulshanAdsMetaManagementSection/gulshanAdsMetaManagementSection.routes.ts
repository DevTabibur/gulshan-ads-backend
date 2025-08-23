import { Router } from 'express';
import { GulshanAdsMetaManagementSectionController } from './gulshanAdsMetaManagementSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { GulshanAdsMetaManagementSectionValidation } from './gulshanAdsMetaManagementSection.validation';

const router = Router();

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
router.post(
  '/',
  zodValidateRequest(GulshanAdsMetaManagementSectionValidation.createGulshanAdsMetaManagementSectionZodSchema),
  GulshanAdsMetaManagementSectionController.createGulshanAdsMetaManagementSection,
);

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
router.get('/', GulshanAdsMetaManagementSectionController.getGulshanAdsMetaManagementSection);

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
router.patch(
  '/',
  zodValidateRequest(GulshanAdsMetaManagementSectionValidation.updateGulshanAdsMetaManagementSectionZodSchema),
  GulshanAdsMetaManagementSectionController.updateGulshanAdsMetaManagementSection,
);

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
router.patch(
  '/commission-tag',
  zodValidateRequest(GulshanAdsMetaManagementSectionValidation.updateCommissionTagZodSchema),
  GulshanAdsMetaManagementSectionController.updateCommissionTag,
);

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
router.patch(
  '/payment-feature',
  zodValidateRequest(GulshanAdsMetaManagementSectionValidation.updatePaymentFeatureZodSchema),
  GulshanAdsMetaManagementSectionController.updatePaymentFeature,
);

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
router.patch(
  '/paperwork-feature',
  zodValidateRequest(GulshanAdsMetaManagementSectionValidation.updatePaperworkFeatureZodSchema),
  GulshanAdsMetaManagementSectionController.updatePaperworkFeature,
);

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
router.delete('/', GulshanAdsMetaManagementSectionController.deleteGulshanAdsMetaManagementSection);

export const GulshanAdsMetaManagementSectionRoute = router;
