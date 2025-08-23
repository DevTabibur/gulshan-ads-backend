import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IMetaPricingSection } from './metaPricingSection.interface';
import MetaPricingSectionModel from './metaPricingSection.model';

// Create meta pricing section (only one instance allowed)
const createMetaPricingSection = async (metaPricingSectionData: IMetaPricingSection): Promise<IMetaPricingSection> => {
  // Check if meta pricing section already exists
  const existingMetaPricingSection = await MetaPricingSectionModel.findOne();
  if (existingMetaPricingSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Meta pricing section already exists. You can only update it.');
  }

  const result = await MetaPricingSectionModel.create(metaPricingSectionData);
  return result;
};

// Get meta pricing section (only one instance)
const getMetaPricingSection = async (): Promise<IMetaPricingSection | null> => {
  const result = await MetaPricingSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta pricing section not found');
  }
  return result;
};

// Update meta pricing section
const updateMetaPricingSection = async (updateData: Partial<IMetaPricingSection>): Promise<IMetaPricingSection | null> => {
  const result = await MetaPricingSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta pricing section not found');
  }
  return result;
};

// Update specific components
const updatePlans = async (plans: IMetaPricingSection['plans']): Promise<IMetaPricingSection | null> => {
  const result = await MetaPricingSectionModel.findOneAndUpdate(
    {},
    { plans },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta pricing section not found');
  }
  return result;
};

// Delete meta pricing section
const deleteMetaPricingSection = async (): Promise<IMetaPricingSection | null> => {
  const result = await MetaPricingSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta pricing section not found');
  }
  return result;
};

export const MetaPricingSectionService = {
  createMetaPricingSection,
  getMetaPricingSection,
  updateMetaPricingSection,
  updatePlans,
  deleteMetaPricingSection,
};
