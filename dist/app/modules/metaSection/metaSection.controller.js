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
exports.MetaSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const metaSection_service_1 = require("./metaSection.service");
// Create meta section
const createMetaSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.createMetaSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Meta section created successfully',
        data: result,
    });
}));
// Get meta section
const getMetaSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.getMetaSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta section retrieved successfully',
        data: result,
    });
}));
// Update meta section
const updateMetaSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.updateMetaSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta section updated successfully',
        data: result,
    });
}));
// Update platform icons only
const updatePlatformIcons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.updatePlatformIcons(req.body.platformIcons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Platform icons updated successfully',
        data: result,
    });
}));
// Update feature buttons only
const updateFeatureButtons = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.updateFeatureButtons(req.body.featureButtons);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Feature buttons updated successfully',
        data: result,
    });
}));
// Update service cards only
const updateServiceCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.updateServiceCards(req.body.serviceCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Service cards updated successfully',
        data: result,
    });
}));
// Update performance statistics only
const updatePerformanceStatistics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.updatePerformanceStatistics(req.body.performanceStatistics);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Performance statistics updated successfully',
        data: result,
    });
}));
// Delete meta section
const deleteMetaSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_service_1.MetaSectionService.deleteMetaSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta section deleted successfully',
        data: result,
    });
}));
exports.MetaSectionController = {
    createMetaSection,
    getMetaSection,
    updateMetaSection,
    updatePlatformIcons,
    updateFeatureButtons,
    updateServiceCards,
    updatePerformanceStatistics,
    deleteMetaSection,
};
