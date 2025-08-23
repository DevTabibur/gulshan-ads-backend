import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITikTokAudienceSection } from './tikTokAudienceSection.interface';
import TikTokAudienceSectionModel from './tikTokAudienceSection.model';

// Create TikTok audience section (only one instance allowed)
const createTikTokAudienceSection = async (tikTokAudienceSectionData: ITikTokAudienceSection): Promise<ITikTokAudienceSection> => {
  // Check if TikTok audience section already exists
  const existingTikTokAudienceSection = await TikTokAudienceSectionModel.findOne();
  if (existingTikTokAudienceSection) {
    throw new ApiError(httpStatus.CONFLICT, 'TikTok audience section already exists. You can only update it.');
  }

  const result = await TikTokAudienceSectionModel.create(tikTokAudienceSectionData);
  return result;
};

// Get TikTok audience section (only one instance)
const getTikTokAudienceSection = async (): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

// Update TikTok audience section
const updateTikTokAudienceSection = async (updateData: Partial<ITikTokAudienceSection>): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

// Update specific components
const updateStatistics = async (statistics: ITikTokAudienceSection['statistics']): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOneAndUpdate(
    {},
    { statistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

const updateAdvertisingBenefit = async (advertisingBenefit: ITikTokAudienceSection['advertisingBenefit']): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOneAndUpdate(
    {},
    { advertisingBenefit },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

const updateTestimonialCard = async (testimonialCard: ITikTokAudienceSection['testimonialCard']): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOneAndUpdate(
    {},
    { testimonialCard },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

// Delete TikTok audience section
const deleteTikTokAudienceSection = async (): Promise<ITikTokAudienceSection | null> => {
  const result = await TikTokAudienceSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok audience section not found');
  }
  return result;
};

export const TikTokAudienceSectionService = {
  createTikTokAudienceSection,
  getTikTokAudienceSection,
  updateTikTokAudienceSection,
  updateStatistics,
  updateAdvertisingBenefit,
  updateTestimonialCard,
  deleteTikTokAudienceSection,
};
