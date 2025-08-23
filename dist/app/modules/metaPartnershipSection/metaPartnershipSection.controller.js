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
exports.MetaPartnershipSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const metaPartnershipSection_service_1 = require("./metaPartnershipSection.service");
// Create meta partnership section
const createMetaPartnershipSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_service_1.MetaPartnershipSectionService.createMetaPartnershipSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Meta partnership section created successfully',
        data: result,
    });
}));
// Get meta partnership section
const getMetaPartnershipSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_service_1.MetaPartnershipSectionService.getMetaPartnershipSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta partnership section retrieved successfully',
        data: result,
    });
}));
// Update meta partnership section
const updateMetaPartnershipSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_service_1.MetaPartnershipSectionService.updateMetaPartnershipSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta partnership section updated successfully',
        data: result,
    });
}));
// Update feature cards only
const updateFeatureCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_service_1.MetaPartnershipSectionService.updateFeatureCards(req.body.featureCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Feature cards updated successfully',
        data: result,
    });
}));
// Delete meta partnership section
const deleteMetaPartnershipSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_service_1.MetaPartnershipSectionService.deleteMetaPartnershipSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta partnership section deleted successfully',
        data: result,
    });
}));
exports.MetaPartnershipSectionController = {
    createMetaPartnershipSection,
    getMetaPartnershipSection,
    updateMetaPartnershipSection,
    updateFeatureCards,
    deleteMetaPartnershipSection,
};
