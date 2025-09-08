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
exports.MetaSuccessStoriesSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const metaSuccessStoriesSection_service_1 = require("./metaSuccessStoriesSection.service");
// Create meta success stories section
const createMetaSuccessStoriesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_service_1.MetaSuccessStoriesSectionService.createMetaSuccessStoriesSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Meta success stories section created successfully',
        data: result,
    });
}));
// Get meta success stories section
const getMetaSuccessStoriesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_service_1.MetaSuccessStoriesSectionService.getMetaSuccessStoriesSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta success stories section retrieved successfully',
        data: result,
    });
}));
// Update meta success stories section
const updateMetaSuccessStoriesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_service_1.MetaSuccessStoriesSectionService.updateMetaSuccessStoriesSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta success stories section updated successfully',
        data: result,
    });
}));
// Update testimonials only
const updateTestimonials = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_service_1.MetaSuccessStoriesSectionService.updateTestimonials(req.body.testimonials);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonials updated successfully',
        data: result,
    });
}));
// Delete meta success stories section
const deleteMetaSuccessStoriesSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield metaSuccessStoriesSection_service_1.MetaSuccessStoriesSectionService.deleteMetaSuccessStoriesSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Meta success stories section deleted successfully',
        data: result,
    });
}));
exports.MetaSuccessStoriesSectionController = {
    createMetaSuccessStoriesSection,
    getMetaSuccessStoriesSection,
    updateMetaSuccessStoriesSection,
    updateTestimonials,
    deleteMetaSuccessStoriesSection,
};
