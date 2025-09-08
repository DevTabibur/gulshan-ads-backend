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
exports.TikTokPartnerSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const tikTokPartnerSection_service_1 = require("./tikTokPartnerSection.service");
// Create TikTok Partner section
const createTikTokPartnerSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.createTikTokPartnerSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'TikTok Partner section created successfully',
        data: result,
    });
}));
// Get TikTok Partner section
const getTikTokPartnerSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.getTikTokPartnerSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Partner section retrieved successfully',
        data: result,
    });
}));
// Update TikTok Partner section
const updateTikTokPartnerSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.updateTikTokPartnerSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Partner section updated successfully',
        data: result,
    });
}));
// Update partnership logos only
const updatePartnershipLogos = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.updatePartnershipLogos(req.body.partnershipLogos);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Partnership logos updated successfully',
        data: result,
    });
}));
// Update feature cards only
const updateFeatureCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.updateFeatureCards(req.body.featureCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Feature cards updated successfully',
        data: result,
    });
}));
// Update CTA button only
const updateCTAButton = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.updateCTAButton(req.body.ctaButton);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA button updated successfully',
        data: result,
    });
}));
// Delete TikTok Partner section
const deleteTikTokPartnerSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokPartnerSection_service_1.TikTokPartnerSectionService.deleteTikTokPartnerSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Partner section deleted successfully',
        data: result,
    });
}));
exports.TikTokPartnerSectionController = {
    createTikTokPartnerSection,
    getTikTokPartnerSection,
    updateTikTokPartnerSection,
    updatePartnershipLogos,
    updateFeatureCards,
    updateCTAButton,
    deleteTikTokPartnerSection,
};
