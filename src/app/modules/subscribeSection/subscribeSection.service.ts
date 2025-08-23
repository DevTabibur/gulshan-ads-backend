import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ISubscribeSection } from './subscribeSection.interface';
import SubscribeSectionModel from './subscribeSection.model';

// Create Subscribe section (only one instance allowed)
const createSubscribeSection = async (subscribeSectionData: ISubscribeSection): Promise<ISubscribeSection> => {
  // Check if Subscribe section already exists
  const existingSubscribeSection = await SubscribeSectionModel.findOne();
  if (existingSubscribeSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Subscribe section already exists. You can only update it.');
  }

  const result = await SubscribeSectionModel.create(subscribeSectionData);
  return result;
};

// Get Subscribe section (only one instance)
const getSubscribeSection = async (): Promise<ISubscribeSection | null> => {
  const result = await SubscribeSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subscribe section not found');
  }
  return result;
};

// Update Subscribe section
const updateSubscribeSection = async (updateData: Partial<ISubscribeSection>): Promise<ISubscribeSection | null> => {
  const result = await SubscribeSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subscribe section not found');
  }
  return result;
};

// Delete Subscribe section
const deleteSubscribeSection = async (): Promise<ISubscribeSection | null> => {
  const result = await SubscribeSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subscribe section not found');
  }
  return result;
};

export const SubscribeSectionService = {
  createSubscribeSection,
  getSubscribeSection,
  updateSubscribeSection,
  deleteSubscribeSection,
};
