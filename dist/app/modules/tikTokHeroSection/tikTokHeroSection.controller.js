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
exports.TikTokHeroSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const tikTokHeroSection_service_1 = require("./tikTokHeroSection.service");
// Create TikTok hero section
const createTikTokHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.createTikTokHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'TikTok hero section created successfully',
        data: result,
    });
}));
// Get TikTok hero section
const getTikTokHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.getTikTokHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok hero section retrieved successfully',
        data: result,
    });
}));
// Update TikTok hero section
const updateTikTokHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.updateTikTokHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok hero section updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Update statistics only
const updateStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.updateStatistics(req.body.statistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Statistics updated successfully',
        data: result,
    });
}));
// Update phone mockup only
const updatePhoneMockup = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.updatePhoneMockup(req.body.phoneMockup);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Phone mockup updated successfully',
        data: result,
    });
}));
// Delete TikTok hero section
const deleteTikTokHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokHeroSection_service_1.TikTokHeroSectionService.deleteTikTokHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok hero section deleted successfully',
        data: result,
    });
}));
exports.TikTokHeroSectionController = {
    createTikTokHeroSection,
    getTikTokHeroSection,
    updateTikTokHeroSection,
    updateCTAButtons,
    updateStatistics,
    updatePhoneMockup,
    deleteTikTokHeroSection,
};
