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
exports.HelperServicesSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const helperServicesSection_model_1 = __importDefault(require("./helperServicesSection.model"));
// Create helper services section (only one instance allowed)
const createHelperServicesSection = (helperServicesSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if helper services section already exists
    const existingHelperServicesSection = yield helperServicesSection_model_1.default.findOne();
    if (existingHelperServicesSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Helper services section already exists. You can only update it.');
    }
    const result = yield helperServicesSection_model_1.default.create(helperServicesSectionData);
    return result;
});
// Get helper services section (only one instance)
const getHelperServicesSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Helper services section not found');
    }
    return result;
});
// Update helper services section
const updateHelperServicesSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Helper services section not found');
    }
    return result;
});
// Update specific components
const updateServices = (services) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_model_1.default.findOneAndUpdate({}, { services }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Helper services section not found');
    }
    return result;
});
// Delete helper services section
const deleteHelperServicesSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield helperServicesSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Helper services section not found');
    }
    return result;
});
exports.HelperServicesSectionService = {
    createHelperServicesSection,
    getHelperServicesSection,
    updateHelperServicesSection,
    updateServices,
    deleteHelperServicesSection,
};
