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
exports.MetaSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const metaSection_model_1 = __importDefault(require("./metaSection.model"));
// Create meta section (only one instance allowed)
const createMetaSection = (metaSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if meta section already exists
    const existingMetaSection = yield metaSection_model_1.default.findOne();
    if (existingMetaSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Meta section already exists. You can only update it.');
    }
    const result = yield metaSection_model_1.default.create(metaSectionData);
    return result;
});
// Get meta section (only one instance)
const getMetaSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
// Update meta section
const updateMetaSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
// Update specific components
const updatePlatformIcons = (platformIcons) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndUpdate({}, { platformIcons }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
const updateFeatureButtons = (featureButtons) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndUpdate({}, { featureButtons }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
const updateServiceCards = (serviceCards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndUpdate({}, { serviceCards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
const updatePerformanceStatistics = (performanceStatistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndUpdate({}, { performanceStatistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
// Delete meta section
const deleteMetaSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta section not found');
    }
    return result;
});
exports.MetaSectionService = {
    createMetaSection,
    getMetaSection,
    updateMetaSection,
    updatePlatformIcons,
    updateFeatureButtons,
    updateServiceCards,
    updatePerformanceStatistics,
    deleteMetaSection,
};
