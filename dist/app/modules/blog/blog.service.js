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
exports.BlogService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const blog_model_1 = __importDefault(require("./blog.model"));
// Create blog
const createBlog = (blogData, blogFeaturedImage) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log("blog data", blogData);
    // Generate slug from title
    if (blogData.title) {
        blogData.slug = blogData.title
            .toString()
            .toLowerCase()
            .trim()
            .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word chars with hyphens
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    }
    const blog = {
        title: blogData === null || blogData === void 0 ? void 0 : blogData.title,
        slug: blogData === null || blogData === void 0 ? void 0 : blogData.slug,
        excerpt: blogData === null || blogData === void 0 ? void 0 : blogData.excerpt,
        content: blogData === null || blogData === void 0 ? void 0 : blogData.content,
        status: blogData === null || blogData === void 0 ? void 0 : blogData.status,
        category: blogData === null || blogData === void 0 ? void 0 : blogData.category,
        featuredImage: ((_b = (_a = blogFeaturedImage[0]) === null || _a === void 0 ? void 0 : _a.filename) === null || _b === void 0 ? void 0 : _b.replace(/\.(jpg|jpeg|png|pneg)$/i, '.webp')) || "",
        tags: blogData === null || blogData === void 0 ? void 0 : blogData.tags,
    };
    console.log("blog", blog);
    const result = yield blog_model_1.default.create(blog);
    return result;
});
// Get all blogs
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.find()
        .populate('category', 'name slug')
        .sort({ createdAt: -1 });
    return result;
});
// Get blog by ID
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findById(id).populate('category', 'name slug');
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return result;
});
// Update blog
const updateBlog = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    }).populate('category', 'name slug');
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return result;
});
// Delete blog
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return result;
});
// Get blogs by category
const getBlogsByCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.find({ category: categoryId })
        .populate('category', 'name slug')
        .sort({ createdAt: -1 });
    return result;
});
// Get published blogs only
const getPublishedBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.find({ status: 'published' })
        .populate('category', 'name slug')
        .sort({ createdAt: -1 });
    return result;
});
// Get blog by slug
const getBlogBySlug = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.default.findOne({ slug }).populate('category', 'name slug');
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return result;
});
exports.BlogService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    getBlogBySlug, // Add this
    updateBlog,
    deleteBlog,
    getBlogsByCategory,
    getPublishedBlogs,
};
