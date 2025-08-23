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
exports.AdvertisersStorySectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const advertisersStorySection_model_1 = __importDefault(require("./advertisersStorySection.model"));
// Create advertisers story section (only one instance allowed)
const createAdvertisersStorySection = (advertisersStorySectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if advertisers story section already exists
    const existingAdvertisersStorySection = yield advertisersStorySection_model_1.default.findOne();
    if (existingAdvertisersStorySection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Advertisers story section already exists. You can only update it.');
    }
    const result = yield advertisersStorySection_model_1.default.create(advertisersStorySectionData);
    return result;
});
// Get advertisers story section (only one instance)
const getAdvertisersStorySection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers story section not found');
    }
    return result;
});
// Update advertisers story section
const updateAdvertisersStorySection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers story section not found');
    }
    return result;
});
// Update specific components
const updateTestimonials = (testimonials) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_model_1.default.findOneAndUpdate({}, { testimonials }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers story section not found');
    }
    return result;
});
// Delete advertisers story section
const deleteAdvertisersStorySection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers story section not found');
    }
    return result;
});
exports.AdvertisersStorySectionService = {
    createAdvertisersStorySection,
    getAdvertisersStorySection,
    updateAdvertisersStorySection,
    updateTestimonials,
    deleteAdvertisersStorySection,
};
