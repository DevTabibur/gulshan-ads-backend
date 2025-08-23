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
exports.AboutSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const aboutSection_service_1 = require("./aboutSection.service");
// Create about section
const createAboutSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.createAboutSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'About section created successfully',
        data: result,
    });
}));
// Get about section
const getAboutSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.getAboutSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'About section retrieved successfully',
        data: result,
    });
}));
// Update about section
const updateAboutSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.updateAboutSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'About section updated successfully',
        data: result,
    });
}));
// Update statistics only
const updateStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.updateStatistics(req.body.statistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Statistics updated successfully',
        data: result,
    });
}));
// Update client types only
const updateClientTypes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.updateClientTypes(req.body.clientTypes);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Client types updated successfully',
        data: result,
    });
}));
// Update mission pillars only
const updateMissionPillars = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.updateMissionPillars(req.body.missionPillars);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Mission pillars updated successfully',
        data: result,
    });
}));
// Delete about section
const deleteAboutSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_service_1.AboutSectionService.deleteAboutSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'About section deleted successfully',
        data: result,
    });
}));
exports.AboutSectionController = {
    createAboutSection,
    getAboutSection,
    updateAboutSection,
    updateStatistics,
    updateClientTypes,
    updateMissionPillars,
    deleteAboutSection,
};
