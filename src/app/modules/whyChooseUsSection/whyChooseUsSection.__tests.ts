import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { WhyChooseUsSectionService } from './whyChooseUsSection.service';
import WhyChooseUsSectionModel from './whyChooseUsSection.model';

describe('Why Choose Us Section Service', () => {
  beforeEach(async () => {
    await WhyChooseUsSectionModel.deleteMany({});
  });

  afterEach(async () => {
    await WhyChooseUsSectionModel.deleteMany({});
  });

  describe('createWhyChooseUsSection', () => {
    it('should create a new why choose us section successfully', async () => {
      const whyChooseUsSectionData = {
        title: 'Why Advertisers Choose Gulshan Ads',
        subtitle: 'Join thousands of successful Advertisers who\'ve transformed their business with our proven advertising solutions.',
        benefits: [
          {
            icon: 'target',
            title: 'Precision Targeting',
            description: 'Reach your ideal clients with laser-focused targeting across all major platforms',
            iconColor: '#10B981',
          },
          {
            icon: 'zap',
            title: 'Lightning Fast Setup',
            description: 'Get your campaigns running in under 24 hours with our streamlined process',
            iconColor: '#3B82F6',
          },
          {
            icon: 'shield',
            title: 'Expert Management',
            description: 'Our certified specialists handle everything while you focus on your craft',
            iconColor: '#8B5CF6',
          },
          {
            icon: 'bar-chart',
            title: 'Real-time Analytics',
            description: 'Track performance with detailed insights and optimize for maximum results',
            iconColor: '#EC4899',
          },
        ],
      };

      const result = await WhyChooseUsSectionService.createWhyChooseUsSection(whyChooseUsSectionData as any);

      expect(result).toBeDefined();
      expect(result.title).toBe(whyChooseUsSectionData.title);
      expect(result.subtitle).toBe(whyChooseUsSectionData.subtitle);
      expect(result.benefits).toHaveLength(4);
      expect(result.benefits[0].title).toBe('Precision Targeting');
      expect(result.benefits[1].iconColor).toBe('#3B82F6');
    });

    it('should throw error when trying to create second why choose us section', async () => {
      const whyChooseUsSectionData = {
        title: 'First Why Choose Us Section',
        subtitle: 'First subtitle',
        benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
      };

      await WhyChooseUsSectionService.createWhyChooseUsSection(whyChooseUsSectionData as any);

      const secondWhyChooseUsSectionData = {
        title: 'Second Why Choose Us Section',
        subtitle: 'Second subtitle',
        benefits: [{ icon: 'test2', title: 'Test 2', description: 'Test 2', iconColor: '#000000' }],
      };

      await expect(WhyChooseUsSectionService.createWhyChooseUsSection(secondWhyChooseUsSectionData as any)).rejects.toThrow('Why choose us section already exists. You can only update it.');
    });
  });

  describe('getWhyChooseUsSection', () => {
    it('should return why choose us section when it exists', async () => {
      const whyChooseUsSectionData = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
      };

      const createdWhyChooseUsSection = await WhyChooseUsSectionModel.create(whyChooseUsSectionData);
      const result = await WhyChooseUsSectionService.getWhyChooseUsSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdWhyChooseUsSection._id.toString());
      expect(result?.title).toBe('Test Title');
      expect(result?.subtitle).toBe('Test Subtitle');
    });

    it('should throw error when why choose us section does not exist', async () => {
      await expect(WhyChooseUsSectionService.getWhyChooseUsSection()).rejects.toThrow('Why choose us section not found');
    });
  });

  describe('updateWhyChooseUsSection', () => {
    it('should update why choose us section successfully', async () => {
      const whyChooseUsSectionData = {
        title: 'Original Title',
        subtitle: 'Original Subtitle',
        benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
      };

      await WhyChooseUsSectionModel.create(whyChooseUsSectionData);

      const updateData = {
        title: 'Updated Title',
        subtitle: 'Updated Subtitle',
      };

      const result = await WhyChooseUsSectionService.updateWhyChooseUsSection(updateData);

      expect(result).toBeDefined();
      expect(result?.title).toBe('Updated Title');
      expect(result?.subtitle).toBe('Updated Subtitle');
    });
  });

  describe('updateBenefits', () => {
    it('should update benefits successfully', async () => {
      const whyChooseUsSectionData = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
      };

      await WhyChooseUsSectionModel.create(whyChooseUsSectionData);

      const newBenefits = [
        {
          icon: 'target',
          title: 'Precision Targeting',
          description: 'Reach your ideal clients with laser-focused targeting',
          iconColor: '#10B981',
        },
        {
          icon: 'zap',
          title: 'Lightning Fast Setup',
          description: 'Get your campaigns running in under 24 hours',
          iconColor: '#3B82F6',
        },
      ];

      const result = await WhyChooseUsSectionService.updateBenefits(newBenefits);

      expect(result).toBeDefined();
      expect(result?.benefits).toHaveLength(2);
      expect(result?.benefits[0].title).toBe('Precision Targeting');
      expect(result?.benefits[1].iconColor).toBe('#3B82F6');
    });
  });

  describe('deleteWhyChooseUsSection', () => {
    it('should delete why choose us section successfully', async () => {
      const whyChooseUsSectionData = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
      };

      const createdWhyChooseUsSection = await WhyChooseUsSectionModel.create(whyChooseUsSectionData);
      const result = await WhyChooseUsSectionService.deleteWhyChooseUsSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdWhyChooseUsSection._id.toString());

      const deletedWhyChooseUsSection = await WhyChooseUsSectionModel.findById(createdWhyChooseUsSection._id);
      expect(deletedWhyChooseUsSection).toBeNull();
    });

    it('should throw error when why choose us section does not exist', async () => {
      await expect(WhyChooseUsSectionService.deleteWhyChooseUsSection()).rejects.toThrow('Why choose us section not found');
    });
  });
});
