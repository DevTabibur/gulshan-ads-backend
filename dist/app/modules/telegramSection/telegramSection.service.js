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
exports.TelegramSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const telegramSection_model_1 = __importDefault(require("./telegramSection.model"));
// Create telegram section (only one instance allowed)
const createTelegramSection = (telegramSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if telegram section already exists
    const existingTelegramSection = yield telegramSection_model_1.default.findOne();
    if (existingTelegramSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Telegram section already exists. You can only update it.');
    }
    const result = yield telegramSection_model_1.default.create(telegramSectionData);
    return result;
});
// Get telegram section (only one instance)
const getTelegramSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
// Update telegram section
const updateTelegramSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
// Update specific components
const updateKeyFeatures = (keyFeatures) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndUpdate({}, { keyFeatures }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
const updatePricingPoints = (pricingPoints) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndUpdate({}, { pricingPoints }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
const updateChatInterface = (chatInterface) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndUpdate({}, { chatInterface }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
const updateFutureBanner = (futureBanner) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndUpdate({}, { futureBanner }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
// Delete telegram section
const deleteTelegramSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Telegram section not found');
    }
    return result;
});
exports.TelegramSectionService = {
    createTelegramSection,
    getTelegramSection,
    updateTelegramSection,
    updateKeyFeatures,
    updatePricingPoints,
    updateChatInterface,
    updateFutureBanner,
    deleteTelegramSection,
};
