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
exports.AdvertisersStorySectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const advertisersStorySection_service_1 = require("./advertisersStorySection.service");
// Create advertisers story section
const createAdvertisersStorySection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.createAdvertisersStorySection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Advertisers story section created successfully',
        data: result,
    });
}));
// Get advertisers story section
const getAdvertisersStorySection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.getAdvertisersStorySection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers story section retrieved successfully',
        data: result,
    });
}));
// Update advertisers story section
const updateAdvertisersStorySection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.updateAdvertisersStorySection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers story section updated successfully',
        data: result,
    });
}));
// Update testimonials only
const updateTestimonials = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.updateTestimonials(req.body.testimonials);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonials updated successfully',
        data: result,
    });
}));
// Delete advertisers story section
const deleteAdvertisersStorySection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.deleteAdvertisersStorySection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers story section deleted successfully',
        data: result,
    });
}));
exports.AdvertisersStorySectionController = {
    createAdvertisersStorySection,
    getAdvertisersStorySection,
    updateAdvertisersStorySection,
    updateTestimonials,
    deleteAdvertisersStorySection,
};
