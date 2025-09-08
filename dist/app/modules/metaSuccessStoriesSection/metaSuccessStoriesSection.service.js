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
exports.MetaSuccessStoriesSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const metaSuccessStoriesSection_model_1 = __importDefault(require("./metaSuccessStoriesSection.model"));
// Create meta success stories section (only one instance allowed)
const createMetaSuccessStoriesSection = (metaSuccessStoriesSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if meta success stories section already exists
    const existingMetaSuccessStoriesSection = yield metaSuccessStoriesSection_model_1.default.findOne();
    if (existingMetaSuccessStoriesSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Meta success stories section already exists. You can only update it.');
    }
    const result = yield metaSuccessStoriesSection_model_1.default.create(metaSuccessStoriesSectionData);
    return result;
});
// Get meta success stories section (only one instance)
const getMetaSuccessStoriesSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta success stories section not found');
    }
    return result;
});
// Update meta success stories section
const updateMetaSuccessStoriesSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta success stories section not found');
    }
    return result;
});
// Update specific components
const updateTestimonials = (testimonials) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_model_1.default.findOneAndUpdate({}, { testimonials }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta success stories section not found');
    }
    return result;
});
// Delete meta success stories section
const deleteMetaSuccessStoriesSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta success stories section not found');
    }
    return result;
});
exports.MetaSuccessStoriesSectionService = {
    createMetaSuccessStoriesSection,
    getMetaSuccessStoriesSection,
    updateMetaSuccessStoriesSection,
    updateTestimonials,
    deleteMetaSuccessStoriesSection,
};
