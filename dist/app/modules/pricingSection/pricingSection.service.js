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
exports.PricingSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pricingSection_model_1 = __importDefault(require("./pricingSection.model"));
// Create pricing section (only one instance allowed)
const createPricingSection = (pricingSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if pricing section already exists
    const existingPricingSection = yield pricingSection_model_1.default.findOne();
    if (existingPricingSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Pricing section already exists. You can only update it.');
    }
    const result = yield pricingSection_model_1.default.create(pricingSectionData);
    return result;
});
// Get pricing section (only one instance)
const getPricingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pricingSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Pricing section not found');
    }
    return result;
});
// Update pricing section
const updatePricingSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pricingSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Pricing section not found');
    }
    return result;
});
// Update specific components
const updatePlans = (plans) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pricingSection_model_1.default.findOneAndUpdate({}, { plans }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Pricing section not found');
    }
    return result;
});
// Delete pricing section
const deletePricingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pricingSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Pricing section not found');
    }
    return result;
});
exports.PricingSectionService = {
    createPricingSection,
    getPricingSection,
    updatePricingSection,
    updatePlans,
    deletePricingSection,
};
