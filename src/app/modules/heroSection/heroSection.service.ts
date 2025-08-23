import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IHeroSection } from './heroSection.interface';
import HeroSectionModel from './heroSection.model';

// Create hero section (only one instance allowed)
const createHeroSection = async (heroSectionData: IHeroSection): Promise<IHeroSection> => {
  // Check if hero section already exists
  const existingHeroSection = await HeroSectionModel.findOne();
  if (existingHeroSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Hero section already exists. You can only update it.');
  }

  const result = await HeroSectionModel.create(heroSectionData);
  return result;
};

// Get hero section (only one instance)
const getHeroSection = async (): Promise<IHeroSection | null> => {
  const result = await HeroSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hero section not found');
  }
  return result;
};

// Update hero section
const updateHeroSection = async (updateData: Partial<IHeroSection>): Promise<IHeroSection | null> => {
  const result = await HeroSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hero section not found');
  }
  return result;
};

// Delete hero section
const deleteHeroSection = async (): Promise<IHeroSection | null> => {
  const result = await HeroSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Hero section not found');
  }
  return result;
};

export const HeroSectionService = {
  createHeroSection,
  getHeroSection,
  updateHeroSection,
  deleteHeroSection,
};
