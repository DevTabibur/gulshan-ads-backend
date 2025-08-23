import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import mongoose from 'mongoose';
import { TestimonialService } from './testimonials.service';
import { ITestimonial } from './testimonials.interface';
import TestimonialModel from './testimonials.model';

describe('Testimonial Service', () => {
  beforeEach(async () => {
    // Clear the testimonials collection before each test
    await TestimonialModel.deleteMany({});
  });

  afterEach(async () => {
    // Clean up after each test
    await TestimonialModel.deleteMany({});
  });

  describe('createTestimonial', () => {
    it('should create a new testimonial successfully', async () => {
      const testimonialData = {
        authorUrl: 'https://example.com/author.jpg',
        fullName: 'John Doe',
        rating: 5,
        companyName: 'Tech Corp',
        description: 'Great service and amazing support!',
      };

      const result = await TestimonialService.createTestimonial(testimonialData as any);

      expect(result).toBeDefined();
      expect(result.authorUrl).toBe(testimonialData.authorUrl);
      expect(result.fullName).toBe(testimonialData.fullName);
      expect(result.rating).toBe(testimonialData.rating);
      expect(result.companyName).toBe(testimonialData.companyName);
      expect(result.description).toBe(testimonialData.description);
      expect(result._id).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.updatedAt).toBeDefined();
    });

    it('should create testimonial with minimum rating', async () => {
      const testimonialData: ITestimonial = {
        authorUrl: 'https://example.com/author.jpg',
        fullName: 'Jane Smith',
        rating: 1,
        companyName: 'Startup Inc',
        description: 'Basic service.',
        updatedAt: function (updatedAt: any): unknown {
          throw new Error('Function not implemented.');
        },
        createdAt: function (createdAt: any): unknown {
          throw new Error('Function not implemented.');
        },
        _id: function (_id: any): unknown {
          throw new Error('Function not implemented.');
        }
      };

      const result = await TestimonialService.createTestimonial(testimonialData);

      expect(result.rating).toBe(1);
    });

    it('should create testimonial with maximum rating', async () => {
      const testimonialData = {
        authorUrl: 'https://example.com/author.jpg',
        fullName: 'Bob Wilson',
        rating: 5,
        companyName: 'Enterprise Ltd',
        description: 'Excellent service!',
      };

      const result = await TestimonialService.createTestimonial(testimonialData as any);

      expect(result.rating).toBe(5);
    });
  });

  describe('getAllTestimonials', () => {
    beforeEach(async () => {
      // Create test testimonials
      await TestimonialModel.create([
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
    });

    it('should return all testimonials with pagination', async () => {
      const filters = {};
      const paginationOptions = { page: 1, limit: 10 };

      const result = await TestimonialService.getAllTestimonials(filters, paginationOptions);

      expect(result.data).toHaveLength(3);
      expect(result.meta.total).toBe(3);
      expect(result.meta.page).toBe(1);
      expect(result.meta.limit).toBe(10);
    });

    it('should filter testimonials by search term', async () => {
      const filters = { searchTerm: 'John' };
      const paginationOptions = { page: 1, limit: 10 };

      const result = await TestimonialService.getAllTestimonials(filters, paginationOptions);

      expect(result.data).toHaveLength(1);
      expect(result.data[0].fullName).toBe('John Doe');
    });

    it('should filter testimonials by rating', async () => {
      const filters = { rating: 5 };
      const paginationOptions = { page: 1, limit: 10 };

      const result = await TestimonialService.getAllTestimonials(filters, paginationOptions);

      expect(result.data).toHaveLength(1);
      expect(result.data[0].rating).toBe(5);
    });

    it('should filter testimonials by company name', async () => {
      const filters = { companyName: 'Tech Corp' };
      const paginationOptions = { page: 1, limit: 10 };

      const result = await TestimonialService.getAllTestimonials(filters, paginationOptions);

      expect(result.data).toHaveLength(1);
      expect(result.data[0].companyName).toBe('Tech Corp');
    });
  });

  describe('getTestimonialById', () => {
    it('should return testimonial by ID', async () => {
      const testimonial = await TestimonialModel.create({
        authorUrl: 'https://example.com/author.jpg',
        fullName: 'John Doe',
        rating: 5,
        companyName: 'Tech Corp',
        description: 'Great service!',
      });

      const result = await TestimonialService.getTestimonialById(testimonial._id.toString());

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(testimonial._id.toString());
      expect(result?.fullName).toBe('John Doe');
    });

    it('should throw error for non-existent ID', async () => {
      const nonExistentId = new mongoose.Types.ObjectId().toString();

      await expect(TestimonialService.getTestimonialById(nonExistentId)).rejects.toThrow('Testimonial not found');
    });
  });

  describe('updateTestimonial', () => {
    it('should update testimonial successfully', async () => {
      const testimonial = await TestimonialModel.create({
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

      const result = await TestimonialService.updateTestimonial(testimonial._id.toString(), updateData);

      expect(result).toBeDefined();
      expect(result?.fullName).toBe('John Updated');
      expect(result?.rating).toBe(4);
      expect(result?.description).toBe('Updated description');
      expect(result?.authorUrl).toBe('https://example.com/author.jpg'); // Should remain unchanged
      expect(result?.companyName).toBe('Tech Corp'); // Should remain unchanged
    });

    it('should throw error for non-existent ID', async () => {
      const nonExistentId = new mongoose.Types.ObjectId().toString();
      const updateData = { fullName: 'Updated Name' };

      await expect(TestimonialService.updateTestimonial(nonExistentId, updateData)).rejects.toThrow('Testimonial not found');
    });
  });

  describe('deleteTestimonial', () => {
    it('should delete testimonial successfully', async () => {
      const testimonial = await TestimonialModel.create({
        authorUrl: 'https://example.com/author.jpg',
        fullName: 'John Doe',
        rating: 5,
        companyName: 'Tech Corp',
        description: 'Great service!',
      });

      const result = await TestimonialService.deleteTestimonial(testimonial._id.toString());

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(testimonial._id.toString());

      // Verify it's actually deleted
      const deletedTestimonial = await TestimonialModel.findById(testimonial._id);
      expect(deletedTestimonial).toBeNull();
    });

    it('should throw error for non-existent ID', async () => {
      const nonExistentId = new mongoose.Types.ObjectId().toString();

      await expect(TestimonialService.deleteTestimonial(nonExistentId)).rejects.toThrow('Testimonial not found');
    });
  });
});
