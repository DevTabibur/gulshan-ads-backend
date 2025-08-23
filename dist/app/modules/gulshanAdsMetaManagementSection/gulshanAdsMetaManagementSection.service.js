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
exports.GulshanAdsMetaManagementSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const gulshanAdsMetaManagementSection_model_1 = __importDefault(require("./gulshanAdsMetaManagementSection.model"));
// Create gulshan ads meta management section (only one instance allowed)
const createGulshanAdsMetaManagementSection = (gulshanAdsMetaManagementSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if gulshan ads meta management section already exists
    const existingGulshanAdsMetaManagementSection = yield gulshanAdsMetaManagementSection_model_1.default.findOne();
    if (existingGulshanAdsMetaManagementSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Gulshan Ads meta management section already exists. You can only update it.');
    }
    const result = yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
    return result;
});
// Get gulshan ads meta management section (only one instance)
const getGulshanAdsMetaManagementSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
// Update gulshan ads meta management section
const updateGulshanAdsMetaManagementSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
// Update specific components
const updateCommissionTag = (commissionTag) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOneAndUpdate({}, { commissionTag }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
const updatePaymentFeature = (paymentFeature) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOneAndUpdate({}, { paymentFeature }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
const updatePaperworkFeature = (paperworkFeature) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOneAndUpdate({}, { paperworkFeature }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
// Delete gulshan ads meta management section
const deleteGulshanAdsMetaManagementSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gulshanAdsMetaManagementSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Gulshan Ads meta management section not found');
    }
    return result;
});
exports.GulshanAdsMetaManagementSectionService = {
    createGulshanAdsMetaManagementSection,
    getGulshanAdsMetaManagementSection,
    updateGulshanAdsMetaManagementSection,
    updateCommissionTag,
    updatePaymentFeature,
    updatePaperworkFeature,
    deleteGulshanAdsMetaManagementSection,
};
