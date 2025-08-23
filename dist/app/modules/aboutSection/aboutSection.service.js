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
exports.AboutSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const aboutSection_model_1 = __importDefault(require("./aboutSection.model"));
// Create about section (only one instance allowed)
const createAboutSection = (aboutSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if about section already exists
    const existingAboutSection = yield aboutSection_model_1.default.findOne();
    if (existingAboutSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'About section already exists. You can only update it.');
    }
    const result = yield aboutSection_model_1.default.create(aboutSectionData);
    return result;
});
// Get about section (only one instance)
const getAboutSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
// Update about section
const updateAboutSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
// Update specific components
const updateStatistics = (statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOneAndUpdate({}, { statistics }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
const updateClientTypes = (clientTypes) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOneAndUpdate({}, { clientTypes }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
const updateMissionPillars = (missionPillars) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOneAndUpdate({}, { missionPillars }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
// Delete about section
const deleteAboutSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'About section not found');
    }
    return result;
});
exports.AboutSectionService = {
    createAboutSection,
    getAboutSection,
    updateAboutSection,
    updateStatistics,
    updateClientTypes,
    updateMissionPillars,
    deleteAboutSection,
};
