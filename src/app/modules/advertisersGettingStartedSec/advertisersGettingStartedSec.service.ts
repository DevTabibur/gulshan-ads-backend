import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdvertisersGettingStartedSec } from './advertisersGettingStartedSec.interface';
import AdvertisersGettingStartedSecModel from './advertisersGettingStartedSec.model';

// Create advertisers getting started section (only one instance allowed)
const createAdvertisersGettingStartedSec = async (advertisersGettingStartedSecData: IAdvertisersGettingStartedSec): Promise<IAdvertisersGettingStartedSec> => {
  // Check if advertisers getting started section already exists
  const existingAdvertisersGettingStartedSec = await AdvertisersGettingStartedSecModel.findOne();
  if (existingAdvertisersGettingStartedSec) {
    throw new ApiError(httpStatus.CONFLICT, 'Advertisers getting started section already exists. You can only update it.');
  }

  const result = await AdvertisersGettingStartedSecModel.create(advertisersGettingStartedSecData);
  return result;
};

// Get advertisers getting started section (only one instance)
const getAdvertisersGettingStartedSec = async (): Promise<IAdvertisersGettingStartedSec | null> => {
  const result = await AdvertisersGettingStartedSecModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers getting started section not found');
  }
  return result;
};

// Update advertisers getting started section
const updateAdvertisersGettingStartedSec = async (updateData: Partial<IAdvertisersGettingStartedSec>): Promise<IAdvertisersGettingStartedSec | null> => {
  const result = await AdvertisersGettingStartedSecModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers getting started section not found');
  }
  return result;
};

// Update specific components
const updateSteps = async (steps: IAdvertisersGettingStartedSec['steps']): Promise<IAdvertisersGettingStartedSec | null> => {
  const result = await AdvertisersGettingStartedSecModel.findOneAndUpdate(
    {},
    { steps },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers getting started section not found');
  }
  return result;
};

// Delete advertisers getting started section
const deleteAdvertisersGettingStartedSec = async (): Promise<IAdvertisersGettingStartedSec | null> => {
  const result = await AdvertisersGettingStartedSecModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers getting started section not found');
  }
  return result;
};

export const AdvertisersGettingStartedSecService = {
  createAdvertisersGettingStartedSec,
  getAdvertisersGettingStartedSec,
  updateAdvertisersGettingStartedSec,
  updateSteps,
  deleteAdvertisersGettingStartedSec,
};
