import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IWhyChooseUsSection } from './whyChooseUsSection.interface';
import WhyChooseUsSectionModel from './whyChooseUsSection.model';

// Create why choose us section (only one instance allowed)
const createWhyChooseUsSection = async (whyChooseUsSectionData: IWhyChooseUsSection): Promise<IWhyChooseUsSection> => {
  // Check if why choose us section already exists
  const existingWhyChooseUsSection = await WhyChooseUsSectionModel.findOne();
  if (existingWhyChooseUsSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Why choose us section already exists. You can only update it.');
  }

  const result = await WhyChooseUsSectionModel.create(whyChooseUsSectionData);
  return result;
};

// Get why choose us section (only one instance)
const getWhyChooseUsSection = async (): Promise<IWhyChooseUsSection | null> => {
  const result = await WhyChooseUsSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Why choose us section not found');
  }
  return result;
};

// Update why choose us section
const updateWhyChooseUsSection = async (updateData: Partial<IWhyChooseUsSection>): Promise<IWhyChooseUsSection | null> => {
  const result = await WhyChooseUsSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Why choose us section not found');
  }
  return result;
};

// Update specific components
const updateBenefits = async (benefits: IWhyChooseUsSection['benefits']): Promise<IWhyChooseUsSection | null> => {
  const result = await WhyChooseUsSectionModel.findOneAndUpdate(
    {},
    { benefits },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Why choose us section not found');
  }
  return result;
};

// Delete why choose us section
const deleteWhyChooseUsSection = async (): Promise<IWhyChooseUsSection | null> => {
  const result = await WhyChooseUsSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Why choose us section not found');
  }
  return result;
};

export const WhyChooseUsSectionService = {
  createWhyChooseUsSection,
  getWhyChooseUsSection,
  updateWhyChooseUsSection,
  updateBenefits,
  deleteWhyChooseUsSection,
};
