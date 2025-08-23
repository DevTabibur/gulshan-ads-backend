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
exports.AdvertisingSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const advertisingSection_service_1 = require("./advertisingSection.service");
// Create advertising section
const createAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.createAdvertisingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Advertising section created successfully',
        data: result,
    });
}));
// Get advertising section
const getAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.getAdvertisingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertising section retrieved successfully',
        data: result,
    });
}));
// Update advertising section
const updateAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.updateAdvertisingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertising section updated successfully',
        data: result,
    });
}));
// Update key features only
const updateKeyFeatures = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.updateKeyFeatures(req.body.keyFeatures);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Key features updated successfully',
        data: result,
    });
}));
// Update service cards only
const updateServiceCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.updateServiceCards(req.body.serviceCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Service cards updated successfully',
        data: result,
    });
}));
// Update statistics only
const updateStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.updateStatistics(req.body.statistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Statistics updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Delete advertising section
const deleteAdvertisingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisingSection_service_1.AdvertisingSectionService.deleteAdvertisingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertising section deleted successfully',
        data: result,
    });
}));
exports.AdvertisingSectionController = {
    createAdvertisingSection,
    getAdvertisingSection,
    updateAdvertisingSection,
    updateKeyFeatures,
    updateServiceCards,
    updateStatistics,
    updateCTAButtons,
    deleteAdvertisingSection,
};
