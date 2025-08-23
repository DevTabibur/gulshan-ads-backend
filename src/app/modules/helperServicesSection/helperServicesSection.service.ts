import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IHelperServicesSection } from './helperServicesSection.interface';
import HelperServicesSectionModel from './helperServicesSection.model';

// Create helper services section (only one instance allowed)
const createHelperServicesSection = async (helperServicesSectionData: IHelperServicesSection): Promise<IHelperServicesSection> => {
  // Check if helper services section already exists
  const existingHelperServicesSection = await HelperServicesSectionModel.findOne();
  if (existingHelperServicesSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Helper services section already exists. You can only update it.');
  }

  const result = await HelperServicesSectionModel.create(helperServicesSectionData);
  return result;
};

// Get helper services section (only one instance)
const getHelperServicesSection = async (): Promise<IHelperServicesSection | null> => {
  const result = await HelperServicesSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Helper services section not found');
  }
  return result;
};

// Update helper services section
const updateHelperServicesSection = async (updateData: Partial<IHelperServicesSection>): Promise<IHelperServicesSection | null> => {
  const result = await HelperServicesSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Helper services section not found');
  }
  return result;
};

// Update specific components
const updateServices = async (services: IHelperServicesSection['services']): Promise<IHelperServicesSection | null> => {
  const result = await HelperServicesSectionModel.findOneAndUpdate(
    {},
    { services },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Helper services section not found');
  }
  return result;
};

// Delete helper services section
const deleteHelperServicesSection = async (): Promise<IHelperServicesSection | null> => {
  const result = await HelperServicesSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Helper services section not found');
  }
  return result;
};

export const HelperServicesSectionService = {
  createHelperServicesSection,
  getHelperServicesSection,
  updateHelperServicesSection,
  updateServices,
  deleteHelperServicesSection,
};
