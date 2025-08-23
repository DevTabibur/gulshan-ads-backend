"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAutomationSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paymentAutomationSection_model_1 = __importDefault(require("./paymentAutomationSection.model"));
// Create Payment Automation section (only one instance allowed)
const createPaymentAutomationSection = (paymentAutomationSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if Payment Automation section already exists
    const existingPaymentAutomationSection = yield paymentAutomationSection_model_1.default.findOne();
    if (existingPaymentAutomationSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Payment Automation section already exists. You can only update it.');
    }
    const result = yield paymentAutomationSection_model_1.default.create(paymentAutomationSectionData);
    return result;
});
// Get Payment Automation section (only one instance)
const getPaymentAutomationSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
// Update Payment Automation section
const updatePaymentAutomationSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
// Update specific components
const updateBenefitTags = (benefitTags) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndUpdate({}, { benefitTags }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
const updateFeatureCards = (featureCards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndUpdate({}, { featureCards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
const updateFinancialCalloutText = (financialCalloutText) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndUpdate({}, { financialCalloutText }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
const updateCTAButton = (ctaButton) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndUpdate({}, { ctaButton }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
// Delete Payment Automation section
const deletePaymentAutomationSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Payment Automation section not found');
    }
    return result;
});
exports.PaymentAutomationSectionService = {
    createPaymentAutomationSection,
    getPaymentAutomationSection,
    updatePaymentAutomationSection,
    updateBenefitTags,
    updateFeatureCards,
    updateFinancialCalloutText,
    updateCTAButton,
    deletePaymentAutomationSection,
};
