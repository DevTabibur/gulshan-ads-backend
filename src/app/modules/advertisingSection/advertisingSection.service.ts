import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdvertisingSection } from './advertisingSection.interface';
import AdvertisingSectionModel from './advertisingSection.model';

// Create advertising section (only one instance allowed)
const createAdvertisingSection = async (advertisingSectionData: IAdvertisingSection): Promise<IAdvertisingSection> => {
  // Check if advertising section already exists
  const existingAdvertisingSection = await AdvertisingSectionModel.findOne();
  if (existingAdvertisingSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Advertising section already exists. You can only update it.');
  }

  const result = await AdvertisingSectionModel.create(advertisingSectionData);
  return result;
};

// Get advertising section (only one instance)
const getAdvertisingSection = async (): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

// Update advertising section
const updateAdvertisingSection = async (updateData: Partial<IAdvertisingSection>): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

// Update specific components
const updateKeyFeatures = async (keyFeatures: IAdvertisingSection['keyFeatures']): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndUpdate(
    {},
    { keyFeatures },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

const updateServiceCards = async (serviceCards: IAdvertisingSection['serviceCards']): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndUpdate(
    {},
    { serviceCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

const updateStatistics = async (statistics: IAdvertisingSection['statistics']): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndUpdate(
    {},
    { statistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

const updateCTAButtons = async (ctaButtons: IAdvertisingSection['ctaButtons']): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndUpdate(
    {},
    { ctaButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

// Delete advertising section
const deleteAdvertisingSection = async (): Promise<IAdvertisingSection | null> => {
  const result = await AdvertisingSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertising section not found');
  }
  return result;
};

export const AdvertisingSectionService = {
  createAdvertisingSection,
  getAdvertisingSection,
  updateAdvertisingSection,
  updateKeyFeatures,
  updateServiceCards,
  updateStatistics,
  updateCTAButtons,
  deleteAdvertisingSection,
};
