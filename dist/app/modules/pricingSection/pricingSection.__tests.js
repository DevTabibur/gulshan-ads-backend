"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { PricingSectionService } from './pricingSection.service';
// import PricingSectionModel from './pricingSection.model';
// describe('Pricing Section Service', () => {
//   beforeEach(async () => {
//     await PricingSectionModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await PricingSectionModel.deleteMany({});
//   });
//   describe('createPricingSection', () => {
//     it('should create a new pricing section successfully', async () => {
//       const pricingSectionData = {
//         title: 'Choose Your Growth Plan',
//         subtitle: 'Flexible packages designed to scale with your freelance business, from startup to enterprise level.',
//         plans: [
//           {
//             icon: 'globe',
//             title: 'Multi-Platform Campaigns',
//             price: 'From $299/mo',
//             description: 'Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all.',
//             features: [
//               { text: 'Cross-platform optimization' },
//               { text: 'Weekly reporting' },
//               { text: 'Unified reporting' },
//               { text: 'Budget friendly campaign' },
//             ],
//             ctaText: 'Get Started',
//             ctaLink: '/register',
//             isPopular: false,
//           },
//           {
//             icon: 'rocket',
//             title: 'Growth Acceleration',
//             price: 'From $499/mo',
//             description: 'Scale your freelance business with proven advertising strategies.',
//             features: [
//               { text: 'Lead generation' },
//               { text: 'Brand awareness' },
//               { text: 'Client acquisition' },
//             ],
//             ctaText: 'Get Started',
//             ctaLink: '/register',
//             isPopular: true,
//             popularTag: 'Most Popular',
//           },
//           {
//             icon: 'shield',
//             title: 'Premium Management',
//             price: 'From $999/mo',
//             description: 'White-glove service with dedicated account manager.',
//             features: [
//               { text: '1-on-1 strategy calls' },
//               { text: 'Custom creatives' },
//               { text: 'Priority support' },
//             ],
//             ctaText: 'Get Started',
//             ctaLink: '/register',
//             isPopular: false,
//           },
//         ],
//       };
//       const result = await PricingSectionService.createPricingSection(pricingSectionData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(pricingSectionData.title);
//       expect(result.subtitle).toBe(pricingSectionData.subtitle);
//       expect(result.plans).toHaveLength(3);
//       expect(result.plans[0].title).toBe('Multi-Platform Campaigns');
//       expect(result.plans[1].isPopular).toBe(true);
//       expect(result.plans[1].popularTag).toBe('Most Popular');
//       expect(result.plans[2].features).toHaveLength(3);
//     });
//     it('should throw error when trying to create second pricing section', async () => {
//       const pricingSectionData = {
//         title: 'First Pricing Section',
//         subtitle: 'First subtitle',
//         plans: [{ 
//           icon: 'test', 
//           title: 'Test Plan', 
//           price: '$100/mo', 
//           description: 'Test description', 
//           features: [{ text: 'Test feature' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test' 
//         }],
//       };
//       await PricingSectionService.createPricingSection(pricingSectionData as any);
//       const secondPricingSectionData = {
//         title: 'Second Pricing Section',
//         subtitle: 'Second subtitle',
//         plans: [{ 
//           icon: 'test2', 
//           title: 'Test Plan 2', 
//           price: '$200/mo', 
//           description: 'Test description 2', 
//           features: [{ text: 'Test feature 2' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test2' 
//         }],
//       };
//       await expect(PricingSectionService.createPricingSection(secondPricingSectionData as any)).rejects.toThrow('Pricing section already exists. You can only update it.');
//     });
//   });
//   describe('getPricingSection', () => {
//     it('should return pricing section when it exists', async () => {
//       const pricingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         plans: [{ 
//           icon: 'test', 
//           title: 'Test Plan', 
//           price: '$100/mo', 
//           description: 'Test description', 
//           features: [{ text: 'Test feature' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test' 
//         }],
//       };
//       const createdPricingSection = await PricingSectionModel.create(pricingSectionData);
//       const result = await PricingSectionService.getPricingSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdPricingSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//       expect(result?.subtitle).toBe('Test Subtitle');
//     });
//     it('should throw error when pricing section does not exist', async () => {
//       await expect(PricingSectionService.getPricingSection()).rejects.toThrow('Pricing section not found');
//     });
//   });
//   describe('updatePricingSection', () => {
//     it('should update pricing section successfully', async () => {
//       const pricingSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         plans: [{ 
//           icon: 'test', 
//           title: 'Test Plan', 
//           price: '$100/mo', 
//           description: 'Test description', 
//           features: [{ text: 'Test feature' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test' 
//         }],
//       };
//       await PricingSectionModel.create(pricingSectionData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await PricingSectionService.updatePricingSection(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('updatePlans', () => {
//     it('should update plans successfully', async () => {
//       const pricingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         plans: [{ 
//           icon: 'test', 
//           title: 'Test Plan', 
//           price: '$100/mo', 
//           description: 'Test description', 
//           features: [{ text: 'Test feature' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test' 
//         }],
//       };
//       await PricingSectionModel.create(pricingSectionData);
//       const newPlans = [
//         {
//           icon: 'globe',
//           title: 'Multi-Platform Campaigns',
//           price: 'From $299/mo',
//           description: 'Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all.',
//           features: [
//             { text: 'Cross-platform optimization' },
//             { text: 'Weekly reporting' },
//           ],
//           ctaText: 'Get Started',
//           ctaLink: '/register',
//           isPopular: false,
//         },
//         {
//           icon: 'rocket',
//           title: 'Growth Acceleration',
//           price: 'From $499/mo',
//           description: 'Scale your freelance business with proven advertising strategies.',
//           features: [
//             { text: 'Lead generation' },
//             { text: 'Brand awareness' },
//           ],
//           ctaText: 'Get Started',
//           ctaLink: '/register',
//           isPopular: true,
//           popularTag: 'Most Popular',
//         },
//       ];
//       const result = await PricingSectionService.updatePlans(newPlans);
//       expect(result).toBeDefined();
//       expect(result?.plans).toHaveLength(2);
//       expect(result?.plans[0].title).toBe('Multi-Platform Campaigns');
//       expect(result?.plans[1].isPopular).toBe(true);
//       expect(result?.plans[1].popularTag).toBe('Most Popular');
//     });
//   });
//   describe('deletePricingSection', () => {
//     it('should delete pricing section successfully', async () => {
//       const pricingSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         plans: [{ 
//           icon: 'test', 
//           title: 'Test Plan', 
//           price: '$100/mo', 
//           description: 'Test description', 
//           features: [{ text: 'Test feature' }], 
//           ctaText: 'Get Started', 
//           ctaLink: '/test' 
//         }],
//       };
//       const createdPricingSection = await PricingSectionModel.create(pricingSectionData);
//       const result = await PricingSectionService.deletePricingSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdPricingSection._id.toString());
//       const deletedPricingSection = await PricingSectionModel.findById(createdPricingSection._id);
//       expect(deletedPricingSection).toBeNull();
//     });
//     it('should throw error when pricing section does not exist', async () => {
//       await expect(PricingSectionService.deletePricingSection()).rejects.toThrow('Pricing section not found');
//     });
//   });
// });
