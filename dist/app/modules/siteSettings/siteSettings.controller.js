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
exports.SiteSettingsController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const siteSettings_service_1 = require("./siteSettings.service");
// Create Site Settings
const createSiteSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.createSiteSettings(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Site Settings created successfully',
        data: result,
    });
}));
// Get Site Settings
const getSiteSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.getSiteSettings();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Site Settings retrieved successfully',
        data: result,
    });
}));
// Update Site Settings
const updateSiteSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateSiteSettings(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Site Settings updated successfully',
        data: result,
    });
}));
// Update Basic Site Info
const updateBasicSiteInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateBasicSiteInfo(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Basic Site Info updated successfully',
        data: result,
    });
}));
// Update Contact Information
const updateContactInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateContactInfo(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Contact Information updated successfully',
        data: result,
    });
}));
// Update Social Media Links
const updateSocialMedia = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateSocialMedia(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Social Media Links updated successfully',
        data: result,
    });
}));
// Update SEO Settings
const updateSeoSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateSeoSettings(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'SEO Settings updated successfully',
        data: result,
    });
}));
// Update Footer Settings
const updateFooterSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateFooterSettings(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Footer Settings updated successfully',
        data: result,
    });
}));
// Update Business Information
const updateBusinessInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateBusinessInfo(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Business Information updated successfully',
        data: result,
    });
}));
// Update Legal Information
const updateLegalInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateLegalInfo(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Legal Information updated successfully',
        data: result,
    });
}));
// Update Analytics & Tracking
const updateAnalytics = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateAnalytics(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Analytics & Tracking updated successfully',
        data: result,
    });
}));
// Update Feature Flags
const updateFeatureFlags = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateFeatureFlags(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Feature Flags updated successfully',
        data: result,
    });
}));
// Update Maintenance Mode
const updateMaintenanceMode = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.updateMaintenanceMode(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Maintenance Mode updated successfully',
        data: result,
    });
}));
// Delete Site Settings
const deleteSiteSettings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield siteSettings_service_1.SiteSettingsService.deleteSiteSettings();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Site Settings deleted successfully',
        data: result,
    });
}));
exports.SiteSettingsController = {
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
