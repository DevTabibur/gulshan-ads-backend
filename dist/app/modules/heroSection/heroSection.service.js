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
exports.HeroSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const heroSection_model_1 = __importDefault(require("./heroSection.model"));
// Create hero section (only one instance allowed)
const createHeroSection = (heroSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if hero section already exists
    const existingHeroSection = yield heroSection_model_1.default.findOne();
    if (existingHeroSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Hero section already exists. You can only update it.');
    }
    const result = yield heroSection_model_1.default.create(heroSectionData);
    return result;
});
// Get hero section (only one instance)
const getHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Hero section not found');
    }
    return result;
});
// Update hero section
const updateHeroSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Hero section not found');
    }
    return result;
});
// Delete hero section
const deleteHeroSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield heroSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Hero section not found');
    }
    return result;
});
exports.HeroSectionService = {
    createHeroSection,
    getHeroSection,
    updateHeroSection,
    deleteHeroSection,
};
