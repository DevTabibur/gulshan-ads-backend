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
exports.GulshanAdsMetaManagementSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const gulshanAdsMetaManagementSection_service_1 = require("./gulshanAdsMetaManagementSection.service");
// Create gulshan ads meta management section
const createGulshanAdsMetaManagementSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Gulshan Ads meta management section created successfully',
        data: result,
    });
}));
// Get gulshan ads meta management section
const getGulshanAdsMetaManagementSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Gulshan Ads meta management section retrieved successfully',
        data: result,
    });
}));
// Update gulshan ads meta management section
const updateGulshanAdsMetaManagementSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updateGulshanAdsMetaManagementSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Gulshan Ads meta management section updated successfully',
        data: result,
    });
}));
// Update commission tag only
const updateCommissionTag = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updateCommissionTag(req.body.commissionTag);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Commission tag updated successfully',
        data: result,
    });
}));
// Update payment feature only
const updatePaymentFeature = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updatePaymentFeature(req.body.paymentFeature);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Payment feature updated successfully',
        data: result,
    });
}));
// Update paperwork feature only
const updatePaperworkFeature = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updatePaperworkFeature(req.body.paperworkFeature);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Paperwork feature updated successfully',
        data: result,
    });
}));
// Delete gulshan ads meta management section
const deleteGulshanAdsMetaManagementSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Gulshan Ads meta management section deleted successfully',
        data: result,
    });
}));
exports.GulshanAdsMetaManagementSectionController = {
    createGulshanAdsMetaManagementSection,
    getGulshanAdsMetaManagementSection,
    updateGulshanAdsMetaManagementSection,
    updateCommissionTag,
    updatePaymentFeature,
    updatePaperworkFeature,
    deleteGulshanAdsMetaManagementSection,
};
