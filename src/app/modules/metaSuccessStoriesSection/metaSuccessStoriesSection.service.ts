import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IMetaSuccessStoriesSection } from './metaSuccessStoriesSection.interface';
import MetaSuccessStoriesSectionModel from './metaSuccessStoriesSection.model';

// Create meta success stories section (only one instance allowed)
const createMetaSuccessStoriesSection = async (metaSuccessStoriesSectionData: IMetaSuccessStoriesSection): Promise<IMetaSuccessStoriesSection> => {
  // Check if meta success stories section already exists
  const existingMetaSuccessStoriesSection = await MetaSuccessStoriesSectionModel.findOne();
  if (existingMetaSuccessStoriesSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Meta success stories section already exists. You can only update it.');
  }

  const result = await MetaSuccessStoriesSectionModel.create(metaSuccessStoriesSectionData);
  return result;
};

// Get meta success stories section (only one instance)
const getMetaSuccessStoriesSection = async (): Promise<IMetaSuccessStoriesSection | null> => {
  const result = await MetaSuccessStoriesSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta success stories section not found');
  }
  return result;
};

// Update meta success stories section
const updateMetaSuccessStoriesSection = async (updateData: Partial<IMetaSuccessStoriesSection>): Promise<IMetaSuccessStoriesSection | null> => {
  const result = await MetaSuccessStoriesSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta success stories section not found');
  }
  return result;
};

// Update specific components
const updateTestimonials = async (testimonials: IMetaSuccessStoriesSection['testimonials']): Promise<IMetaSuccessStoriesSection | null> => {
  const result = await MetaSuccessStoriesSectionModel.findOneAndUpdate(
    {},
    { testimonials },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta success stories section not found');
  }
  return result;
};

// Delete meta success stories section
const deleteMetaSuccessStoriesSection = async (): Promise<IMetaSuccessStoriesSection | null> => {
  const result = await MetaSuccessStoriesSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta success stories section not found');
  }
  return result;
};

export const MetaSuccessStoriesSectionService = {
  createMetaSuccessStoriesSection,
  getMetaSuccessStoriesSection,
  updateMetaSuccessStoriesSection,
  updateTestimonials,
  deleteMetaSuccessStoriesSection,
};
