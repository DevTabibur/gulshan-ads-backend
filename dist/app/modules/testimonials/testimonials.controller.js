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
exports.TestimonialController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const testimonials_service_1 = require("./testimonials.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
// Create testimonial
const createTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonials_service_1.TestimonialService.createTestimonial(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Testimonial created successfully',
        data: result,
    });
}));
// Get all testimonials
const getAllTestimonials = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, ['searchTerm', 'fullName', 'companyName', 'rating']);
    const paginationOptions = (0, pick_1.default)(req.query, ['page', 'limit', 'sortBy', 'sortOrder'] // explicitly list pagination fields
    );
    const result = yield testimonials_service_1.TestimonialService.getAllTestimonials(filters, paginationOptions);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonials retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
}));
// Get testimonial by ID
const getTestimonialById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield testimonials_service_1.TestimonialService.getTestimonialById(id);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial retrieved successfully',
        data: result,
    });
}));
// Update testimonial
const updateTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield testimonials_service_1.TestimonialService.updateTestimonial(id, req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial updated successfully',
        data: result,
    });
}));
// Delete testimonial
const deleteTestimonial = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield testimonials_service_1.TestimonialService.deleteTestimonial(id);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial deleted successfully',
        data: result,
    });
}));
exports.TestimonialController = {
    createTestimonial,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
};
