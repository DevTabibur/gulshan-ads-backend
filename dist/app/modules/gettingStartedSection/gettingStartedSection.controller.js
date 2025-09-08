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
exports.GettingStartedSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const gettingStartedSection_service_1 = require("./gettingStartedSection.service");
// Create getting started section
const createGettingStartedSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.createGettingStartedSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Getting started section created successfully',
        data: result,
    });
}));
// Get getting started section
const getGettingStartedSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.getGettingStartedSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Getting started section retrieved successfully',
        data: result,
    });
}));
// Update getting started section
const updateGettingStartedSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.updateGettingStartedSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Getting started section updated successfully',
        data: result,
    });
}));
// Update steps only
const updateSteps = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.updateSteps(req.body.steps);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Steps updated successfully',
        data: result,
    });
}));
// Update CTA buttons only
const updateCTAButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.updateCTAButtons(req.body.ctaButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'CTA buttons updated successfully',
        data: result,
    });
}));
// Delete getting started section
const deleteGettingStartedSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gettingStartedSection_service_1.GettingStartedSectionService.deleteGettingStartedSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Getting started section deleted successfully',
        data: result,
    });
}));
exports.GettingStartedSectionController = {
    createGettingStartedSection,
    getGettingStartedSection,
    updateGettingStartedSection,
    updateSteps,
    updateCTAButtons,
    deleteGettingStartedSection,
};
