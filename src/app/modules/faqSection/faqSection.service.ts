import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IFAQSection } from './faqSection.interface';
import FAQSectionModel from './faqSection.model';

// Create FAQ section (only one instance allowed)
const createFAQSection = async (faqSectionData: IFAQSection): Promise<IFAQSection> => {
  // Check if FAQ section already exists
  const existingFAQSection = await FAQSectionModel.findOne();
  if (existingFAQSection) {
    throw new ApiError(httpStatus.CONFLICT, 'FAQ section already exists. You can only update it.');
  }

  const result = await FAQSectionModel.create(faqSectionData);
  return result;
};

// Get FAQ section (only one instance)
const getFAQSection = async (): Promise<IFAQSection | null> => {
  const result = await FAQSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ section not found');
  }
  return result;
};

// Update FAQ section
const updateFAQSection = async (updateData: Partial<IFAQSection>): Promise<IFAQSection | null> => {
  const result = await FAQSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ section not found');
  }
  return result;
};

// Update specific components
const updateFAQItems = async (faqItems: IFAQSection['faqItems']): Promise<IFAQSection | null> => {
  const result = await FAQSectionModel.findOneAndUpdate(
    {},
    { faqItems },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ section not found');
  }
  return result;
};

// Delete FAQ section
const deleteFAQSection = async (): Promise<IFAQSection | null> => {
  const result = await FAQSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'FAQ section not found');
  }
  return result;
};

export const FAQSectionService = {
  createFAQSection,
  getFAQSection,
  updateFAQSection,
  updateFAQItems,
  deleteFAQSection,
};
