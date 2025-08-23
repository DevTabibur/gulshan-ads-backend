import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { HeroSectionService } from './heroSection.service';
import { IHeroSection } from './heroSection.interface';
import HeroSectionModel from './heroSection.model';

describe('Hero Section Service', () => {
  beforeEach(async () => {
    // Clear the hero section collection before each test
    await HeroSectionModel.deleteMany({});
  });

  afterEach(async () => {
    // Clean up after each test
    await HeroSectionModel.deleteMany({});
  });

  describe('createHeroSection', () => {
    it('should create a new hero section successfully', async () => {
      const heroSectionData = {
        title: 'Promote your business in Meta, TikTok and Telegram',
        subtitle: 'Find clients on booming platforms with Gulshan Ads — easy payment and ad launch in one interface',
      };

      const result = await HeroSectionService.createHeroSection(heroSectionData as any);

      expect(result).toBeDefined();
      expect(result.title).toBe(heroSectionData.title);
      expect(result.subtitle).toBe(heroSectionData.subtitle);
      expect(result._id).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.updatedAt).toBeDefined();
    });

    it('should throw error when trying to create second hero section', async () => {
      const heroSectionData = {
        title: 'First Hero Section',
        subtitle: 'First subtitle',
      };

      // Create first hero section
      await HeroSectionService.createHeroSection(heroSectionData as any);

      // Try to create second hero section
      const secondHeroSectionData = {
        title: 'Second Hero Section',
        subtitle: 'Second subtitle',
      };

      await expect(HeroSectionService.createHeroSection(secondHeroSectionData as any)).rejects.toThrow('Hero section already exists. You can only update it.');
    });

    it('should create hero section with minimum length strings', async () => {
      const heroSectionData = {
        title: 'A',
        subtitle: 'B',
      };

      const result = await HeroSectionService.createHeroSection(heroSectionData as any);

      expect(result.title).toBe('A');
      expect(result.subtitle).toBe('B');
    });
  });

  describe('getHeroSection', () => {
    it('should return hero section when it exists', async () => {
      const heroSectionData = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
      };

      const createdHeroSection = await HeroSectionModel.create(heroSectionData);

      const result = await HeroSectionService.getHeroSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdHeroSection._id.toString());
      expect(result?.title).toBe('Test Title');
      expect(result?.subtitle).toBe('Test Subtitle');
    });

    it('should throw error when hero section does not exist', async () => {
      await expect(HeroSectionService.getHeroSection()).rejects.toThrow('Hero section not found');
    });
  });

  describe('updateHeroSection', () => {
    it('should update hero section successfully', async () => {
      const heroSectionData = {
        title: 'Original Title',
        subtitle: 'Original Subtitle',
      };

      await HeroSectionModel.create(heroSectionData);

      const updateData = {
        title: 'Updated Title',
        subtitle: 'Updated Subtitle',
      };

      const result = await HeroSectionService.updateHeroSection(updateData);

      expect(result).toBeDefined();
      expect(result?.title).toBe('Updated Title');
      expect(result?.subtitle).toBe('Updated Subtitle');
    });

    it('should update only title when only title is provided', async () => {
      const heroSectionData = {
        title: 'Original Title',
        subtitle: 'Original Subtitle',
      };

      await HeroSectionModel.create(heroSectionData);

      const updateData = {
        title: 'Updated Title Only',
      };

      const result = await HeroSectionService.updateHeroSection(updateData);

      expect(result).toBeDefined();
      expect(result?.title).toBe('Updated Title Only');
      expect(result?.subtitle).toBe('Original Subtitle'); // Should remain unchanged
    });

    it('should update only subtitle when only subtitle is provided', async () => {
      const heroSectionData = {
        title: 'Original Title',
        subtitle: 'Original Subtitle',
      };

      await HeroSectionModel.create(heroSectionData);

      const updateData = {
        subtitle: 'Updated Subtitle Only',
      };

      const result = await HeroSectionService.updateHeroSection(updateData);

      expect(result).toBeDefined();
      expect(result?.title).toBe('Original Title'); // Should remain unchanged
      expect(result?.subtitle).toBe('Updated Subtitle Only');
    });

    it('should throw error when hero section does not exist', async () => {
      const updateData = {
        title: 'Updated Title',
      };

      await expect(HeroSectionService.updateHeroSection(updateData)).rejects.toThrow('Hero section not found');
    });
  });

  describe('deleteHeroSection', () => {
    it('should delete hero section successfully', async () => {
      const heroSectionData = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
      };

      const createdHeroSection = await HeroSectionModel.create(heroSectionData);

      const result = await HeroSectionService.deleteHeroSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdHeroSection._id.toString());

      // Verify it's actually deleted
      const deletedHeroSection = await HeroSectionModel.findById(createdHeroSection._id);
      expect(deletedHeroSection).toBeNull();
    });

    it('should throw error when hero section does not exist', async () => {
      await expect(HeroSectionService.deleteHeroSection()).rejects.toThrow('Hero section not found');
    });
  });

  describe('Integration Tests', () => {
    it('should handle full CRUD lifecycle', async () => {
      // Create
      const createData = {
        title: 'Initial Title',
        subtitle: 'Initial Subtitle',
      };

      const created = await HeroSectionService.createHeroSection(createData as any);
      expect(created.title).toBe('Initial Title');

      // Read
      const retrieved = await HeroSectionService.getHeroSection();
      expect(retrieved?.title).toBe('Initial Title');

      // Update
      const updateData = {
        title: 'Updated Title',
        subtitle: 'Updated Subtitle',
      };

      const updated = await HeroSectionService.updateHeroSection(updateData);
      expect(updated?.title).toBe('Updated Title');

      // Delete
      const deleted = await HeroSectionService.deleteHeroSection();
      expect(deleted?.title).toBe('Updated Title');

      // Verify deletion
      await expect(HeroSectionService.getHeroSection()).rejects.toThrow('Hero section not found');
    });
  });
});
