import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITikTokHeroSection } from './tikTokHeroSection.interface';
import TikTokHeroSectionModel from './tikTokHeroSection.model';

// Create TikTok hero section (only one instance allowed)
const createTikTokHeroSection = async (tikTokHeroSectionData: ITikTokHeroSection): Promise<ITikTokHeroSection> => {
  // Check if TikTok hero section already exists
  const existingTikTokHeroSection = await TikTokHeroSectionModel.findOne();
  if (existingTikTokHeroSection) {
    throw new ApiError(httpStatus.CONFLICT, 'TikTok hero section already exists. You can only update it.');
  }

  const result = await TikTokHeroSectionModel.create(tikTokHeroSectionData);
  return result;
};

// Get TikTok hero section (only one instance)
const getTikTokHeroSection = async (): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

// Update TikTok hero section
const updateTikTokHeroSection = async (updateData: Partial<ITikTokHeroSection>): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

// Update specific components
const updateCTAButtons = async (ctaButtons: ITikTokHeroSection['ctaButtons']): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOneAndUpdate(
    {},
    { ctaButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

const updateStatistics = async (statistics: ITikTokHeroSection['statistics']): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOneAndUpdate(
    {},
    { statistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

const updatePhoneMockup = async (phoneMockup: ITikTokHeroSection['phoneMockup']): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOneAndUpdate(
    {},
    { phoneMockup },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

// Delete TikTok hero section
const deleteTikTokHeroSection = async (): Promise<ITikTokHeroSection | null> => {
  const result = await TikTokHeroSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok hero section not found');
  }
  return result;
};

export const TikTokHeroSectionService = {
  createTikTokHeroSection,
  getTikTokHeroSection,
  updateTikTokHeroSection,
  updateCTAButtons,
  updateStatistics,
  updatePhoneMockup,
  deleteTikTokHeroSection,
};
