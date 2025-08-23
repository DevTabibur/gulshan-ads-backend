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
exports.MetaHeroSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const metaHeroSection_service_1 = require("./metaHeroSection.service");
// Create meta hero section
const createMetaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.createMetaHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Meta hero section created successfully',
        data: result,
    });
}));
// Get meta hero section
const getMetaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.getMetaHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta hero section retrieved successfully',
        data: result,
    });
}));
// Update meta hero section
const updateMetaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateMetaHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta hero section updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Update statistics only
const updateStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateStatistics(req.body.statistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Statistics updated successfully',
        data: result,
    });
}));
// Delete meta hero section
const deleteMetaHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaHeroSection_service_1.MetaHeroSectionService.deleteMetaHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta hero section deleted successfully',
        data: result,
    });
}));
exports.MetaHeroSectionController = {
    createMetaHeroSection,
    getMetaHeroSection,
    updateMetaHeroSection,
    updateCTAButtons,
    updateStatistics,
    deleteMetaHeroSection,
};
