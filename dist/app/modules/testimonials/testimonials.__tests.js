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
const vitest_1 = require("vitest");
const mongoose_1 = __importDefault(require("mongoose"));
const testimonials_service_1 = require("./testimonials.service");
const testimonials_model_1 = __importDefault(require("./testimonials.model"));
(0, vitest_1.describe)('Testimonial Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear the testimonials collection before each test
        yield testimonials_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clean up after each test
        yield testimonials_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createTestimonial', () => {
        (0, vitest_1.it)('should create a new testimonial successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonialData = {
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'John Doe',
                rating: 5,
                companyName: 'Tech Corp',
                description: 'Great service and amazing support!',
            };
            const result = yield testimonials_service_1.TestimonialService.createTestimonial(testimonialData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.authorUrl).toBe(testimonialData.authorUrl);
            (0, vitest_1.expect)(result.fullName).toBe(testimonialData.fullName);
            (0, vitest_1.expect)(result.rating).toBe(testimonialData.rating);
            (0, vitest_1.expect)(result.companyName).toBe(testimonialData.companyName);
            (0, vitest_1.expect)(result.description).toBe(testimonialData.description);
            (0, vitest_1.expect)(result._id).toBeDefined();
            (0, vitest_1.expect)(result.createdAt).toBeDefined();
            (0, vitest_1.expect)(result.updatedAt).toBeDefined();
        }));
        (0, vitest_1.it)('should create testimonial with minimum rating', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonialData = {
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'Jane Smith',
                rating: 1,
                companyName: 'Startup Inc',
                description: 'Basic service.',
                updatedAt: function (updatedAt) {
                    throw new Error('Function not implemented.');
                },
                createdAt: function (createdAt) {
                    throw new Error('Function not implemented.');
                },
                _id: function (_id) {
                    throw new Error('Function not implemented.');
                }
            };
            const result = yield testimonials_service_1.TestimonialService.createTestimonial(testimonialData);
            (0, vitest_1.expect)(result.rating).toBe(1);
        }));
        (0, vitest_1.it)('should create testimonial with maximum rating', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonialData = {
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'Bob Wilson',
                rating: 5,
                companyName: 'Enterprise Ltd',
                description: 'Excellent service!',
            };
            const result = yield testimonials_service_1.TestimonialService.createTestimonial(testimonialData);
            (0, vitest_1.expect)(result.rating).toBe(5);
        }));
    });
    (0, vitest_1.describe)('getAllTestimonials', () => {
        (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
            // Create test testimonials
            yield testimonials_model_1.default.create([
                {
                    authorUrl: 'https://example.com/author1.jpg',
                    fullName: 'John Doe',
                    rating: 5,
                    companyName: 'Tech Corp',
                    description: 'Great service!',
                },
                {
                    authorUrl: 'https://example.com/author2.jpg',
                    fullName: 'Jane Smith',
                    rating: 4,
                    companyName: 'Startup Inc',
                    description: 'Good experience.',
                },
                {
                    authorUrl: 'https://example.com/author3.jpg',
                    fullName: 'Bob Wilson',
                    rating: 3,
                    companyName: 'Enterprise Ltd',
                    description: 'Average service.',
                },
            ]);
        }));
        (0, vitest_1.it)('should return all testimonials with pagination', () => __awaiter(void 0, void 0, void 0, function* () {
            const filters = {};
            const paginationOptions = { page: 1, limit: 10 };
            const result = yield testimonials_service_1.TestimonialService.getAllTestimonials(filters, paginationOptions);
            (0, vitest_1.expect)(result.data).toHaveLength(3);
            (0, vitest_1.expect)(result.meta.total).toBe(3);
            (0, vitest_1.expect)(result.meta.page).toBe(1);
            (0, vitest_1.expect)(result.meta.limit).toBe(10);
        }));
        (0, vitest_1.it)('should filter testimonials by search term', () => __awaiter(void 0, void 0, void 0, function* () {
            const filters = { searchTerm: 'John' };
            const paginationOptions = { page: 1, limit: 10 };
            const result = yield testimonials_service_1.TestimonialService.getAllTestimonials(filters, paginationOptions);
            (0, vitest_1.expect)(result.data).toHaveLength(1);
            (0, vitest_1.expect)(result.data[0].fullName).toBe('John Doe');
        }));
        (0, vitest_1.it)('should filter testimonials by rating', () => __awaiter(void 0, void 0, void 0, function* () {
            const filters = { rating: 5 };
            const paginationOptions = { page: 1, limit: 10 };
            const result = yield testimonials_service_1.TestimonialService.getAllTestimonials(filters, paginationOptions);
            (0, vitest_1.expect)(result.data).toHaveLength(1);
            (0, vitest_1.expect)(result.data[0].rating).toBe(5);
        }));
        (0, vitest_1.it)('should filter testimonials by company name', () => __awaiter(void 0, void 0, void 0, function* () {
            const filters = { companyName: 'Tech Corp' };
            const paginationOptions = { page: 1, limit: 10 };
            const result = yield testimonials_service_1.TestimonialService.getAllTestimonials(filters, paginationOptions);
            (0, vitest_1.expect)(result.data).toHaveLength(1);
            (0, vitest_1.expect)(result.data[0].companyName).toBe('Tech Corp');
        }));
    });
    (0, vitest_1.describe)('getTestimonialById', () => {
        (0, vitest_1.it)('should return testimonial by ID', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonial = yield testimonials_model_1.default.create({
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'John Doe',
                rating: 5,
                companyName: 'Tech Corp',
                description: 'Great service!',
            });
            const result = yield testimonials_service_1.TestimonialService.getTestimonialById(testimonial._id.toString());
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(testimonial._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.fullName).toBe('John Doe');
        }));
        (0, vitest_1.it)('should throw error for non-existent ID', () => __awaiter(void 0, void 0, void 0, function* () {
            const nonExistentId = new mongoose_1.default.Types.ObjectId().toString();
            yield (0, vitest_1.expect)(testimonials_service_1.TestimonialService.getTestimonialById(nonExistentId)).rejects.toThrow('Testimonial not found');
        }));
    });
    (0, vitest_1.describe)('updateTestimonial', () => {
        (0, vitest_1.it)('should update testimonial successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonial = yield testimonials_model_1.default.create({
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'John Doe',
                rating: 5,
                companyName: 'Tech Corp',
                description: 'Great service!',
            });
            const updateData = {
                fullName: 'John Updated',
                rating: 4,
                description: 'Updated description',
            };
            const result = yield testimonials_service_1.TestimonialService.updateTestimonial(testimonial._id.toString(), updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.fullName).toBe('John Updated');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.rating).toBe(4);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.description).toBe('Updated description');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.authorUrl).toBe('https://example.com/author.jpg'); // Should remain unchanged
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.companyName).toBe('Tech Corp'); // Should remain unchanged
        }));
        (0, vitest_1.it)('should throw error for non-existent ID', () => __awaiter(void 0, void 0, void 0, function* () {
            const nonExistentId = new mongoose_1.default.Types.ObjectId().toString();
            const updateData = { fullName: 'Updated Name' };
            yield (0, vitest_1.expect)(testimonials_service_1.TestimonialService.updateTestimonial(nonExistentId, updateData)).rejects.toThrow('Testimonial not found');
        }));
    });
    (0, vitest_1.describe)('deleteTestimonial', () => {
        (0, vitest_1.it)('should delete testimonial successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const testimonial = yield testimonials_model_1.default.create({
                authorUrl: 'https://example.com/author.jpg',
                fullName: 'John Doe',
                rating: 5,
                companyName: 'Tech Corp',
                description: 'Great service!',
            });
            const result = yield testimonials_service_1.TestimonialService.deleteTestimonial(testimonial._id.toString());
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(testimonial._id.toString());
            // Verify it's actually deleted
            const deletedTestimonial = yield testimonials_model_1.default.findById(testimonial._id);
            (0, vitest_1.expect)(deletedTestimonial).toBeNull();
        }));
        (0, vitest_1.it)('should throw error for non-existent ID', () => __awaiter(void 0, void 0, void 0, function* () {
            const nonExistentId = new mongoose_1.default.Types.ObjectId().toString();
            yield (0, vitest_1.expect)(testimonials_service_1.TestimonialService.deleteTestimonial(nonExistentId)).rejects.toThrow('Testimonial not found');
        }));
    });
});
