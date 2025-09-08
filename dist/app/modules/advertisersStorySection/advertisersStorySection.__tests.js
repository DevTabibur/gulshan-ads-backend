"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { AdvertisersStorySectionService } from './advertisersStorySection.service';
// import AdvertisersStorySectionModel from './advertisersStorySection.model';
// describe('Advertisers Story Section Service', () => {
//   beforeEach(async () => {
//     await AdvertisersStorySectionModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await AdvertisersStorySectionModel.deleteMany({});
//   });
//   describe('createAdvertisersStorySection', () => {
//     it('should create a new advertisers story section successfully', async () => {
//       const advertisersStorySectionData = {
//         title: 'Success Stories from Real Advertisers',
//         subtitle: 'See how Gulshan Ads has transformed freelance businesses across different industries.',
//         testimonials: [
//           {
//             rating: 5,
//             testimonialText: 'Gulshan Ads transformed my freelance business. I went from struggling to find clients to having a 3-month waiting list!',
//             reviewerName: 'Pijus',
//             reviewerTitle: 'Digital Marketer',
//             impactMetric: '+400% revenue',
//             profileImage: '/images/pijus.jpg',
//           },
//           {
//             rating: 5,
//             testimonialText: 'The ROI is incredible. Every dollar I spend on ads brings back $4-5 in new client revenue. Game changer!',
//             reviewerName: 'MD Raju',
//             reviewerTitle: 'Business Owner',
//             impactMetric: '+250% clients',
//             profileImage: '/images/raju.jpg',
//           },
//           {
//             rating: 5,
//             testimonialText: 'Finally, I can focus on what I love - writing - while Gulshan Ads handles all my marketing. Best decision ever!',
//             reviewerName: 'Amir Hossain',
//             reviewerTitle: 'Business Owner',
//             impactMetric: '+180% income',
//             profileImage: '/images/amir.jpg',
//           },
//         ],
//       };
//       const result = await AdvertisersStorySectionService.createAdvertisersStorySection(advertisersStorySectionData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(advertisersStorySectionData.title);
//       expect(result.subtitle).toBe(advertisersStorySectionData.subtitle);
//       expect(result.testimonials).toHaveLength(3);
//       expect(result.testimonials[0].reviewerName).toBe('Pijus');
//       expect(result.testimonials[1].impactMetric).toBe('+250% clients');
//       expect(result.testimonials[2].rating).toBe(5);
//     });
//     it('should throw error when trying to create second advertisers story section', async () => {
//       const advertisersStorySectionData = {
//         title: 'First Advertisers Story Section',
//         subtitle: 'First subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial', 
//           reviewerName: 'Test User', 
//           reviewerTitle: 'Test Title', 
//           impactMetric: '+100% growth' 
//         }],
//       };
//       await AdvertisersStorySectionService.createAdvertisersStorySection(advertisersStorySectionData as any);
//       const secondAdvertisersStorySectionData = {
//         title: 'Second Advertisers Story Section',
//         subtitle: 'Second subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial 2', 
//           reviewerName: 'Test User 2', 
//           reviewerTitle: 'Test Title 2', 
//           impactMetric: '+200% growth' 
//         }],
//       };
//       await expect(AdvertisersStorySectionService.createAdvertisersStorySection(secondAdvertisersStorySectionData as any)).rejects.toThrow('Advertisers story section already exists. You can only update it.');
//     });
//   });
//   describe('getAdvertisersStorySection', () => {
//     it('should return advertisers story section when it exists', async () => {
//       const advertisersStorySectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial', 
//           reviewerName: 'Test User', 
//           reviewerTitle: 'Test Title', 
//           impactMetric: '+100% growth' 
//         }],
//       };
//       const createdAdvertisersStorySection = await AdvertisersStorySectionModel.create(advertisersStorySectionData);
//       const result = await AdvertisersStorySectionService.getAdvertisersStorySection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersStorySection._id.toString());
//       expect(result?.title).toBe('Test Title');
//       expect(result?.subtitle).toBe('Test Subtitle');
//     });
//     it('should throw error when advertisers story section does not exist', async () => {
//       await expect(AdvertisersStorySectionService.getAdvertisersStorySection()).rejects.toThrow('Advertisers story section not found');
//     });
//   });
//   describe('updateAdvertisersStorySection', () => {
//     it('should update advertisers story section successfully', async () => {
//       const advertisersStorySectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial', 
//           reviewerName: 'Test User', 
//           reviewerTitle: 'Test Title', 
//           impactMetric: '+100% growth' 
//         }],
//       };
//       await AdvertisersStorySectionModel.create(advertisersStorySectionData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await AdvertisersStorySectionService.updateAdvertisersStorySection(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('updateTestimonials', () => {
//     it('should update testimonials successfully', async () => {
//       const advertisersStorySectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial', 
//           reviewerName: 'Test User', 
//           reviewerTitle: 'Test Title', 
//           impactMetric: '+100% growth' 
//         }],
//       };
//       await AdvertisersStorySectionModel.create(advertisersStorySectionData);
//       const newTestimonials = [
//         {
//           rating: 5,
//           testimonialText: 'Updated testimonial from Pijus',
//           reviewerName: 'Pijus',
//           reviewerTitle: 'Digital Marketer',
//           impactMetric: '+400% revenue',
//           profileImage: '/images/pijus.jpg',
//         },
//         {
//           rating: 5,
//           testimonialText: 'Updated testimonial from Raju',
//           reviewerName: 'MD Raju',
//           reviewerTitle: 'Business Owner',
//           impactMetric: '+250% clients',
//           profileImage: '/images/raju.jpg',
//         },
//       ];
//       const result = await AdvertisersStorySectionService.updateTestimonials(newTestimonials);
//       expect(result).toBeDefined();
//       expect(result?.testimonials).toHaveLength(2);
//       expect(result?.testimonials[0].reviewerName).toBe('Pijus');
//       expect(result?.testimonials[1].impactMetric).toBe('+250% clients');
//     });
//   });
//   describe('deleteAdvertisersStorySection', () => {
//     it('should delete advertisers story section successfully', async () => {
//       const advertisersStorySectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         testimonials: [{ 
//           rating: 5, 
//           testimonialText: 'Test testimonial', 
//           reviewerName: 'Test User', 
//           reviewerTitle: 'Test Title', 
//           impactMetric: '+100% growth' 
//         }],
//       };
//       const createdAdvertisersStorySection = await AdvertisersStorySectionModel.create(advertisersStorySectionData);
//       const result = await AdvertisersStorySectionService.deleteAdvertisersStorySection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersStorySection._id.toString());
//       const deletedAdvertisersStorySection = await AdvertisersStorySectionModel.findById(createdAdvertisersStorySection._id);
//       expect(deletedAdvertisersStorySection).toBeNull();
//     });
//     it('should throw error when advertisers story section does not exist', async () => {
//       await expect(AdvertisersStorySectionService.deleteAdvertisersStorySection()).rejects.toThrow('Advertisers story section not found');
//     });
//   });
// });
