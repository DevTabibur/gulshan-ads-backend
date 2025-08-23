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
exports.HeroSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const heroSection_service_1 = require("./heroSection.service");
// Create hero section
const createHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_service_1.HeroSectionService.createHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Hero section created successfully',
        data: result,
    });
}));
// Get hero section
const getHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_service_1.HeroSectionService.getHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Hero section retrieved successfully',
        data: result,
    });
}));
// Update hero section
const updateHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_service_1.HeroSectionService.updateHeroSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Hero section updated successfully',
        data: result,
    });
}));
// Delete hero section
const deleteHeroSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_service_1.HeroSectionService.deleteHeroSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Hero section deleted successfully',
        data: result,
    });
}));
exports.HeroSectionController = {
    createHeroSection,
    getHeroSection,
    updateHeroSection,
    deleteHeroSection,
};
