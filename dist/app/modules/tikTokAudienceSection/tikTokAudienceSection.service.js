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
exports.TikTokAudienceSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const tikTokAudienceSection_model_1 = __importDefault(require("./tikTokAudienceSection.model"));
// Create TikTok audience section (only one instance allowed)
const createTikTokAudienceSection = (tikTokAudienceSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if TikTok audience section already exists
    const existingTikTokAudienceSection = yield tikTokAudienceSection_model_1.default.findOne();
    if (existingTikTokAudienceSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'TikTok audience section already exists. You can only update it.');
    }
    const result = yield tikTokAudienceSection_model_1.default.create(tikTokAudienceSectionData);
    return result;
});
// Get TikTok audience section (only one instance)
const getTikTokAudienceSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
// Update TikTok audience section
const updateTikTokAudienceSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
// Update specific components
const updateStatistics = (statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOneAndUpdate({}, { statistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
const updateAdvertisingBenefit = (advertisingBenefit) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOneAndUpdate({}, { advertisingBenefit }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
const updateTestimonialCard = (testimonialCard) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOneAndUpdate({}, { testimonialCard }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
// Delete TikTok audience section
const deleteTikTokAudienceSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok audience section not found');
    }
    return result;
});
exports.TikTokAudienceSectionService = {
    createTikTokAudienceSection,
    getTikTokAudienceSection,
    updateTikTokAudienceSection,
    updateStatistics,
    updateAdvertisingBenefit,
    updateTestimonialCard,
    deleteTikTokAudienceSection,
};
