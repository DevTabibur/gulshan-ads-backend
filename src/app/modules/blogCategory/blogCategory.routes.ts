import { Router } from 'express';
import { BlogCategoryController } from './blogCategory.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { BlogCategoryValidation } from './blogCategory.validation';

const router = Router();

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
router.post(
  '/',
//   zodValidateRequest(BlogCategoryValidation.createBlogCategoryZodSchema),
  BlogCategoryController.createBlogCategory,
);

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
router.get('/', BlogCategoryController.getAllBlogCategories);


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
router.get('/:id', BlogCategoryController.getBlogCategoryById);

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
router.patch(
  '/:id',
//   zodValidateRequest(BlogCategoryValidation.updateBlogCategoryZodSchema),
  BlogCategoryController.updateBlogCategory,
);

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
router.delete('/:id', BlogCategoryController.deleteBlogCategory);

export const BlogCategoryRoute = router;
