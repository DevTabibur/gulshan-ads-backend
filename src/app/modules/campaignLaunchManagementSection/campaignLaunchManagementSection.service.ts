import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICampaignLaunchManagementSection } from './campaignLaunchManagementSection.interface';
import CampaignLaunchManagementSectionModel from './campaignLaunchManagementSection.model';

// Create campaign launch management section (only one instance allowed)
const createCampaignLaunchManagementSection = async (campaignLaunchManagementSectionData: ICampaignLaunchManagementSection): Promise<ICampaignLaunchManagementSection> => {
  // Check if campaign launch management section already exists
  const existingCampaignLaunchManagementSection = await CampaignLaunchManagementSectionModel.findOne();
  if (existingCampaignLaunchManagementSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Campaign launch management section already exists. You can only update it.');
  }

  const result = await CampaignLaunchManagementSectionModel.create(campaignLaunchManagementSectionData);
  return result;
};

// Get campaign launch management section (only one instance)
const getCampaignLaunchManagementSection = async (): Promise<ICampaignLaunchManagementSection | null> => {
  const result = await CampaignLaunchManagementSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign launch management section not found');
  }
  return result;
};

// Update campaign launch management section
const updateCampaignLaunchManagementSection = async (updateData: Partial<ICampaignLaunchManagementSection>): Promise<ICampaignLaunchManagementSection | null> => {
  const result = await CampaignLaunchManagementSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign launch management section not found');
  }
  return result;
};

// Update specific components
const updateCards = async (cards: ICampaignLaunchManagementSection['cards']): Promise<ICampaignLaunchManagementSection | null> => {
  const result = await CampaignLaunchManagementSectionModel.findOneAndUpdate(
    {},
    { cards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign launch management section not found');
  }
  return result;
};

// Delete campaign launch management section
const deleteCampaignLaunchManagementSection = async (): Promise<ICampaignLaunchManagementSection | null> => {
  const result = await CampaignLaunchManagementSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Campaign launch management section not found');
  }
  return result;
};

export const CampaignLaunchManagementSectionService = {
  createCampaignLaunchManagementSection,
  getCampaignLaunchManagementSection,
  updateCampaignLaunchManagementSection,
  updateCards,
  deleteCampaignLaunchManagementSection,
};
