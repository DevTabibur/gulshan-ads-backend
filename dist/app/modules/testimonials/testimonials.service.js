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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const testimonials_model_1 = require("./testimonials.model");
const paginationHelper_1 = require("../../helpers/paginationHelper");
// Create testimonial
const createTestimonial = (testimonialData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonials_model_1.TestimonialModel.create(testimonialData);
    return result;
});
// Get all testimonials with pagination and filtering
const getAllTestimonials = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: [
                {
                    fullName: {
                        $regex: searchTerm,
                        $options: 'i',
                    },
                },
                {
                    companyName: {
                        $regex: searchTerm,
                        $options: 'i',
                    },
                },
                {
                    description: {
                        $regex: searchTerm,
                        $options: 'i',
                    },
                },
            ],
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }
    const result = yield testimonials_model_1.TestimonialModel.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield testimonials_model_1.TestimonialModel.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// Get testimonial by ID
const getTestimonialById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonials_model_1.TestimonialModel.findById(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Testimonial not found');
    }
    return result;
});
// Update testimonial
const updateTestimonial = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonials_model_1.TestimonialModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Testimonial not found');
    }
    return result;
});
// Delete testimonial
const deleteTestimonial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonials_model_1.TestimonialModel.findByIdAndDelete(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Testimonial not found');
    }
    return result;
});
exports.TestimonialService = {
    createTestimonial,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
};
