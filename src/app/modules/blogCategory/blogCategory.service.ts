import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBlogCategory } from './blogCategory.interface';
import BlogCategoryModel from './blogCategory.model';


// Create blog category
const createBlogCategory = async (blogCategoryData: IBlogCategory): Promise<IBlogCategory> => {
    const result = await BlogCategoryModel.create(blogCategoryData);
    return result;
};

// Get all blog categories
const getAllBlogCategories = async (): Promise<IBlogCategory[]> => {
    const result = await BlogCategoryModel.find().sort({ createdAt: -1 });
    return result;
};

// Get blog category by ID
const getBlogCategoryById = async (id: string): Promise<IBlogCategory | null> => {
    const result = await BlogCategoryModel.findById(id);
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Blog category not found');
    }
    return result;
};

// Update blog category
const updateBlogCategory = async (id: string, updateData: Partial<IBlogCategory>): Promise<IBlogCategory | null> => {
    const result = await BlogCategoryModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Blog category not found');
    }
    return result;
};

// Delete blog category
const deleteBlogCategory = async (id: string): Promise<IBlogCategory | null> => {
    const result = await BlogCategoryModel.findByIdAndDelete(id);
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Blog category not found');
    }
    return result;
};



export const BlogCategoryService = {
    createBlogCategory,
    getAllBlogCategories,
    getBlogCategoryById,
    updateBlogCategory,
    deleteBlogCategory,
};
