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
exports.AdvertisersCtaHeroSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const advertisersCtaHeroSection_service_1 = require("./advertisersCtaHeroSection.service");
// Create advertisers CTA hero section
const createAdvertisersCtaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Advertisers CTA hero section created successfully',
        data: result,
    });
}));
// Get advertisers CTA hero section
const getAdvertisersCtaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers CTA hero section retrieved successfully',
        data: result,
    });
}));
// Update advertisers CTA hero section
const updateAdvertisersCtaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateAdvertisersCtaHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers CTA hero section updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Update benefits only
const updateBenefits = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateBenefits(req.body.benefits);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Benefits updated successfully',
        data: result,
    });
}));
// Delete advertisers CTA hero section
const deleteAdvertisersCtaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers CTA hero section deleted successfully',
        data: result,
    });
}));
exports.AdvertisersCtaHeroSectionController = {
    createAdvertisersCtaHeroSection,
    getAdvertisersCtaHeroSection,
    updateAdvertisersCtaHeroSection,
    updateCTAButtons,
    updateBenefits,
    deleteAdvertisersCtaHeroSection,
};
