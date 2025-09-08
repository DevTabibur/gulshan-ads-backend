import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBlog } from './blog.interface';
import BlogModel from './blog.model';

// Create blog
const createBlog = async (blogData: IBlog, blogFeaturedImage: Express.Multer.File[]): Promise<IBlog> => {
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
    title: blogData?.title,
    slug: blogData?.slug,
    content: blogData?.content,
    status: blogData?.status,
    category: blogData?.category,
    featuredImage: blogFeaturedImage[0]?.filename?.replace(/\.(jpg|jpeg|png|pneg)$/i, '.webp') || "",
    tags: blogData?.tags,
  }

  console.log("blog", blog)

  const result = await BlogModel.create(blog)
  return result

  
};

// Get all blogs
const getAllBlogs = async (): Promise<IBlog[]> => {
  const result = await BlogModel.find()
    .populate('category', 'name slug')
    .sort({ createdAt: -1 });
  return result;
};

// Get blog by ID
const getBlogById = async (id: string): Promise<IBlog | null> => {
  const result = await BlogModel.findById(id).populate('category', 'name slug');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

// Update blog
const updateBlog = async (id: string, updateData: Partial<IBlog>): Promise<IBlog | null> => {
  const result = await BlogModel.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).populate('category', 'name slug');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

// Delete blog
const deleteBlog = async (id: string): Promise<IBlog | null> => {
  const result = await BlogModel.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

// Get blogs by category
const getBlogsByCategory = async (categoryId: string): Promise<IBlog[]> => {
  const result = await BlogModel.find({ category: categoryId })
    .populate('category', 'name slug')
    .sort({ createdAt: -1 });
  return result;
};

// Get published blogs only
const getPublishedBlogs = async (): Promise<IBlog[]> => {
  const result = await BlogModel.find({ status: 'published' })
    .populate('category', 'name slug')
    .sort({ createdAt: -1 });
  return result;
};

// Get blog by slug
const getBlogBySlug = async (slug: string): Promise<IBlog | null> => {
  const result = await BlogModel.findOne({ slug }).populate('category', 'name slug');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug, // Add this
  updateBlog,
  deleteBlog,
  getBlogsByCategory,
  getPublishedBlogs,
};
