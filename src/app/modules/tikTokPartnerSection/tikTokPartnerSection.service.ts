import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITikTokPartnerSection } from './tikTokPartnerSection.interface';
import TikTokPartnerSectionModel from './tikTokPartnerSection.model';

// Create TikTok Partner section (only one instance allowed)
const createTikTokPartnerSection = async (tikTokPartnerSectionData: ITikTokPartnerSection): Promise<ITikTokPartnerSection> => {
  // Check if TikTok Partner section already exists
  const existingTikTokPartnerSection = await TikTokPartnerSectionModel.findOne();
  if (existingTikTokPartnerSection) {
    throw new ApiError(httpStatus.CONFLICT, 'TikTok Partner section already exists. You can only update it.');
  }

  const result = await TikTokPartnerSectionModel.create(tikTokPartnerSectionData);
  return result;
};

// Get TikTok Partner section (only one instance)
const getTikTokPartnerSection = async (): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

// Update TikTok Partner section
const updateTikTokPartnerSection = async (updateData: Partial<ITikTokPartnerSection>): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

// Update specific components
const updatePartnershipLogos = async (partnershipLogos: ITikTokPartnerSection['partnershipLogos']): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOneAndUpdate(
    {},
    { partnershipLogos },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

const updateFeatureCards = async (featureCards: ITikTokPartnerSection['featureCards']): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOneAndUpdate(
    {},
    { featureCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

const updateCTAButton = async (ctaButton: ITikTokPartnerSection['ctaButton']): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOneAndUpdate(
    {},
    { ctaButton },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

// Delete TikTok Partner section
const deleteTikTokPartnerSection = async (): Promise<ITikTokPartnerSection | null> => {
  const result = await TikTokPartnerSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Partner section not found');
  }
  return result;
};

export const TikTokPartnerSectionService = {
  createTikTokPartnerSection,
  getTikTokPartnerSection,
  updateTikTokPartnerSection,
  updatePartnershipLogos,
  updateFeatureCards,
  updateCTAButton,
  deleteTikTokPartnerSection,
};
