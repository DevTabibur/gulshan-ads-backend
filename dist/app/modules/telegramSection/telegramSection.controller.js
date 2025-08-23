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
exports.TelegramSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const telegramSection_service_1 = require("./telegramSection.service");
// Create telegram section
const createTelegramSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.createTelegramSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Telegram section created successfully',
        data: result,
    });
}));
// Get telegram section
const getTelegramSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.getTelegramSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Telegram section retrieved successfully',
        data: result,
    });
}));
// Update telegram section
const updateTelegramSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.updateTelegramSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Telegram section updated successfully',
        data: result,
    });
}));
// Update key features only
const updateKeyFeatures = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.updateKeyFeatures(req.body.keyFeatures);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Key features updated successfully',
        data: result,
    });
}));
// Update pricing points only
const updatePricingPoints = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.updatePricingPoints(req.body.pricingPoints);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Pricing points updated successfully',
        data: result,
    });
}));
// Update chat interface only
const updateChatInterface = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.updateChatInterface(req.body.chatInterface);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Chat interface updated successfully',
        data: result,
    });
}));
// Update future banner only
const updateFutureBanner = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.updateFutureBanner(req.body.futureBanner);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Future banner updated successfully',
        data: result,
    });
}));
// Delete telegram section
const deleteTelegramSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield telegramSection_service_1.TelegramSectionService.deleteTelegramSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Telegram section deleted successfully',
        data: result,
    });
}));
exports.TelegramSectionController = {
    createTelegramSection,
    getTelegramSection,
    updateTelegramSection,
    updateKeyFeatures,
    updatePricingPoints,
    updateChatInterface,
    updateFutureBanner,
    deleteTelegramSection,
};
