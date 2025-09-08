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
exports.AdvertisersHeroSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const advertisersHeroSection_service_1 = require("./advertisersHeroSection.service");
// Create advertisers hero section
const createAdvertisersHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.createAdvertisersHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Advertisers hero section created successfully',
        data: result,
    });
}));
// Get advertisers hero section
const getAdvertisersHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.getAdvertisersHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers hero section retrieved successfully',
        data: result,
    });
}));
// Update advertisers hero section
const updateAdvertisersHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.updateAdvertisersHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers hero section updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Update campaign performance only
const updateCampaignPerformance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.updateCampaignPerformance(req.body.campaignPerformance);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Campaign performance updated successfully',
        data: result,
    });
}));
// Update bottom statistics only
const updateBottomStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.updateBottomStatistics(req.body.bottomStatistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Bottom statistics updated successfully',
        data: result,
    });
}));
// Delete advertisers hero section
const deleteAdvertisersHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.deleteAdvertisersHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers hero section deleted successfully',
        data: result,
    });
}));
exports.AdvertisersHeroSectionController = {
    createAdvertisersHeroSection,
    getAdvertisersHeroSection,
    updateAdvertisersHeroSection,
    updateCTAButtons,
    updateCampaignPerformance,
    updateBottomStatistics,
    deleteAdvertisersHeroSection,
};
