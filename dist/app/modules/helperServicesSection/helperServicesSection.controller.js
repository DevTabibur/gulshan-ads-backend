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
exports.HelperServicesSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const helperServicesSection_service_1 = require("./helperServicesSection.service");
// Create helper services section
const createHelperServicesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_service_1.HelperServicesSectionService.createHelperServicesSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Helper services section created successfully',
        data: result,
    });
}));
// Get helper services section
const getHelperServicesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_service_1.HelperServicesSectionService.getHelperServicesSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Helper services section retrieved successfully',
        data: result,
    });
}));
// Update helper services section
const updateHelperServicesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_service_1.HelperServicesSectionService.updateHelperServicesSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Helper services section updated successfully',
        data: result,
    });
}));
// Update services only
const updateServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_service_1.HelperServicesSectionService.updateServices(req.body.services);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Services updated successfully',
        data: result,
    });
}));
// Delete helper services section
const deleteHelperServicesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_service_1.HelperServicesSectionService.deleteHelperServicesSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Helper services section deleted successfully',
        data: result,
    });
}));
exports.HelperServicesSectionController = {
    createHelperServicesSection,
    getHelperServicesSection,
    updateHelperServicesSection,
    updateServices,
    deleteHelperServicesSection,
};
