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
exports.AdvertisersHeroSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const advertisersHeroSection_model_1 = __importDefault(require("./advertisersHeroSection.model"));
// Create advertisers hero section (only one instance allowed)
const createAdvertisersHeroSection = (advertisersHeroSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if advertisers hero section already exists
    const existingAdvertisersHeroSection = yield advertisersHeroSection_model_1.default.findOne();
    if (existingAdvertisersHeroSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Advertisers hero section already exists. You can only update it.');
    }
    const result = yield advertisersHeroSection_model_1.default.create(advertisersHeroSectionData);
    return result;
});
// Get advertisers hero section (only one instance)
const getAdvertisersHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
// Update advertisers hero section
const updateAdvertisersHeroSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
// Update specific components
const updateCTAButtons = (ctaButtons) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOneAndUpdate({}, { ctaButtons }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
const updateCampaignPerformance = (campaignPerformance) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOneAndUpdate({}, { campaignPerformance }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
const updateBottomStatistics = (bottomStatistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOneAndUpdate({}, { bottomStatistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
// Delete advertisers hero section
const deleteAdvertisersHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers hero section not found');
    }
    return result;
});
exports.AdvertisersHeroSectionService = {
    createAdvertisersHeroSection,
    getAdvertisersHeroSection,
    updateAdvertisersHeroSection,
    updateCTAButtons,
    updateCampaignPerformance,
    updateBottomStatistics,
    deleteAdvertisersHeroSection,
};
