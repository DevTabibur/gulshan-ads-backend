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
exports.TikTokVideoAdvertisingSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const tikTokVideoAdvertisingSection_model_1 = __importDefault(require("./tikTokVideoAdvertisingSection.model"));
// Create TikTok video advertising section (only one instance allowed)
const createTikTokVideoAdvertisingSection = (tikTokVideoAdvertisingSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if TikTok video advertising section already exists
    const existingTikTokVideoAdvertisingSection = yield tikTokVideoAdvertisingSection_model_1.default.findOne();
    if (existingTikTokVideoAdvertisingSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'TikTok video advertising section already exists. You can only update it.');
    }
    const result = yield tikTokVideoAdvertisingSection_model_1.default.create(tikTokVideoAdvertisingSectionData);
    return result;
});
// Get TikTok video advertising section (only one instance)
const getTikTokVideoAdvertisingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
// Update TikTok video advertising section
const updateTikTokVideoAdvertisingSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
// Update specific components
const updateAdvertisingOptions = (advertisingOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndUpdate({}, { advertisingOptions }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
const updateBudgetInfo = (budgetInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndUpdate({}, { budgetInfo }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
const updatePhoneMockup = (phoneMockup) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndUpdate({}, { phoneMockup }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
const updateEngagementStatistic = (engagementStatistic) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndUpdate({}, { engagementStatistic }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
// Delete TikTok video advertising section
const deleteTikTokVideoAdvertisingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'TikTok video advertising section not found');
    }
    return result;
});
exports.TikTokVideoAdvertisingSectionService = {
    createTikTokVideoAdvertisingSection,
    getTikTokVideoAdvertisingSection,
    updateTikTokVideoAdvertisingSection,
    updateAdvertisingOptions,
    updateBudgetInfo,
    updatePhoneMockup,
    updateEngagementStatistic,
    deleteTikTokVideoAdvertisingSection,
};
