import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITrustSection } from './trustSection.interface';
import TrustSectionModel from './trustSection.model';

// Create trust section (only one instance allowed)
const createTrustSection = async (trustSectionData: ITrustSection): Promise<ITrustSection> => {
  // Check if trust section already exists
  const existingTrustSection = await TrustSectionModel.findOne();
  if (existingTrustSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Trust section already exists. You can only update it.');
  }

  const result = await TrustSectionModel.create(trustSectionData);
  return result;
};

// Get trust section (only one instance)
const getTrustSection = async (): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

// Update trust section
const updateTrustSection = async (updateData: Partial<ITrustSection>): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

// Update specific components
const updateTrustedCompanies = async (trustedCompanies: ITrustSection['trustedCompanies']): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOneAndUpdate(
    {},
    { trustedCompanies },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

const updateStatistics = async (statistics: ITrustSection['statistics']): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOneAndUpdate(
    {},
    { statistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

const updateFeaturedTestimonial = async (featuredTestimonial: ITrustSection['featuredTestimonial']): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOneAndUpdate(
    {},
    { featuredTestimonial },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

// Delete trust section
const deleteTrustSection = async (): Promise<ITrustSection | null> => {
  const result = await TrustSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Trust section not found');
  }
  return result;
};

export const TrustSectionService = {
  createTrustSection,
  getTrustSection,
  updateTrustSection,
  updateTrustedCompanies,
  updateStatistics,
  updateFeaturedTestimonial,
  deleteTrustSection,
};
