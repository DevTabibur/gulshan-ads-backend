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
exports.TrustSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const trustSection_model_1 = __importDefault(require("./trustSection.model"));
// Create trust section (only one instance allowed)
const createTrustSection = (trustSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if trust section already exists
    const existingTrustSection = yield trustSection_model_1.default.findOne();
    if (existingTrustSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Trust section already exists. You can only update it.');
    }
    const result = yield trustSection_model_1.default.create(trustSectionData);
    return result;
});
// Get trust section (only one instance)
const getTrustSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
// Update trust section
const updateTrustSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
// Update specific components
const updateTrustedCompanies = (trustedCompanies) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOneAndUpdate({}, { trustedCompanies }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
const updateStatistics = (statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOneAndUpdate({}, { statistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
const updateFeaturedTestimonial = (featuredTestimonial) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOneAndUpdate({}, { featuredTestimonial }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
// Delete trust section
const deleteTrustSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield trustSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Trust section not found');
    }
    return result;
});
exports.TrustSectionService = {
    createTrustSection,
    getTrustSection,
    updateTrustSection,
    updateTrustedCompanies,
    updateStatistics,
    updateFeaturedTestimonial,
    deleteTrustSection,
};
