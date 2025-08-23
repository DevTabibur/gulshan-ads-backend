import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdvertisersHeroSection } from './advertisersHeroSection.interface';
import AdvertisersHeroSectionModel from './advertisersHeroSection.model';

// Create advertisers hero section (only one instance allowed)
const createAdvertisersHeroSection = async (advertisersHeroSectionData: IAdvertisersHeroSection): Promise<IAdvertisersHeroSection> => {
  // Check if advertisers hero section already exists
  const existingAdvertisersHeroSection = await AdvertisersHeroSectionModel.findOne();
  if (existingAdvertisersHeroSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Advertisers hero section already exists. You can only update it.');
  }

  const result = await AdvertisersHeroSectionModel.create(advertisersHeroSectionData);
  return result;
};

// Get advertisers hero section (only one instance)
const getAdvertisersHeroSection = async (): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

// Update advertisers hero section
const updateAdvertisersHeroSection = async (updateData: Partial<IAdvertisersHeroSection>): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

// Update specific components
const updateCTAButtons = async (ctaButtons: IAdvertisersHeroSection['ctaButtons']): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOneAndUpdate(
    {},
    { ctaButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

const updateCampaignPerformance = async (campaignPerformance: IAdvertisersHeroSection['campaignPerformance']): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOneAndUpdate(
    {},
    { campaignPerformance },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

const updateBottomStatistics = async (bottomStatistics: IAdvertisersHeroSection['bottomStatistics']): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOneAndUpdate(
    {},
    { bottomStatistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

// Delete advertisers hero section
const deleteAdvertisersHeroSection = async (): Promise<IAdvertisersHeroSection | null> => {
  const result = await AdvertisersHeroSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers hero section not found');
  }
  return result;
};

export const AdvertisersHeroSectionService = {
  createAdvertisersHeroSection,
  getAdvertisersHeroSection,
  updateAdvertisersHeroSection,
  updateCTAButtons,
  updateCampaignPerformance,
  updateBottomStatistics,
  deleteAdvertisersHeroSection,
};
