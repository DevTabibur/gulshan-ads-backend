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
exports.TikTokPartnerSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const tikTokPartnerSection_model_1 = __importDefault(require("./tikTokPartnerSection.model"));
// Create TikTok Partner section (only one instance allowed)
const createTikTokPartnerSection = (tikTokPartnerSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if TikTok Partner section already exists
    const existingTikTokPartnerSection = yield tikTokPartnerSection_model_1.default.findOne();
    if (existingTikTokPartnerSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'TikTok Partner section already exists. You can only update it.');
    }
    const result = yield tikTokPartnerSection_model_1.default.create(tikTokPartnerSectionData);
    return result;
});
// Get TikTok Partner section (only one instance)
const getTikTokPartnerSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
// Update TikTok Partner section
const updateTikTokPartnerSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
// Update specific components
const updatePartnershipLogos = (partnershipLogos) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOneAndUpdate({}, { partnershipLogos }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
const updateFeatureCards = (featureCards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOneAndUpdate({}, { featureCards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
const updateCTAButton = (ctaButton) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOneAndUpdate({}, { ctaButton }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
// Delete TikTok Partner section
const deleteTikTokPartnerSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok Partner section not found');
    }
    return result;
});
exports.TikTokPartnerSectionService = {
    createTikTokPartnerSection,
    getTikTokPartnerSection,
    updateTikTokPartnerSection,
    updatePartnershipLogos,
    updateFeatureCards,
    updateCTAButton,
    deleteTikTokPartnerSection,
};
