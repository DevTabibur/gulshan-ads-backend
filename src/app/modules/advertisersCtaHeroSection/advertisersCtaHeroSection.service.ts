import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAdvertisersCtaHeroSection } from './advertisersCtaHeroSection.interface';
import AdvertisersCtaHeroSectionModel from './advertisersCtaHeroSection.model';

// Create advertisers CTA hero section (only one instance allowed)
const createAdvertisersCtaHeroSection = async (advertisersCtaHeroSectionData: IAdvertisersCtaHeroSection): Promise<IAdvertisersCtaHeroSection> => {
  // Check if advertisers CTA hero section already exists
  const existingAdvertisersCtaHeroSection = await AdvertisersCtaHeroSectionModel.findOne();
  if (existingAdvertisersCtaHeroSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Advertisers CTA hero section already exists. You can only update it.');
  }

  const result = await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);
  return result;
};

// Get advertisers CTA hero section (only one instance)
const getAdvertisersCtaHeroSection = async (): Promise<IAdvertisersCtaHeroSection | null> => {
  const result = await AdvertisersCtaHeroSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers CTA hero section not found');
  }
  return result;
};

// Update advertisers CTA hero section
const updateAdvertisersCtaHeroSection = async (updateData: Partial<IAdvertisersCtaHeroSection>): Promise<IAdvertisersCtaHeroSection | null> => {
  const result = await AdvertisersCtaHeroSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers CTA hero section not found');
  }
  return result;
};

// Update specific components
const updateCTAButtons = async (ctaButtons: IAdvertisersCtaHeroSection['ctaButtons']): Promise<IAdvertisersCtaHeroSection | null> => {
  const result = await AdvertisersCtaHeroSectionModel.findOneAndUpdate(
    {},
    { ctaButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers CTA hero section not found');
  }
  return result;
};

const updateBenefits = async (benefits: IAdvertisersCtaHeroSection['benefits']): Promise<IAdvertisersCtaHeroSection | null> => {
  const result = await AdvertisersCtaHeroSectionModel.findOneAndUpdate(
    {},
    { benefits },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers CTA hero section not found');
  }
  return result;
};

// Delete advertisers CTA hero section
const deleteAdvertisersCtaHeroSection = async (): Promise<IAdvertisersCtaHeroSection | null> => {
  const result = await AdvertisersCtaHeroSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Advertisers CTA hero section not found');
  }
  return result;
};

export const AdvertisersCtaHeroSectionService = {
  createAdvertisersCtaHeroSection,
  getAdvertisersCtaHeroSection,
  updateAdvertisersCtaHeroSection,
  updateCTAButtons,
  updateBenefits,
  deleteAdvertisersCtaHeroSection,
};
