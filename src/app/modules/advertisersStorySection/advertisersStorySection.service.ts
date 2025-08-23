import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdvertisersStorySection } from './advertisersStorySection.interface';
import AdvertisersStorySectionModel from './advertisersStorySection.model';

// Create advertisers story section (only one instance allowed)
const createAdvertisersStorySection = async (advertisersStorySectionData: IAdvertisersStorySection): Promise<IAdvertisersStorySection> => {
  // Check if advertisers story section already exists
  const existingAdvertisersStorySection = await AdvertisersStorySectionModel.findOne();
  if (existingAdvertisersStorySection) {
    throw new ApiError(httpStatus.CONFLICT, 'Advertisers story section already exists. You can only update it.');
  }

  const result = await AdvertisersStorySectionModel.create(advertisersStorySectionData);
  return result;
};

// Get advertisers story section (only one instance)
const getAdvertisersStorySection = async (): Promise<IAdvertisersStorySection | null> => {
  const result = await AdvertisersStorySectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers story section not found');
  }
  return result;
};

// Update advertisers story section
const updateAdvertisersStorySection = async (updateData: Partial<IAdvertisersStorySection>): Promise<IAdvertisersStorySection | null> => {
  const result = await AdvertisersStorySectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers story section not found');
  }
  return result;
};

// Update specific components
const updateTestimonials = async (testimonials: IAdvertisersStorySection['testimonials']): Promise<IAdvertisersStorySection | null> => {
  const result = await AdvertisersStorySectionModel.findOneAndUpdate(
    {},
    { testimonials },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers story section not found');
  }
  return result;
};

// Delete advertisers story section
const deleteAdvertisersStorySection = async (): Promise<IAdvertisersStorySection | null> => {
  const result = await AdvertisersStorySectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers story section not found');
  }
  return result;
};

export const AdvertisersStorySectionService = {
  createAdvertisersStorySection,
  getAdvertisersStorySection,
  updateAdvertisersStorySection,
  updateTestimonials,
  deleteAdvertisersStorySection,
};
