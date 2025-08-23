import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITikTokClientSaysSection } from './tikTokClientSaysSection.interface';
import TikTokClientSaysSectionModel from './tikTokClientSaysSection.model';

// Create TikTok Client Says section (only one instance allowed)
const createTikTokClientSaysSection = async (tikTokClientSaysSectionData: ITikTokClientSaysSection): Promise<ITikTokClientSaysSection> => {
  // Check if TikTok Client Says section already exists
  const existingTikTokClientSaysSection = await TikTokClientSaysSectionModel.findOne();
  if (existingTikTokClientSaysSection) {
    throw new ApiError(httpStatus.CONFLICT, 'TikTok Client Says section already exists. You can only update it.');
  }

  const result = await TikTokClientSaysSectionModel.create(tikTokClientSaysSectionData);
  return result;
};

// Get TikTok Client Says section (only one instance)
const getTikTokClientSaysSection = async (): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

// Update TikTok Client Says section
const updateTikTokClientSaysSection = async (updateData: Partial<ITikTokClientSaysSection>): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

// Update specific components
const updateTestimonialCards = async (testimonialCards: ITikTokClientSaysSection['testimonialCards']): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndUpdate(
    {},
    { testimonialCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

// Add a single testimonial card
const addTestimonialCard = async (testimonialCard: ITikTokClientSaysSection['testimonialCards'][0]): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndUpdate(
    {},
    { $push: { testimonialCards: testimonialCard } },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

// Update a specific testimonial card by index
const updateTestimonialCardByIndex = async (index: number, testimonialCard: ITikTokClientSaysSection['testimonialCards'][0]): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndUpdate(
    {},
    { [`testimonialCards.${index}`]: testimonialCard },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

// Delete a specific testimonial card by index
const deleteTestimonialCardByIndex = async (index: number): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndUpdate(
    {},
    { $unset: { [`testimonialCards.${index}`]: 1 } },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  
  // Clean up the array by removing null values
  const cleanedResult = await TikTokClientSaysSectionModel.findOneAndUpdate(
    {},
    { $pull: { testimonialCards: null } },
    { new: true, runValidators: true }
  );
  
  return cleanedResult;
};

// Delete TikTok Client Says section
const deleteTikTokClientSaysSection = async (): Promise<ITikTokClientSaysSection | null> => {
  const result = await TikTokClientSaysSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'TikTok Client Says section not found');
  }
  return result;
};

export const TikTokClientSaysSectionService = {
  createTikTokClientSaysSection,
  getTikTokClientSaysSection,
  updateTikTokClientSaysSection,
  updateTestimonialCards,
  addTestimonialCard,
  updateTestimonialCardByIndex,
  deleteTestimonialCardByIndex,
  deleteTikTokClientSaysSection,
};
