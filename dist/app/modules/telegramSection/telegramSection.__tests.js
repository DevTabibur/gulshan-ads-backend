"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { TelegramSectionService } from './telegramSection.service';
// import TelegramSectionModel from './telegramSection.model';
// describe('Telegram Section Service', () => {
//   beforeEach(async () => {
//     await TelegramSectionModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await TelegramSectionModel.deleteMany({});
//   });
//   describe('createTelegramSection', () => {
//     it('should create a new telegram section successfully', async () => {
//       const telegramSectionData = {
//         title: 'Telegram: Untapped Advertising Goldmine',
//         subtitle: 'Reach highly engaged audiences through Telegram\'s unique advertising formats. Drive traffic to your channels, boost website visits, and connect directly with customers in their preferred messaging app.',
//         keyFeatures: [
//           { text: 'Precision targeting with 900M+ active users', icon: 'target', color: '#10B981' },
//           { text: 'Direct customer engagement & instant feedback', icon: 'chat-bubble', color: '#3B82F6' },
//           { text: 'Higher conversion rates than traditional ads', icon: 'trending-up', color: '#EF4444' },
//         ],
//         pricingTitle: 'Agency-Friendly Pricing',
//         pricingPoints: [
//           { text: 'Minimum budget: $200 per campaign', icon: 'check' },
//           { text: 'Flexible commission: 15% - 25%', icon: 'check' },
//           { text: 'White-label dashboard available', icon: 'check' },
//         ],
//         ctaButton: {
//           text: 'Launch Telegram Ads',
//           color: '#3B82F6',
//         },
//         chatInterface: {
//           channelName: 'Gulshan Ads Agency',
//           channelSubscribers: '1.2K subscribers',
//           messages: [
//             {
//               sender: 'AH Gulshan Ads',
//               timestamp: '2:30 PM',
//               content: 'New case study: How we increased ROI by 340% using cross-platform targeting strategies',
//               emoji: '🚀',
//               engagement: {
//                 likes: '124',
//                 comments: '23',
//                 views: '1.2K',
//               },
//             },
//             {
//               sender: 'AH Gulshan Ads',
//               timestamp: '2:45 PM',
//               content: 'Pro tip: Telegram ads have 3x higher engagement rates compared to traditional display ads',
//               emoji: '💡',
//               button: {
//                 text: 'Learn More →',
//                 color: '#10B981',
//               },
//             },
//           ],
//           sponsoredAd: {
//             label: 'Sponsored',
//             content: 'Scale Your Agency with Gulshan',
//           },
//         },
//         futureBanner: {
//           title: 'The Future of Messaging Advertising',
//           description: 'Telegram advertising is revolutionizing how agencies connect with audiences. With native ad formats, precise targeting, and unmatched engagement rates, it\'s the platform your competitors haven\'t discovered yet.',
//           icon: 'lightning',
//           gradientColors: ['#3B82F6', '#1D4ED8', '#1E40AF'],
//         },
//       };
//       const result = await TelegramSectionService.createTelegramSection(telegramSectionData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(telegramSectionData.title);
//       expect(result.keyFeatures).toHaveLength(3);
//       expect(result.pricingPoints).toHaveLength(3);
//       expect(result.chatInterface.messages).toHaveLength(2);
//       expect(result.futureBanner.gradientColors).toHaveLength(3);
//     });
//     it('should throw error when trying to create second telegram section', async () => {
//       const telegramSectionData = {
//         title: 'First Telegram Section',
//         subtitle: 'First subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         pricingTitle: 'Pricing Title',
//         pricingPoints: [{ text: 'Point 1', icon: 'check' }],
//         ctaButton: { text: 'Button', color: '#000000' },
//         chatInterface: {
//           channelName: 'Test Channel',
//           channelSubscribers: '1K subscribers',
//           messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
//           sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
//         },
//         futureBanner: {
//           title: 'Test Banner',
//           description: 'Test description',
//           icon: 'test',
//           gradientColors: ['#000000', '#FFFFFF'],
//         },
//       };
//       await TelegramSectionService.createTelegramSection(telegramSectionData as any);
//       const secondTelegramSectionData = {
//         title: 'Second Telegram Section',
//         subtitle: 'Second subtitle',
//         keyFeatures: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
//         pricingTitle: 'Pricing Title 2',
//         pricingPoints: [{ text: 'Point 2', icon: 'check' }],
//         ctaButton: { text: 'Button 2', color: '#000000' },
//         chatInterface: {
//           channelName: 'Test Channel 2',
//           channelSubscribers: '2K subscribers',
//           messages: [{ sender: 'Test 2', timestamp: '12:00 PM', content: 'Test message 2' }],
//           sponsoredAd: { label: 'Sponsored', content: 'Test Ad 2' },
//         },
//         futureBanner: {
//           title: 'Test Banner 2',
//           description: 'Test description 2',
//           icon: 'test2',
//           gradientColors: ['#000000', '#FFFFFF'],
//         },
//       };
//       await expect(TelegramSectionService.createTelegramSection(secondTelegramSectionData as any)).rejects.toThrow('Telegram section already exists. You can only update it.');
//     });
//   });
//   describe('getTelegramSection', () => {
//     it('should return telegram section when it exists', async () => {
//       const telegramSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         pricingTitle: 'Pricing Title',
//         pricingPoints: [{ text: 'Point 1', icon: 'check' }],
//         ctaButton: { text: 'Button', color: '#000000' },
//         chatInterface: {
//           channelName: 'Test Channel',
//           channelSubscribers: '1K subscribers',
//           messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
//           sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
//         },
//         futureBanner: {
//           title: 'Test Banner',
//           description: 'Test description',
//           icon: 'test',
//           gradientColors: ['#000000', '#FFFFFF'],
//         },
//       };
//       const createdTelegramSection = await TelegramSectionModel.create(telegramSectionData);
//       const result = await TelegramSectionService.getTelegramSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdTelegramSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//     });
//     it('should throw error when telegram section does not exist', async () => {
//       await expect(TelegramSectionService.getTelegramSection()).rejects.toThrow('Telegram section not found');
//     });
//   });
//   describe('updateTelegramSection', () => {
//     it('should update telegram section successfully', async () => {
//       const telegramSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         pricingTitle: 'Original Pricing Title',
//         pricingPoints: [{ text: 'Point 1', icon: 'check' }],
//         ctaButton: { text: 'Original Button', color: '#000000' },
//         chatInterface: {
//           channelName: 'Original Channel',
//           channelSubscribers: '1K subscribers',
//           messages: [{ sender: 'Original', timestamp: '12:00 PM', content: 'Original message' }],
//           sponsoredAd: { label: 'Sponsored', content: 'Original Ad' },
//         },
//         futureBanner: {
//           title: 'Original Banner',
//           description: 'Original description',
//           icon: 'original',
//           gradientColors: ['#000000', '#FFFFFF'],
//         },
//       };
//       await TelegramSectionModel.create(telegramSectionData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await TelegramSectionService.updateTelegramSection(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('deleteTelegramSection', () => {
//     it('should delete telegram section successfully', async () => {
//       const telegramSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         pricingTitle: 'Pricing Title',
//         pricingPoints: [{ text: 'Point 1', icon: 'check' }],
//         ctaButton: { text: 'Button', color: '#000000' },
//         chatInterface: {
//           channelName: 'Test Channel',
//           channelSubscribers: '1K subscribers',
//           messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
//           sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
//         },
//         futureBanner: {
//           title: 'Test Banner',
//           description: 'Test description',
//           icon: 'test',
//           gradientColors: ['#000000', '#FFFFFF'],
//         },
//       };
//       const createdTelegramSection = await TelegramSectionModel.create(telegramSectionData);
//       const result = await TelegramSectionService.deleteTelegramSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdTelegramSection._id.toString());
//       const deletedTelegramSection = await TelegramSectionModel.findById(createdTelegramSection._id);
//       expect(deletedTelegramSection).toBeNull();
//     });
//     it('should throw error when telegram section does not exist', async () => {
//       await expect(TelegramSectionService.deleteTelegramSection()).rejects.toThrow('Telegram section not found');
//     });
//   });
// });
