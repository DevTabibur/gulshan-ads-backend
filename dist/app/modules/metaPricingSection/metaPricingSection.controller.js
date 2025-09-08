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
exports.MetaPricingSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const metaPricingSection_service_1 = require("./metaPricingSection.service");
// Create meta pricing section
const createMetaPricingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_service_1.MetaPricingSectionService.createMetaPricingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Meta pricing section created successfully',
        data: result,
    });
}));
// Get meta pricing section
const getMetaPricingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_service_1.MetaPricingSectionService.getMetaPricingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta pricing section retrieved successfully',
        data: result,
    });
}));
// Update meta pricing section
const updateMetaPricingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_service_1.MetaPricingSectionService.updateMetaPricingSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta pricing section updated successfully',
        data: result,
    });
}));
// Update plans only
const updatePlans = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_service_1.MetaPricingSectionService.updatePlans(req.body.plans);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Pricing plans updated successfully',
        data: result,
    });
}));
// Delete meta pricing section
const deleteMetaPricingSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_service_1.MetaPricingSectionService.deleteMetaPricingSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta pricing section deleted successfully',
        data: result,
    });
}));
exports.MetaPricingSectionController = {
    createMetaPricingSection,
    getMetaPricingSection,
    updateMetaPricingSection,
    updatePlans,
    deleteMetaPricingSection,
};
