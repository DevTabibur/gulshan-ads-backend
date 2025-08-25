"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const fileUploadAndConvertToWebP_1 = __importDefault(require("../../middlewares/fileUploadAndConvertToWebP"));
const router = (0, express_1.Router)();
/**
 * @api {post} /blog Create Blog
 * @apiName CreateBlog
 * @apiGroup Blog
 *
 * @apiParam {String} title Blog title
 * @apiParam {String} [excerpt] Blog excerpt
 * @apiParam {String} content Blog content
 * @apiParam {String} [status] Blog status (draft/published)
 * @apiParam {String} category Category ID
 * @apiParam {String} [featuredImage] Featured image URL
 * @apiParam {Array} [tags] Array of tags
 * @apiParam {String} slug Blog slug
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created blog data
 *
 * @apiError {Object} error Error message
 */
router.post('/', 
// zodValidateRequest(BlogValidation.createBlogZodSchema),
fileUploadAndConvertToWebP_1.default, blog_controller_1.BlogController.createBlog);
/**
 * @api {get} /blog Get All Blogs
 * @apiName GetAllBlogs
 * @apiGroup Blog
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Array} data Array of blogs
 *
 * @apiError {Object} error Error message
 */
router.get('/', blog_controller_1.BlogController.getAllBlogs);
/**
 * @api {get} /blog/published Get Published Blogs
 * @apiName GetPublishedBlogs
 * @apiGroup Blog
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Array} data Array of published blogs
 *
 * @apiError {Object} error Error message
 */
router.get('/published', blog_controller_1.BlogController.getPublishedBlogs);
/**
 * @api {get} /blog/category/:categoryId Get Blogs by Category
 * @apiName GetBlogsByCategory
 * @apiGroup Blog
 *
 * @apiParam {String} categoryId Category ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Array} data Array of blogs in category
 *
 * @apiError {Object} error Error message
 */
router.get('/category/:categoryId', blog_controller_1.BlogController.getBlogsByCategory);
/**
 * @api {get} /blog/slug/:slug Get Blog by Slug
 * @apiName GetBlogBySlug
 * @apiGroup Blog
 *
 * @apiParam {String} slug Blog slug
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Blog data
 *
 * @apiError {Object} error Error message
 */
router.get('/slug/:slug', blog_controller_1.BlogController.getBlogBySlug);
/**
 * @api {get} /blog/:id Get Blog by ID
 * @apiName GetBlogById
 * @apiGroup Blog
 *
 * @apiParam {String} id Blog ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Blog data
 *
 * @apiError {Object} error Error message
 */
router.get('/:id', blog_controller_1.BlogController.getBlogById);
/**
 * @api {patch} /blog/:id Update Blog
 * @apiName UpdateBlog
 * @apiGroup Blog
 *
 * @apiParam {String} id Blog ID
 * @apiParam {String} [title] Blog title
 * @apiParam {String} [excerpt] Blog excerpt
 * @apiParam {String} [content] Blog content
 * @apiParam {String} [status] Blog status (draft/published)
 * @apiParam {String} [category] Category ID
 * @apiParam {String} [featuredImage] Featured image URL
 * @apiParam {Array} [tags] Array of tags
 * @apiParam {String} [slug] Blog slug
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated blog data
 *
 * @apiError {Object} error Error message
 */
router.patch('/:id', 
// zodValidateRequest(BlogValidation.updateBlogZodSchema),
blog_controller_1.BlogController.updateBlog);
/**
 * @api {delete} /blog/:id Delete Blog
 * @apiName DeleteBlog
 * @apiGroup Blog
 *
 * @apiParam {String} id Blog ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted blog data
 *
 * @apiError {Object} error Error message
 */
router.delete('/:id', blog_controller_1.BlogController.deleteBlog);
exports.BlogRoute = router;
