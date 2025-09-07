import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ITestimonial } from './testimonials.interface';
import TestimonialModel from './testimonials.model';
import paginationHelper from '../../helpers/paginationHelper';

// Create testimonial
const createTestimonial = async (testimonialData: ITestimonial,): Promise<ITestimonial> => {
  const result = await TestimonialModel.create(testimonialData);
  return result;
};

// Get all testimonials with pagination and filtering
const getAllTestimonials = async (filters: any, paginationOptions: any) => {
  const { searchTerm, ...filtersData } = filters;
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

  const { page, limit, skip, sortBy, sortOrder } = paginationHelper(paginationOptions);

  const sortConditions: { [key: string]: 1 | -1 } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  }

  const result = await TestimonialModel.find(whereConditions)
    .sort(sortConditions)
    .skip(skip ?? 0)
    .limit(limit ?? 0);

  const total = await TestimonialModel.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get testimonial by ID
const getTestimonialById = async (id: string): Promise<ITestimonial | null> => {
  const result = await TestimonialModel.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }
  return result;
};

// Update testimonial
const updateTestimonial = async (id: string, updateData: Partial<ITestimonial>): Promise<ITestimonial | null> => {
  const result = await TestimonialModel.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }
  return result;
};

// Delete testimonial
const deleteTestimonial = async (id: string): Promise<ITestimonial | null> => {
  const result = await TestimonialModel.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testimonial not found');
  }
  return result;
};

export const TestimonialService = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
