import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IGettingStartedSection } from './gettingStartedSection.interface';
import GettingStartedSectionModel from './gettingStartedSection.model';

// Create getting started section (only one instance allowed)
const createGettingStartedSection = async (gettingStartedSectionData: IGettingStartedSection): Promise<IGettingStartedSection> => {
  // Check if getting started section already exists
  const existingGettingStartedSection = await GettingStartedSectionModel.findOne();
  if (existingGettingStartedSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Getting started section already exists. You can only update it.');
  }

  const result = await GettingStartedSectionModel.create(gettingStartedSectionData);
  return result;
};

// Get getting started section (only one instance)
const getGettingStartedSection = async (): Promise<IGettingStartedSection | null> => {
  const result = await GettingStartedSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Getting started section not found');
  }
  return result;
};

// Update getting started section
const updateGettingStartedSection = async (updateData: Partial<IGettingStartedSection>): Promise<IGettingStartedSection | null> => {
  const result = await GettingStartedSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Getting started section not found');
  }
  return result;
};

// Update specific components
const updateSteps = async (steps: IGettingStartedSection['steps']): Promise<IGettingStartedSection | null> => {
  const result = await GettingStartedSectionModel.findOneAndUpdate(
    {},
    { steps },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Getting started section not found');
  }
  return result;
};

const updateCTAButtons = async (ctaButtons: IGettingStartedSection['ctaButtons']): Promise<IGettingStartedSection | null> => {
  const result = await GettingStartedSectionModel.findOneAndUpdate(
    {},
    { ctaButtons },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Getting started section not found');
  }
  return result;
};

// Delete getting started section
const deleteGettingStartedSection = async (): Promise<IGettingStartedSection | null> => {
  const result = await GettingStartedSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Getting started section not found');
  }
  return result;
};

export const GettingStartedSectionService = {
  createGettingStartedSection,
  getGettingStartedSection,
  updateGettingStartedSection,
  updateSteps,
  updateCTAButtons,
  deleteGettingStartedSection,
};
