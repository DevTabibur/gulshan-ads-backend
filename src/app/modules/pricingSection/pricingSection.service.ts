import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IPricingSection } from './pricingSection.interface';
import PricingSectionModel from './pricingSection.model';

// Create pricing section (only one instance allowed)
const createPricingSection = async (pricingSectionData: IPricingSection): Promise<IPricingSection> => {
  // Check if pricing section already exists
  const existingPricingSection = await PricingSectionModel.findOne();
  if (existingPricingSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Pricing section already exists. You can only update it.');
  }

  const result = await PricingSectionModel.create(pricingSectionData);
  return result;
};

// Get pricing section (only one instance)
const getPricingSection = async (): Promise<IPricingSection | null> => {
  const result = await PricingSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pricing section not found');
  }
  return result;
};

// Update pricing section
const updatePricingSection = async (updateData: Partial<IPricingSection>): Promise<IPricingSection | null> => {
  const result = await PricingSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pricing section not found');
  }
  return result;
};

// Update specific components
const updatePlans = async (plans: IPricingSection['plans']): Promise<IPricingSection | null> => {
  const result = await PricingSectionModel.findOneAndUpdate(
    {},
    { plans },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pricing section not found');
  }
  return result;
};

// Delete pricing section
const deletePricingSection = async (): Promise<IPricingSection | null> => {
  const result = await PricingSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pricing section not found');
  }
  return result;
};

export const PricingSectionService = {
  createPricingSection,
  getPricingSection,
  updatePricingSection,
  updatePlans,
  deletePricingSection,
};
