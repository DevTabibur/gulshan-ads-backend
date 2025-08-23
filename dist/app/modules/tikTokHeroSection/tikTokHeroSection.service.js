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
exports.TikTokHeroSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const tikTokHeroSection_model_1 = __importDefault(require("./tikTokHeroSection.model"));
// Create TikTok hero section (only one instance allowed)
const createTikTokHeroSection = (tikTokHeroSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if TikTok hero section already exists
    const existingTikTokHeroSection = yield tikTokHeroSection_model_1.default.findOne();
    if (existingTikTokHeroSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'TikTok hero section already exists. You can only update it.');
    }
    const result = yield tikTokHeroSection_model_1.default.create(tikTokHeroSectionData);
    return result;
});
// Get TikTok hero section (only one instance)
const getTikTokHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
// Update TikTok hero section
const updateTikTokHeroSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
// Update specific components
const updateCTAButtons = (ctaButtons) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOneAndUpdate({}, { ctaButtons }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
const updateStatistics = (statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOneAndUpdate({}, { statistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
const updatePhoneMockup = (phoneMockup) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOneAndUpdate({}, { phoneMockup }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
// Delete TikTok hero section
const deleteTikTokHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok hero section not found');
    }
    return result;
});
exports.TikTokHeroSectionService = {
    createTikTokHeroSection,
    getTikTokHeroSection,
    updateTikTokHeroSection,
    updateCTAButtons,
    updateStatistics,
    updatePhoneMockup,
    deleteTikTokHeroSection,
};
