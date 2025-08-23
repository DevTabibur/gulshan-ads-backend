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
exports.MetaPartnershipSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const metaPartnershipSection_model_1 = __importDefault(require("./metaPartnershipSection.model"));
// Create meta partnership section (only one instance allowed)
const createMetaPartnershipSection = (metaPartnershipSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if meta partnership section already exists
    const existingMetaPartnershipSection = yield metaPartnershipSection_model_1.default.findOne();
    if (existingMetaPartnershipSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Meta partnership section already exists. You can only update it.');
    }
    const result = yield metaPartnershipSection_model_1.default.create(metaPartnershipSectionData);
    return result;
});
// Get meta partnership section (only one instance)
const getMetaPartnershipSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta partnership section not found');
    }
    return result;
});
// Update meta partnership section
const updateMetaPartnershipSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta partnership section not found');
    }
    return result;
});
// Update specific components
const updateFeatureCards = (featureCards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_model_1.default.findOneAndUpdate({}, { featureCards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta partnership section not found');
    }
    return result;
});
// Delete meta partnership section
const deleteMetaPartnershipSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPartnershipSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta partnership section not found');
    }
    return result;
});
exports.MetaPartnershipSectionService = {
    createMetaPartnershipSection,
    getMetaPartnershipSection,
    updateMetaPartnershipSection,
    updateFeatureCards,
    deleteMetaPartnershipSection,
};
