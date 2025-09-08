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
exports.TikTokClientSaysSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const tikTokClientSaysSection_model_1 = __importDefault(require("./tikTokClientSaysSection.model"));
// Create TikTok Client Says section (only one instance allowed)
const createTikTokClientSaysSection = (tikTokClientSaysSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if TikTok Client Says section already exists
    const existingTikTokClientSaysSection = yield tikTokClientSaysSection_model_1.default.findOne();
    if (existingTikTokClientSaysSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'TikTok Client Says section already exists. You can only update it.');
    }
    const result = yield tikTokClientSaysSection_model_1.default.create(tikTokClientSaysSectionData);
    return result;
});
// Get TikTok Client Says section (only one instance)
const getTikTokClientSaysSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
// Update TikTok Client Says section
const updateTikTokClientSaysSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
// Update specific components
const updateTestimonialCards = (testimonialCards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, { testimonialCards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
// Add a single testimonial card
const addTestimonialCard = (testimonialCard) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, { $push: { testimonialCards: testimonialCard } }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
// Update a specific testimonial card by index
const updateTestimonialCardByIndex = (index, testimonialCard) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, { [`testimonialCards.${index}`]: testimonialCard }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
// Delete a specific testimonial card by index
const deleteTestimonialCardByIndex = (index) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, { $unset: { [`testimonialCards.${index}`]: 1 } }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    // Clean up the array by removing null values
    const cleanedResult = yield tikTokClientSaysSection_model_1.default.findOneAndUpdate({}, { $pull: { testimonialCards: null } }, { new: true, runValidators: true });
    return cleanedResult;
});
// Delete TikTok Client Says section
const deleteTikTokClientSaysSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Client Says section not found');
    }
    return result;
});
exports.TikTokClientSaysSectionService = {
    createTikTokClientSaysSection,
    getTikTokClientSaysSection,
    updateTikTokClientSaysSection,
    updateTestimonialCards,
    addTestimonialCard,
    updateTestimonialCardByIndex,
    deleteTestimonialCardByIndex,
    deleteTikTokClientSaysSection,
};
