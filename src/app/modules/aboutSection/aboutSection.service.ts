import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IAboutSection } from './aboutSection.interface';
import AboutSectionModel from './aboutSection.model';

// Create about section (only one instance allowed)
const createAboutSection = async (aboutSectionData: IAboutSection): Promise<IAboutSection> => {
  // Check if about section already exists
  const existingAboutSection = await AboutSectionModel.findOne();
  if (existingAboutSection) {
    throw new ApiError(httpStatus.CONFLICT, 'About section already exists. You can only update it.');
  }

  const result = await AboutSectionModel.create(aboutSectionData);
  return result;
};

// Get about section (only one instance)
const getAboutSection = async (): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

// Update about section
const updateAboutSection = async (updateData: Partial<IAboutSection>): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

// Update specific components
const updateStatistics = async (statistics: IAboutSection['statistics']): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOneAndUpdate(
    {},
    { statistics },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

const updateClientTypes = async (clientTypes: IAboutSection['clientTypes']): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOneAndUpdate(
    {},
    { clientTypes },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

const updateMissionPillars = async (missionPillars: IAboutSection['missionPillars']): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOneAndUpdate(
    {},
    { missionPillars },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

// Delete about section
const deleteAboutSection = async (): Promise<IAboutSection | null> => {
  const result = await AboutSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'About section not found');
  }
  return result;
};

export const AboutSectionService = {
  createAboutSection,
  getAboutSection,
  updateAboutSection,
  updateStatistics,
  updateClientTypes,
  updateMissionPillars,
  deleteAboutSection,
};
