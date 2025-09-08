import { Router } from 'express';
import { BlogController } from './blog.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { BlogValidation } from './blog.validation';
import uploadMiddleware from '../../middlewares/fileUploadAndConvertToWebP';

const router = Router();

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
router.post(
  '/',
  // zodValidateRequest(BlogValidation.createBlogZodSchema),
  uploadMiddleware,
  BlogController.createBlog,
);

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
router.get('/', BlogController.getAllBlogs);

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
router.get('/published', BlogController.getPublishedBlogs);

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
router.get('/category/:categoryId', BlogController.getBlogsByCategory);

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
router.get('/slug/:slug', BlogController.getBlogBySlug);
 
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
router.get('/:id', BlogController.getBlogById);

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
router.patch(
  '/:id',
  // zodValidateRequest(BlogValidation.updateBlogZodSchema),
  BlogController.updateBlog,
);

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
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoute = router;
