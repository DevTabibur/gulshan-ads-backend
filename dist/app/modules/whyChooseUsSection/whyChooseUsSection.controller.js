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
exports.WhyChooseUsSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const whyChooseUsSection_service_1 = require("./whyChooseUsSection.service");
// Create why choose us section
const createWhyChooseUsSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.createWhyChooseUsSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Why choose us section created successfully',
        data: result,
    });
}));
// Get why choose us section
const getWhyChooseUsSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.getWhyChooseUsSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Why choose us section retrieved successfully',
        data: result,
    });
}));
// Update why choose us section
const updateWhyChooseUsSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.updateWhyChooseUsSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Why choose us section updated successfully',
        data: result,
    });
}));
// Update benefits only
const updateBenefits = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.updateBenefits(req.body.benefits);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Benefits updated successfully',
        data: result,
    });
}));
// Delete why choose us section
const deleteWhyChooseUsSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.deleteWhyChooseUsSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Why choose us section deleted successfully',
        data: result,
    });
}));
exports.WhyChooseUsSectionController = {
    createWhyChooseUsSection,
    getWhyChooseUsSection,
    updateWhyChooseUsSection,
    updateBenefits,
    deleteWhyChooseUsSection,
};
