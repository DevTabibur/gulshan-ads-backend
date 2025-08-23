import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AdvertisersHeroSectionService } from './advertisersHeroSection.service';
import AdvertisersHeroSectionModel from './advertisersHeroSection.model';

describe('Advertisers Hero Section Service', () => {
  beforeEach(async () => {
    await AdvertisersHeroSectionModel.deleteMany({});
  });

  afterEach(async () => {
    await AdvertisersHeroSectionModel.deleteMany({});
  });

  describe('createAdvertisersHeroSection', () => {
    it('should create a new advertisers hero section successfully', async () => {
      const advertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'Scale Your Freelance Business With Smart Ads',
        mainDescription: 'Stop chasing clients. Let them find you with our proven advertising strategies that have helped 10,000+ Advertisers grow their business by 300% on average.',
        ctaButtons: [
          {
            text: 'Start Growing Today →',
            link: '/register',
            type: 'primary',
          },
          {
            text: 'View Case Studies',
            link: '/case-studies',
            type: 'secondary',
          },
        ],
        rating: {
          score: '4.9/5',
          reviewCount: '2,500+ Advertisers',
        },
        campaignPerformance: {
          title: 'Campaign Performance',
          percentageChange: '+47% this month',
          metrics: [
            {
              value: '$12.4K',
              label: 'Revenue',
            },
            {
              value: '156',
              label: 'New Leads',
            },
          ],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [
          {
            value: '200+',
            label: 'Active Advertisers',
            icon: 'users',
            iconColor: '#10B981',
          },
          {
            value: '300%',
            label: 'Average ROI',
            icon: 'chart-up',
            iconColor: '#3B82F6',
          },
          {
            value: '$2M+',
            label: 'Revenue Generated',
            icon: 'dollar-sign',
            iconColor: '#F59E0B',
          },
          {
            value: '12/6',
            label: 'Support Available',
            icon: 'clock',
            iconColor: '#EF4444',
          },
        ],
      };

      const result = await AdvertisersHeroSectionService.createAdvertisersHeroSection(advertisersHeroSectionData as any);

      expect(result).toBeDefined();
      expect(result.mainTitle).toBe(advertisersHeroSectionData.mainTitle);
      expect(result.ctaButtons).toHaveLength(2);
      expect(result.campaignPerformance.metrics).toHaveLength(2);
      expect(result.bottomStatistics).toHaveLength(4);
    });

    it('should throw error when trying to create second advertisers hero section', async () => {
      const advertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'First Advertisers Hero Section',
        mainDescription: 'First description',
        ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
        rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
        campaignPerformance: {
          title: 'Campaign Performance',
          percentageChange: '+47% this month',
          metrics: [{ value: '$12.4K', label: 'Revenue' }],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
      };

      await AdvertisersHeroSectionService.createAdvertisersHeroSection(advertisersHeroSectionData as any);

      const secondAdvertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies 2',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'Second Advertisers Hero Section',
        mainDescription: 'Second description',
        ctaButtons: [{ text: 'Test 2', link: '/test2', type: 'primary' }],
        rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
        campaignPerformance: {
          title: 'Campaign Performance 2',
          percentageChange: '+47% this month',
          metrics: [{ value: '$12.4K', label: 'Revenue' }],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
      };

      await expect(AdvertisersHeroSectionService.createAdvertisersHeroSection(secondAdvertisersHeroSectionData as any)).rejects.toThrow('Advertisers hero section already exists. You can only update it.');
    });
  });

  describe('getAdvertisersHeroSection', () => {
    it('should return advertisers hero section when it exists', async () => {
      const advertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'Test Title',
        mainDescription: 'Test Description',
        ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
        rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
        campaignPerformance: {
          title: 'Campaign Performance',
          percentageChange: '+47% this month',
          metrics: [{ value: '$12.4K', label: 'Revenue' }],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
      };

      const createdAdvertisersHeroSection = await AdvertisersHeroSectionModel.create(advertisersHeroSectionData);
      const result = await AdvertisersHeroSectionService.getAdvertisersHeroSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdAdvertisersHeroSection._id.toString());
      expect(result?.mainTitle).toBe('Test Title');
    });

    it('should throw error when advertisers hero section does not exist', async () => {
      await expect(AdvertisersHeroSectionService.getAdvertisersHeroSection()).rejects.toThrow('Advertisers hero section not found');
    });
  });

  describe('updateAdvertisersHeroSection', () => {
    it('should update advertisers hero section successfully', async () => {
      const advertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'Original Title',
        mainDescription: 'Original Description',
        ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
        rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
        campaignPerformance: {
          title: 'Campaign Performance',
          percentageChange: '+47% this month',
          metrics: [{ value: '$12.4K', label: 'Revenue' }],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
      };

      await AdvertisersHeroSectionModel.create(advertisersHeroSectionData);

      const updateData = {
        mainTitle: 'Updated Title',
        mainDescription: 'Updated Description',
      };

      const result = await AdvertisersHeroSectionService.updateAdvertisersHeroSection(updateData);

      expect(result).toBeDefined();
      expect(result?.mainTitle).toBe('Updated Title');
      expect(result?.mainDescription).toBe('Updated Description');
    });
  });

  describe('deleteAdvertisersHeroSection', () => {
    it('should delete advertisers hero section successfully', async () => {
      const advertisersHeroSectionData = {
        topPill: {
          text: 'For Advertisers & Agencies',
          icon: 'briefcase',
          color: '#10B981',
        },
        mainTitle: 'Test Title',
        mainDescription: 'Test Description',
        ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
        rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
        campaignPerformance: {
          title: 'Campaign Performance',
          percentageChange: '+47% this month',
          metrics: [{ value: '$12.4K', label: 'Revenue' }],
          adPlatform: 'Facebook Ads',
          adSpend: '$4.2K',
        },
        bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
      };

      const createdAdvertisersHeroSection = await AdvertisersHeroSectionModel.create(advertisersHeroSectionData);
      const result = await AdvertisersHeroSectionService.deleteAdvertisersHeroSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdAdvertisersHeroSection._id.toString());

      const deletedAdvertisersHeroSection = await AdvertisersHeroSectionModel.findById(createdAdvertisersHeroSection._id);
      expect(deletedAdvertisersHeroSection).toBeNull();
    });

    it('should throw error when advertisers hero section does not exist', async () => {
      await expect(AdvertisersHeroSectionService.deleteAdvertisersHeroSection()).rejects.toThrow('Advertisers hero section not found');
    });
  });
});
