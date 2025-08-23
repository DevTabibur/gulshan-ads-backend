import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IPaymentAutomationSection } from './paymentAutomationSection.interface';
import PaymentAutomationSectionModel from './paymentAutomationSection.model';

// Create Payment Automation section (only one instance allowed)
const createPaymentAutomationSection = async (paymentAutomationSectionData: IPaymentAutomationSection): Promise<IPaymentAutomationSection> => {
  // Check if Payment Automation section already exists
  const existingPaymentAutomationSection = await PaymentAutomationSectionModel.findOne();
  if (existingPaymentAutomationSection) {
    throw new ApiError(httpStatus.CONFLICT, 'Payment Automation section already exists. You can only update it.');
  }

  const result = await PaymentAutomationSectionModel.create(paymentAutomationSectionData);
  return result;
};

// Get Payment Automation section (only one instance)
const getPaymentAutomationSection = async (): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

// Update Payment Automation section
const updatePaymentAutomationSection = async (updateData: Partial<IPaymentAutomationSection>): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

// Update specific components
const updateBenefitTags = async (benefitTags: IPaymentAutomationSection['benefitTags']): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndUpdate(
    {},
    { benefitTags },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

const updateFeatureCards = async (featureCards: IPaymentAutomationSection['featureCards']): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndUpdate(
    {},
    { featureCards },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

const updateFinancialCalloutText = async (financialCalloutText: IPaymentAutomationSection['financialCalloutText']): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndUpdate(
    {},
    { financialCalloutText },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

const updateCTAButton = async (ctaButton: IPaymentAutomationSection['ctaButton']): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndUpdate(
    {},
    { ctaButton },
    { new: true, runValidators: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

// Delete Payment Automation section
const deletePaymentAutomationSection = async (): Promise<IPaymentAutomationSection | null> => {
  const result = await PaymentAutomationSectionModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Payment Automation section not found');
  }
  return result;
};

export const PaymentAutomationSectionService = {
  createPaymentAutomationSection,
  getPaymentAutomationSection,
  updatePaymentAutomationSection,
  updateBenefitTags,
  updateFeatureCards,
  updateFinancialCalloutText,
  updateCTAButton,
  deletePaymentAutomationSection,
};
