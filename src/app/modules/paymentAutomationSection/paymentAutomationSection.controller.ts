import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { PaymentAutomationSectionService } from './paymentAutomationSection.service';

// Create Payment Automation section
const createPaymentAutomationSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.createPaymentAutomationSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Payment Automation section created successfully',
    data: result,
  });
});

// Get Payment Automation section
const getPaymentAutomationSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.getPaymentAutomationSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Payment Automation section retrieved successfully',
    data: result,
  });
});

// Update Payment Automation section
const updatePaymentAutomationSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.updatePaymentAutomationSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Payment Automation section updated successfully',
    data: result,
  });
});

// Update benefit tags only
const updateBenefitTags = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.updateBenefitTags(req.body.benefitTags);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Benefit tags updated successfully',
    data: result,
  });
});

// Update feature cards only
const updateFeatureCards = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.updateFeatureCards(req.body.featureCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Feature cards updated successfully',
    data: result,
  });
});

// Update financial callout text only
const updateFinancialCalloutText = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.updateFinancialCalloutText(req.body.financialCalloutText);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Financial callout text updated successfully',
    data: result,
  });
});

// Update CTA button only
const updateCTAButton = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.updateCTAButton(req.body.ctaButton);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA button updated successfully',
    data: result,
  });
});

// Delete Payment Automation section
const deletePaymentAutomationSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentAutomationSectionService.deletePaymentAutomationSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Payment Automation section deleted successfully',
    data: result,
  });
});

export const PaymentAutomationSectionController = {
  createPaymentAutomationSection,
  getPaymentAutomationSection,
  updatePaymentAutomationSection,
  updateBenefitTags,
  updateFeatureCards,
  updateFinancialCalloutText,
  updateCTAButton,
  deletePaymentAutomationSection,
};
