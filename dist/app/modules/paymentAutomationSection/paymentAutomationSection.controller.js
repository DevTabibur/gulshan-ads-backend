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
exports.PaymentAutomationSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const paymentAutomationSection_service_1 = require("./paymentAutomationSection.service");
// Create Payment Automation section
const createPaymentAutomationSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.createPaymentAutomationSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Payment Automation section created successfully',
        data: result,
    });
}));
// Get Payment Automation section
const getPaymentAutomationSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.getPaymentAutomationSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Payment Automation section retrieved successfully',
        data: result,
    });
}));
// Update Payment Automation section
const updatePaymentAutomationSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.updatePaymentAutomationSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Payment Automation section updated successfully',
        data: result,
    });
}));
// Update benefit tags only
const updateBenefitTags = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.updateBenefitTags(req.body.benefitTags);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Benefit tags updated successfully',
        data: result,
    });
}));
// Update feature cards only
const updateFeatureCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.updateFeatureCards(req.body.featureCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Feature cards updated successfully',
        data: result,
    });
}));
// Update financial callout text only
const updateFinancialCalloutText = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.updateFinancialCalloutText(req.body.financialCalloutText);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Financial callout text updated successfully',
        data: result,
    });
}));
// Update CTA button only
const updateCTAButton = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.updateCTAButton(req.body.ctaButton);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA button updated successfully',
        data: result,
    });
}));
// Delete Payment Automation section
const deletePaymentAutomationSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paymentAutomationSection_service_1.PaymentAutomationSectionService.deletePaymentAutomationSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Payment Automation section deleted successfully',
        data: result,
    });
}));
exports.PaymentAutomationSectionController = {
    createPaymentAutomationSection,
    getPaymentAutomationSection,
    updatePaymentAutomationSection,
    updateBenefitTags,
    updateFeatureCards,
    updateFinancialCalloutText,
    updateCTAButton,
    deletePaymentAutomationSection,
};
