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
exports.AdvertisersCtaHeroSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const advertisersCtaHeroSection_model_1 = __importDefault(require("./advertisersCtaHeroSection.model"));
// Create advertisers CTA hero section (only one instance allowed)
const createAdvertisersCtaHeroSection = (advertisersCtaHeroSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if advertisers CTA hero section already exists
    const existingAdvertisersCtaHeroSection = yield advertisersCtaHeroSection_model_1.default.findOne();
    if (existingAdvertisersCtaHeroSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Advertisers CTA hero section already exists. You can only update it.');
    }
    const result = yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
    return result;
});
// Get advertisers CTA hero section (only one instance)
const getAdvertisersCtaHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers CTA hero section not found');
    }
    return result;
});
// Update advertisers CTA hero section
const updateAdvertisersCtaHeroSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers CTA hero section not found');
    }
    return result;
});
// Update specific components
const updateCTAButtons = (ctaButtons) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_model_1.default.findOneAndUpdate({}, { ctaButtons }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers CTA hero section not found');
    }
    return result;
});
const updateBenefits = (benefits) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_model_1.default.findOneAndUpdate({}, { benefits }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers CTA hero section not found');
    }
    return result;
});
// Delete advertisers CTA hero section
const deleteAdvertisersCtaHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersCtaHeroSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Advertisers CTA hero section not found');
    }
    return result;
});
exports.AdvertisersCtaHeroSectionService = {
    createAdvertisersCtaHeroSection,
    getAdvertisersCtaHeroSection,
    updateAdvertisersCtaHeroSection,
    updateCTAButtons,
    updateBenefits,
    deleteAdvertisersCtaHeroSection,
};
