"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { AdvertisingSectionService } from './advertisingSection.service';
// import AdvertisingSectionModel from './advertisingSection.model';
// describe('Advertising Section Service', () => {
//   beforeEach(async () => {
//     await AdvertisingSectionModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await AdvertisingSectionModel.deleteMany({});
//   });
//   describe('createAdvertisingSection', () => {
//     it('should create a new advertising section successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Multi-Platform Advertising for Maximum Impact',
//         subtitle: 'Reach your audience across Meta, TikTok, and Telegram with our unified advertising platform. Advanced targeting meets simplified management for unprecedented results.',
//         keyFeatures: [
//           {
//             text: 'Minimum budget - $100',
//             icon: 'clock',
//             color: '#F59E0B',
//           },
//           {
//             text: 'Zero commission fees',
//             icon: 'checkmark',
//             color: '#10B981',
//           },
//           {
//             text: 'Global currency support',
//             icon: 'globe',
//             color: '#3B82F6',
//           },
//         ],
//         serviceCards: [
//           {
//             title: 'Multi-Platform Targeting',
//             description: 'Run synchronized campaigns across Meta, TikTok, and Telegram with unified audience targeting and budget optimization.',
//             icon: 'checkmark',
//             iconColor: '#10B981',
//           },
//           {
//             title: 'AI-Powered Optimization',
//             description: 'Our intelligent algorithms automatically optimize your ad spend across platforms to maximize ROI and reach your target audience effectively.',
//             icon: 'target',
//             iconColor: '#3B82F6',
//           },
//           {
//             title: 'Lightning Fast Setup',
//             description: 'Launch your campaigns in under 5 minutes with our streamlined interface. Pay securely with card or invoice - no hidden fees.',
//             icon: 'lightning',
//             iconColor: '#10B981',
//           },
//           {
//             title: '3x Better ROI',
//             description: 'Our clients see 3x better return on ad spend compared to single-platform campaigns',
//             iconColor: '#10B981',
//             socialMediaIcons: ['facebook', 'tiktok', 'telegram'],
//             testimonial: {
//               authorName: 'Gulshan Ads Expert',
//               authorPosition: 'Campaign Specialist',
//               authorInitials: 'AH',
//             },
//           },
//         ],
//         statistics: [
//           {
//             value: '250%',
//             label: 'Average ROI Increase',
//             color: '#10B981',
//           },
//           {
//             value: '5M+',
//             label: 'People Reached Monthly',
//             color: '#3B82F6',
//           },
//           {
//             value: '48h',
//             label: 'Average Setup Time',
//             color: '#10B981',
//           },
//           {
//             value: '99.9%',
//             label: 'Platform Uptime',
//             color: '#3B82F6',
//           },
//         ],
//         ctaButtons: [
//           {
//             text: 'Start Your Campaign',
//             type: 'primary',
//             color: '#10B981',
//             action: 'start-campaign',
//           },
//           {
//             text: 'Learn More',
//             type: 'secondary',
//             color: '#065F46',
//             action: 'learn-more',
//           },
//         ],
//       };
//       const result = await AdvertisingSectionService.createAdvertisingSection(advertisingSectionData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(advertisingSectionData.title);
//       expect(result.keyFeatures).toHaveLength(3);
//       expect(result.serviceCards).toHaveLength(4);
//       expect(result.statistics).toHaveLength(4);
//       expect(result.ctaButtons).toHaveLength(2);
//     });
//     it('should throw error when trying to create second advertising section', async () => {
//       const advertisingSectionData = {
//         title: 'First Advertising Section',
//         subtitle: 'First subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionService.createAdvertisingSection(advertisingSectionData as any);
//       const secondAdvertisingSectionData = {
//         title: 'Second Advertising Section',
//         subtitle: 'Second subtitle',
//         keyFeatures: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
//         serviceCards: [{ title: 'Card 2', description: 'Desc 2', icon: 'icon2', iconColor: '#000000' }],
//         statistics: [{ value: '200+', label: 'Test 2', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 2', type: 'secondary', color: '#000000', action: 'test2' }],
//       };
//       await expect(AdvertisingSectionService.createAdvertisingSection(secondAdvertisingSectionData as any)).rejects.toThrow('Advertising section already exists. You can only update it.');
//     });
//   });
//   describe('getAdvertisingSection', () => {
//     it('should return advertising section when it exists', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       const createdAdvertisingSection = await AdvertisingSectionModel.create(advertisingSectionData);
//       const result = await AdvertisingSectionService.getAdvertisingSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisingSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//     });
//     it('should throw error when advertising section does not exist', async () => {
//       await expect(AdvertisingSectionService.getAdvertisingSection()).rejects.toThrow('Advertising section not found');
//     });
//   });
//   describe('updateAdvertisingSection', () => {
//     it('should update advertising section successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionModel.create(advertisingSectionData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await AdvertisingSectionService.updateAdvertisingSection(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('updateKeyFeatures', () => {
//     it('should update key features successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionModel.create(advertisingSectionData);
//       const newFeatures = [
//         { text: 'New Feature 1', icon: 'new-icon1', color: '#FF0000' },
//         { text: 'New Feature 2', icon: 'new-icon2', color: '#00FF00' },
//       ];
//       const result = await AdvertisingSectionService.updateKeyFeatures(newFeatures);
//       expect(result).toBeDefined();
//       expect(result?.keyFeatures).toHaveLength(2);
//       expect(result?.keyFeatures[0].text).toBe('New Feature 1');
//     });
//   });
//   describe('updateServiceCards', () => {
//     it('should update service cards successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionModel.create(advertisingSectionData);
//       const newCards = [
//         { title: 'New Card 1', description: 'New Desc 1', icon: 'new-icon1', iconColor: '#FF0000' },
//         { title: 'New Card 2', description: 'New Desc 2', icon: 'new-icon2', iconColor: '#00FF00' },
//       ];
//       const result = await AdvertisingSectionService.updateServiceCards(newCards);
//       expect(result).toBeDefined();
//       expect(result?.serviceCards).toHaveLength(2);
//       expect(result?.serviceCards[0].title).toBe('New Card 1');
//     });
//   });
//   describe('updateStatistics', () => {
//     it('should update statistics successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionModel.create(advertisingSectionData);
//       const newStatistics = [
//         { value: '500+', label: 'New Stat 1', color: '#FF0000' },
//         { value: '1M+', label: 'New Stat 2', color: '#00FF00' },
//       ];
//       const result = await AdvertisingSectionService.updateStatistics(newStatistics);
//       expect(result).toBeDefined();
//       expect(result?.statistics).toHaveLength(2);
//       expect(result?.statistics[0].value).toBe('500+');
//     });
//   });
//   describe('updateCTAButtons', () => {
//     it('should update CTA buttons successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       await AdvertisingSectionModel.create(advertisingSectionData);
//       const newButtons = [
//         { text: 'New Button 1', type: 'primary', color: '#FF0000', action: 'new-action1' },
//         { text: 'New Button 2', type: 'secondary', color: '#00FF00', action: 'new-action2' },
//       ];
//       const result = await AdvertisingSectionService.updateCTAButtons(newButtons);
//       expect(result).toBeDefined();
//       expect(result?.ctaButtons).toHaveLength(2);
//       expect(result?.ctaButtons[0].text).toBe('New Button 1');
//     });
//   });
//   describe('deleteAdvertisingSection', () => {
//     it('should delete advertising section successfully', async () => {
//       const advertisingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//         ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
//       };
//       const createdAdvertisingSection = await AdvertisingSectionModel.create(advertisingSectionData);
//       const result = await AdvertisingSectionService.deleteAdvertisingSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisingSection._id.toString());
//       const deletedAdvertisingSection = await AdvertisingSectionModel.findById(createdAdvertisingSection._id);
//       expect(deletedAdvertisingSection).toBeNull();
//     });
//     it('should throw error when advertising section does not exist', async () => {
//       await expect(AdvertisingSectionService.deleteAdvertisingSection()).rejects.toThrow('Advertising section not found');
//     });
//   });
// });
