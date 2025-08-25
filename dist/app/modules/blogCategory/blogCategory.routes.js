"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryRoute = void 0;
const express_1 = require("express");
const blogCategory_controller_1 = require("./blogCategory.controller");
const router = (0, express_1.Router)();
/**
 * @api {post} /blog-category Create Blog Category
 * @apiName CreateBlogCategory
 * @apiGroup BlogCategory
 *
 * @apiParam {String} name Category name
 * @apiParam {String} [description] Category description
 * @apiParam {String} [status] Category status (active/inactive)
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created blog category data
 *
 * @apiError {Object} error Error message
 */
router.post('/', 
//   zodValidateRequest(BlogCategoryValidation.createBlogCategoryZodSchema),
blogCategory_controller_1.BlogCategoryController.createBlogCategory);
/**
 * @api {get} /blog-category Get All Blog Categories
 * @apiName GetAllBlogCategories
 * @apiGroup BlogCategory
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Array} data Array of blog categories
 *
 * @apiError {Object} error Error message
 */
router.get('/', blogCategory_controller_1.BlogCategoryController.getAllBlogCategories);
/**
 * @api {get} /blog-category/:id Get Blog Category by ID
 * @apiName GetBlogCategoryById
 * @apiGroup BlogCategory
 *
 * @apiParam {String} id Blog category ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Blog category data
 *
 * @apiError {Object} error Error message
 */
router.get('/:id', blogCategory_controller_1.BlogCategoryController.getBlogCategoryById);
/**
 * @api {patch} /blog-category/:id Update Blog Category
 * @apiName UpdateBlogCategory
 * @apiGroup BlogCategory
 *
 * @apiParam {String} id Blog category ID
 * @apiParam {String} [name] Category name
 * @apiParam {String} [description] Category description
 * @apiParam {String} [status] Category status (active/inactive)
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated blog category data
 *
 * @apiError {Object} error Error message
 */
router.patch('/:id', 
//   zodValidateRequest(BlogCategoryValidation.updateBlogCategoryZodSchema),
blogCategory_controller_1.BlogCategoryController.updateBlogCategory);
/**
 * @api {delete} /blog-category/:id Delete Blog Category
 * @apiName DeleteBlogCategory
 * @apiGroup BlogCategory
 *
 * @apiParam {String} id Blog category ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted blog category data
 *
 * @apiError {Object} error Error message
 */
router.delete('/:id', blogCategory_controller_1.BlogCategoryController.deleteBlogCategory);
exports.BlogCategoryRoute = router;
