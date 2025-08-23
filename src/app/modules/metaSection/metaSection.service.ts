import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IMetaSection } from './metaSection.interface';
import MetaSectionModel from './metaSection.model';

// Create meta section (only one instance allowed)
const createMetaSection = async (metaSectionData: IMetaSection): Promise<IMetaSection> => {
  // Check if meta section already exists
  const existingMetaSection = await MetaSectionModel.findOne();
  if (existingMetaSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Meta section already exists. You can only update it.');
  }

  const result = await MetaSectionModel.create(metaSectionData);
  return result;
};

// Get meta section (only one instance)
const getMetaSection = async (): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

// Update meta section
const updateMetaSection = async (updateData: Partial<IMetaSection>): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

// Update specific components
const updatePlatformIcons = async (platformIcons: IMetaSection['platformIcons']): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndUpdate(
    {},
    { platformIcons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

const updateFeatureButtons = async (featureButtons: IMetaSection['featureButtons']): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndUpdate(
    {},
    { featureButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

const updateServiceCards = async (serviceCards: IMetaSection['serviceCards']): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndUpdate(
    {},
    { serviceCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

const updatePerformanceStatistics = async (performanceStatistics: IMetaSection['performanceStatistics']): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndUpdate(
    {},
    { performanceStatistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

// Delete meta section
const deleteMetaSection = async (): Promise<IMetaSection | null> => {
  const result = await MetaSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta section not found');
  }
  return result;
};

export const MetaSectionService = {
  createMetaSection,
  getMetaSection,
  updateMetaSection,
  updatePlatformIcons,
  updateFeatureButtons,
  updateServiceCards,
  updatePerformanceStatistics,
  deleteMetaSection,
};
