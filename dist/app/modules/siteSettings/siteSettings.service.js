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
exports.SiteSettingsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const siteSettings_model_1 = __importDefault(require("./siteSettings.model"));
// Create Site Settings (only one instance allowed)
const createSiteSettings = (siteSettingsData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if Site Settings already exists
    const existingSiteSettings = yield siteSettings_model_1.default.findOne();
    if (existingSiteSettings) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Site Settings already exists. You can only update it.');
    }
    const result = yield siteSettings_model_1.default.create(siteSettingsData);
    return result;
});
// Get Site Settings (only one instance)
const getSiteSettings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Site Settings
const updateSiteSettings = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Basic Site Info
const updateBasicSiteInfo = (basicInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, basicInfo, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Contact Information
const updateContactInfo = (contactInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, { contactInfo }, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Social Media Links
const updateSocialMedia = (socialMedia) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, { socialMedia }, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update SEO Settings
const updateSeoSettings = (seoSettings) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, { seoSettings }, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Footer Settings
const updateFooterSettings = (footerSettings) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, { footerSettings }, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Business Information
const updateBusinessInfo = (businessInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, businessInfo, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Legal Information
const updateLegalInfo = (legalInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, legalInfo, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Analytics & Tracking
const updateAnalytics = (analytics) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, analytics, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Feature Flags
const updateFeatureFlags = (featureFlags) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, featureFlags, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Update Maintenance Mode
const updateMaintenanceMode = (maintenance) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndUpdate({}, maintenance, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
// Delete Site Settings
const deleteSiteSettings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Site Settings not found');
    }
    return result;
});
exports.SiteSettingsService = {
    createSiteSettings,
    getSiteSettings,
    updateSiteSettings,
    updateBasicSiteInfo,
    updateContactInfo,
    updateSocialMedia,
    updateSeoSettings,
    updateFooterSettings,
    updateBusinessInfo,
    updateLegalInfo,
    updateAnalytics,
    updateFeatureFlags,
    updateMaintenanceMode,
    deleteSiteSettings,
};
