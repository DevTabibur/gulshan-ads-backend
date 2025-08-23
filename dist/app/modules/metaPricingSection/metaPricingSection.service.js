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
exports.MetaPricingSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const metaPricingSection_model_1 = __importDefault(require("./metaPricingSection.model"));
// Create meta pricing section (only one instance allowed)
const createMetaPricingSection = (metaPricingSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if meta pricing section already exists
    const existingMetaPricingSection = yield metaPricingSection_model_1.default.findOne();
    if (existingMetaPricingSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Meta pricing section already exists. You can only update it.');
    }
    const result = yield metaPricingSection_model_1.default.create(metaPricingSectionData);
    return result;
});
// Get meta pricing section (only one instance)
const getMetaPricingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta pricing section not found');
    }
    return result;
});
// Update meta pricing section
const updateMetaPricingSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta pricing section not found');
    }
    return result;
});
// Update specific components
const updatePlans = (plans) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_model_1.default.findOneAndUpdate({}, { plans }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta pricing section not found');
    }
    return result;
});
// Delete meta pricing section
const deleteMetaPricingSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaPricingSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Meta pricing section not found');
    }
    return result;
});
exports.MetaPricingSectionService = {
    createMetaPricingSection,
    getMetaPricingSection,
    updateMetaPricingSection,
    updatePlans,
    deleteMetaPricingSection,
};
