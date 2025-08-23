import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IGulshanAdsMetaManagementSection } from './gulshanAdsMetaManagementSection.interface';
import GulshanAdsMetaManagementSectionModel from './gulshanAdsMetaManagementSection.model';

// Create gulshan ads meta management section (only one instance allowed)
const createGulshanAdsMetaManagementSection = async (gulshanAdsMetaManagementSectionData: IGulshanAdsMetaManagementSection): Promise<IGulshanAdsMetaManagementSection> => {
  // Check if gulshan ads meta management section already exists
  const existingGulshanAdsMetaManagementSection = await GulshanAdsMetaManagementSectionModel.findOne();
  if (existingGulshanAdsMetaManagementSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Gulshan Ads meta management section already exists. You can only update it.');
  }

  const result = await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);
  return result;
};

// Get gulshan ads meta management section (only one instance)
const getGulshanAdsMetaManagementSection = async (): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

// Update gulshan ads meta management section
const updateGulshanAdsMetaManagementSection = async (updateData: Partial<IGulshanAdsMetaManagementSection>): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

// Update specific components
const updateCommissionTag = async (commissionTag: IGulshanAdsMetaManagementSection['commissionTag']): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOneAndUpdate(
    {},
    { commissionTag },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

const updatePaymentFeature = async (paymentFeature: IGulshanAdsMetaManagementSection['paymentFeature']): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOneAndUpdate(
    {},
    { paymentFeature },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

const updatePaperworkFeature = async (paperworkFeature: IGulshanAdsMetaManagementSection['paperworkFeature']): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOneAndUpdate(
    {},
    { paperworkFeature },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

// Delete gulshan ads meta management section
const deleteGulshanAdsMetaManagementSection = async (): Promise<IGulshanAdsMetaManagementSection | null> => {
  const result = await GulshanAdsMetaManagementSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Gulshan Ads meta management section not found');
  }
  return result;
};

export const GulshanAdsMetaManagementSectionService = {
  createGulshanAdsMetaManagementSection,
  getGulshanAdsMetaManagementSection,
  updateGulshanAdsMetaManagementSection,
  updateCommissionTag,
  updatePaymentFeature,
  updatePaperworkFeature,
  deleteGulshanAdsMetaManagementSection,
};
