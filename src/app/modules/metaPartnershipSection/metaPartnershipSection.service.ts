import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IMetaPartnershipSection } from './metaPartnershipSection.interface';
import MetaPartnershipSectionModel from './metaPartnershipSection.model';

// Create meta partnership section (only one instance allowed)
const createMetaPartnershipSection = async (metaPartnershipSectionData: IMetaPartnershipSection): Promise<IMetaPartnershipSection> => {
  // Check if meta partnership section already exists
  const existingMetaPartnershipSection = await MetaPartnershipSectionModel.findOne();
  if (existingMetaPartnershipSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Meta partnership section already exists. You can only update it.');
  }

  const result = await MetaPartnershipSectionModel.create(metaPartnershipSectionData);
  return result;
};

// Get meta partnership section (only one instance)
const getMetaPartnershipSection = async (): Promise<IMetaPartnershipSection | null> => {
  const result = await MetaPartnershipSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta partnership section not found');
  }
  return result;
};

// Update meta partnership section
const updateMetaPartnershipSection = async (updateData: Partial<IMetaPartnershipSection>): Promise<IMetaPartnershipSection | null> => {
  const result = await MetaPartnershipSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta partnership section not found');
  }
  return result;
};

// Update specific components
const updateFeatureCards = async (featureCards: IMetaPartnershipSection['featureCards']): Promise<IMetaPartnershipSection | null> => {
  const result = await MetaPartnershipSectionModel.findOneAndUpdate(
    {},
    { featureCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta partnership section not found');
  }
  return result;
};

// Delete meta partnership section
const deleteMetaPartnershipSection = async (): Promise<IMetaPartnershipSection | null> => {
  const result = await MetaPartnershipSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta partnership section not found');
  }
  return result;
};

export const MetaPartnershipSectionService = {
  createMetaPartnershipSection,
  getMetaPartnershipSection,
  updateMetaPartnershipSection,
  updateFeatureCards,
  deleteMetaPartnershipSection,
};
