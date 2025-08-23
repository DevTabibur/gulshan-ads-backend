import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITelegramSection } from './telegramSection.interface';
import TelegramSectionModel from './telegramSection.model';

// Create telegram section (only one instance allowed)
const createTelegramSection = async (telegramSectionData: ITelegramSection): Promise<ITelegramSection> => {
  // Check if telegram section already exists
  const existingTelegramSection = await TelegramSectionModel.findOne();
  if (existingTelegramSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Telegram section already exists. You can only update it.');
  }

  const result = await TelegramSectionModel.create(telegramSectionData);
  return result;
};

// Get telegram section (only one instance)
const getTelegramSection = async (): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

// Update telegram section
const updateTelegramSection = async (updateData: Partial<ITelegramSection>): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

// Update specific components
const updateKeyFeatures = async (keyFeatures: ITelegramSection['keyFeatures']): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndUpdate(
    {},
    { keyFeatures },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

const updatePricingPoints = async (pricingPoints: ITelegramSection['pricingPoints']): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndUpdate(
    {},
    { pricingPoints },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

const updateChatInterface = async (chatInterface: ITelegramSection['chatInterface']): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndUpdate(
    {},
    { chatInterface },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

const updateFutureBanner = async (futureBanner: ITelegramSection['futureBanner']): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndUpdate(
    {},
    { futureBanner },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

// Delete telegram section
const deleteTelegramSection = async (): Promise<ITelegramSection | null> => {
  const result = await TelegramSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Telegram section not found');
  }
  return result;
};

export const TelegramSectionService = {
  createTelegramSection,
  getTelegramSection,
  updateTelegramSection,
  updateKeyFeatures,
  updatePricingPoints,
  updateChatInterface,
  updateFutureBanner,
  deleteTelegramSection,
};
