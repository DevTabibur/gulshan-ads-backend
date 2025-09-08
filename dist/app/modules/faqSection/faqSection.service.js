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
exports.FAQSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const faqSection_model_1 = __importDefault(require("./faqSection.model"));
// Create FAQ section (only one instance allowed)
const createFAQSection = (faqSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if FAQ section already exists
    const existingFAQSection = yield faqSection_model_1.default.findOne();
    if (existingFAQSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'FAQ section already exists. You can only update it.');
    }
    const result = yield faqSection_model_1.default.create(faqSectionData);
    return result;
});
// Get FAQ section (only one instance)
const getFAQSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faqSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'FAQ section not found');
    }
    return result;
});
// Update FAQ section
const updateFAQSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faqSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'FAQ section not found');
    }
    return result;
});
// Update specific components
const updateFAQItems = (faqItems) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faqSection_model_1.default.findOneAndUpdate({}, { faqItems }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'FAQ section not found');
    }
    return result;
});
// Delete FAQ section
const deleteFAQSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faqSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'FAQ section not found');
    }
    return result;
});
exports.FAQSectionService = {
    createFAQSection,
    getFAQSection,
    updateFAQSection,
    updateFAQItems,
    deleteFAQSection,
};
