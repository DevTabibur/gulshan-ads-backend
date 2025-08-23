import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITikTokVideoAdvertisingSection } from './tikTokVideoAdvertisingSection.interface';
import TikTokVideoAdvertisingSectionModel from './tikTokVideoAdvertisingSection.model';

// Create TikTok video advertising section (only one instance allowed)
const createTikTokVideoAdvertisingSection = async (tikTokVideoAdvertisingSectionData: ITikTokVideoAdvertisingSection): Promise<ITikTokVideoAdvertisingSection> => {
  // Check if TikTok video advertising section already exists
  const existingTikTokVideoAdvertisingSection = await TikTokVideoAdvertisingSectionModel.findOne();
  if (existingTikTokVideoAdvertisingSection) {
    throw new ApiError(httpStatus.CONFLICT, 'TikTok video advertising section already exists. You can only update it.');
  }

  const result = await TikTokVideoAdvertisingSectionModel.create(tikTokVideoAdvertisingSectionData);
  return result;
};

// Get TikTok video advertising section (only one instance)
const getTikTokVideoAdvertisingSection = async (): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

// Update TikTok video advertising section
const updateTikTokVideoAdvertisingSection = async (updateData: Partial<ITikTokVideoAdvertisingSection>): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

// Update specific components
const updateAdvertisingOptions = async (advertisingOptions: ITikTokVideoAdvertisingSection['advertisingOptions']): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndUpdate(
    {},
    { advertisingOptions },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

const updateBudgetInfo = async (budgetInfo: ITikTokVideoAdvertisingSection['budgetInfo']): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndUpdate(
    {},
    { budgetInfo },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

const updatePhoneMockup = async (phoneMockup: ITikTokVideoAdvertisingSection['phoneMockup']): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndUpdate(
    {},
    { phoneMockup },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

const updateEngagementStatistic = async (engagementStatistic: ITikTokVideoAdvertisingSection['engagementStatistic']): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndUpdate(
    {},
    { engagementStatistic },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

// Delete TikTok video advertising section
const deleteTikTokVideoAdvertisingSection = async (): Promise<ITikTokVideoAdvertisingSection | null> => {
  const result = await TikTokVideoAdvertisingSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok video advertising section not found');
  }
  return result;
};

export const TikTokVideoAdvertisingSectionService = {
  createTikTokVideoAdvertisingSection,
  getTikTokVideoAdvertisingSection,
  updateTikTokVideoAdvertisingSection,
  updateAdvertisingOptions,
  updateBudgetInfo,
  updatePhoneMockup,
  updateEngagementStatistic,
  deleteTikTokVideoAdvertisingSection,
};
