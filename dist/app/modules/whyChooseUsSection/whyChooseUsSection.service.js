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
exports.WhyChooseUsSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const whyChooseUsSection_model_1 = __importDefault(require("./whyChooseUsSection.model"));
// Create why choose us section (only one instance allowed)
const createWhyChooseUsSection = (whyChooseUsSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if why choose us section already exists
    const existingWhyChooseUsSection = yield whyChooseUsSection_model_1.default.findOne();
    if (existingWhyChooseUsSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Why choose us section already exists. You can only update it.');
    }
    const result = yield whyChooseUsSection_model_1.default.create(whyChooseUsSectionData);
    return result;
});
// Get why choose us section (only one instance)
const getWhyChooseUsSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Why choose us section not found');
    }
    return result;
});
// Update why choose us section
const updateWhyChooseUsSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Why choose us section not found');
    }
    return result;
});
// Update specific components
const updateBenefits = (benefits) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_model_1.default.findOneAndUpdate({}, { benefits }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Why choose us section not found');
    }
    return result;
});
// Delete why choose us section
const deleteWhyChooseUsSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield whyChooseUsSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Why choose us section not found');
    }
    return result;
});
exports.WhyChooseUsSectionService = {
    createWhyChooseUsSection,
    getWhyChooseUsSection,
    updateWhyChooseUsSection,
    updateBenefits,
    deleteWhyChooseUsSection,
};
