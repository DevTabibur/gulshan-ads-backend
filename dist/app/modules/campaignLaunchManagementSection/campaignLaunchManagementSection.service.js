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
exports.CampaignLaunchManagementSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const campaignLaunchManagementSection_model_1 = __importDefault(require("./campaignLaunchManagementSection.model"));
// Create campaign launch management section (only one instance allowed)
const createCampaignLaunchManagementSection = (campaignLaunchManagementSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if campaign launch management section already exists
    const existingCampaignLaunchManagementSection = yield campaignLaunchManagementSection_model_1.default.findOne();
    if (existingCampaignLaunchManagementSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Campaign launch management section already exists. You can only update it.');
    }
    const result = yield campaignLaunchManagementSection_model_1.default.create(campaignLaunchManagementSectionData);
    return result;
});
// Get campaign launch management section (only one instance)
const getCampaignLaunchManagementSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield campaignLaunchManagementSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Campaign launch management section not found');
    }
    return result;
});
// Update campaign launch management section
const updateCampaignLaunchManagementSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield campaignLaunchManagementSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Campaign launch management section not found');
    }
    return result;
});
// Update specific components
const updateCards = (cards) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield campaignLaunchManagementSection_model_1.default.findOneAndUpdate({}, { cards }, { new: true, runValidators: true });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Campaign launch management section not found');
    }
    return result;
});
// Delete campaign launch management section
const deleteCampaignLaunchManagementSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield campaignLaunchManagementSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Campaign launch management section not found');
    }
    return result;
});
exports.CampaignLaunchManagementSectionService = {
    createCampaignLaunchManagementSection,
    getCampaignLaunchManagementSection,
    updateCampaignLaunchManagementSection,
    updateCards,
    deleteCampaignLaunchManagementSection,
};
