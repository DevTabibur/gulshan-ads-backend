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
exports.TikTokAudienceSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const tikTokAudienceSection_service_1 = require("./tikTokAudienceSection.service");
// Create TikTok audience section
const createTikTokAudienceSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.createTikTokAudienceSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'TikTok audience section created successfully',
        data: result,
    });
}));
// Get TikTok audience section
const getTikTokAudienceSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.getTikTokAudienceSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok audience section retrieved successfully',
        data: result,
    });
}));
// Update TikTok audience section
const updateTikTokAudienceSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.updateTikTokAudienceSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok audience section updated successfully',
        data: result,
    });
}));
// Update statistics only
const updateStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.updateStatistics(req.body.statistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Statistics updated successfully',
        data: result,
    });
}));
// Update advertising benefit only
const updateAdvertisingBenefit = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.updateAdvertisingBenefit(req.body.advertisingBenefit);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertising benefit updated successfully',
        data: result,
    });
}));
// Update testimonial card only
const updateTestimonialCard = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.updateTestimonialCard(req.body.testimonialCard);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial card updated successfully',
        data: result,
    });
}));
// Delete TikTok audience section
const deleteTikTokAudienceSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokAudienceSection_service_1.TikTokAudienceSectionService.deleteTikTokAudienceSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok audience section deleted successfully',
        data: result,
    });
}));
exports.TikTokAudienceSectionController = {
    createTikTokAudienceSection,
    getTikTokAudienceSection,
    updateTikTokAudienceSection,
    updateStatistics,
    updateAdvertisingBenefit,
    updateTestimonialCard,
    deleteTikTokAudienceSection,
};
