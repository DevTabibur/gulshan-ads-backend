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
exports.TikTokVideoAdvertisingSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const tikTokVideoAdvertisingSection_service_1 = require("./tikTokVideoAdvertisingSection.service");
// Create TikTok video advertising section
const createTikTokVideoAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.createTikTokVideoAdvertisingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'TikTok video advertising section created successfully',
        data: result,
    });
}));
// Get TikTok video advertising section
const getTikTokVideoAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.getTikTokVideoAdvertisingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok video advertising section retrieved successfully',
        data: result,
    });
}));
// Update TikTok video advertising section
const updateTikTokVideoAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.updateTikTokVideoAdvertisingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok video advertising section updated successfully',
        data: result,
    });
}));
// Update advertising options only
const updateAdvertisingOptions = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.updateAdvertisingOptions(req.body.advertisingOptions);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertising options updated successfully',
        data: result,
    });
}));
// Update budget info only
const updateBudgetInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.updateBudgetInfo(req.body.budgetInfo);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Budget info updated successfully',
        data: result,
    });
}));
// Update phone mockup only
const updatePhoneMockup = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.updatePhoneMockup(req.body.phoneMockup);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Phone mockup updated successfully',
        data: result,
    });
}));
// Update engagement statistic only
const updateEngagementStatistic = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.updateEngagementStatistic(req.body.engagementStatistic);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Engagement statistic updated successfully',
        data: result,
    });
}));
// Delete TikTok video advertising section
const deleteTikTokVideoAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokVideoAdvertisingSection_service_1.TikTokVideoAdvertisingSectionService.deleteTikTokVideoAdvertisingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok video advertising section deleted successfully',
        data: result,
    });
}));
exports.TikTokVideoAdvertisingSectionController = {
    createTikTokVideoAdvertisingSection,
    getTikTokVideoAdvertisingSection,
    updateTikTokVideoAdvertisingSection,
    updateAdvertisingOptions,
    updateBudgetInfo,
    updatePhoneMockup,
    updateEngagementStatistic,
    deleteTikTokVideoAdvertisingSection,
};
