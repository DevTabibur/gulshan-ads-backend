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
exports.BlogCategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const blogCategory_model_1 = __importDefault(require("./blogCategory.model"));
// Create blog category
const createBlogCategory = (blogCategoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.create(blogCategoryData);
    return result;
});
// Get all blog categories
const getAllBlogCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.find().sort({ createdAt: -1 });
    return result;
});
// Get blog category by ID
const getBlogCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findById(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog category not found');
    }
    return result;
});
// Update blog category
const updateBlogCategory = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog category not found');
    }
    return result;
});
// Delete blog category
const deleteBlogCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog category not found');
    }
    return result;
});
exports.BlogCategoryService = {
    createBlogCategory,
    getAllBlogCategories,
    getBlogCategoryById,
    updateBlogCategory,
    deleteBlogCategory,
};
