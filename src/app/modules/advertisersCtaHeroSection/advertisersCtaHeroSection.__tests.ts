// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { AdvertisersCtaHeroSectionService } from './advertisersCtaHeroSection.service';
// import AdvertisersCtaHeroSectionModel from './advertisersCtaHeroSection.model';

// describe('Advertisers CTA Hero Section Service', () => {
//   beforeEach(async () => {
//     await AdvertisersCtaHeroSectionModel.deleteMany({});
//   });

//   afterEach(async () => {
//     await AdvertisersCtaHeroSectionModel.deleteMany({});
//   });

//   describe('createAdvertisersCtaHeroSection', () => {
//     it('should create a new advertisers CTA hero section successfully', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Ready to Scale Your Freelance Business?',
//         subtitle: 'Join 200+ successful Advertisers who\'ve transformed their business with Gulshan Ads. Get your first campaign running in 24 hours with our expert team.',
//         ctaButtons: [
//           {
//             text: 'Book Free Strategy Call',
//             link: '/book-call',
//             icon: 'calendar',
//             variant: 'primary',
//           },
//           {
//             text: 'View Pricing Plans',
//             link: '/pricing',
//             icon: 'file-text',
//             variant: 'secondary',
//           },
//         ],
//         benefits: [
//           { text: 'No setup fees' },
//           { text: 'Cancel anytime' },
//           { text: '30-day guarantee' },
//         ],
//       };

//       const result = await AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(advertisersCtaHeroSectionData as any);

//       expect(result).toBeDefined();
//       expect(result.title).toBe(advertisersCtaHeroSectionData.title);
//       expect(result.subtitle).toBe(advertisersCtaHeroSectionData.subtitle);
//       expect(result.ctaButtons).toHaveLength(2);
//       expect(result.ctaButtons[0].text).toBe('Book Free Strategy Call');
//       expect(result.ctaButtons[1].variant).toBe('secondary');
//       expect(result.benefits).toHaveLength(3);
//       expect(result.benefits[0].text).toBe('No setup fees');
//     });

//     it('should throw error when trying to create second advertisers CTA hero section', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'First CTA Hero Section',
//         subtitle: 'First subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       await AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(advertisersCtaHeroSectionData as any);

//       const secondAdvertisersCtaHeroSectionData = {
//         title: 'Second CTA Hero Section',
//         subtitle: 'Second subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button 2', 
//           link: '/test2', 
//           icon: 'test2', 
//           variant: 'secondary' 
//         }],
//         benefits: [{ text: 'Test benefit 2' }],
//       };

//       await expect(AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(secondAdvertisersCtaHeroSectionData as any)).rejects.toThrow('Advertisers CTA hero section already exists. You can only update it.');
//     });
//   });

//   describe('getAdvertisersCtaHeroSection', () => {
//     it('should return advertisers CTA hero section when it exists', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       const createdAdvertisersCtaHeroSection = await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);
//       const result = await AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersCtaHeroSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//       expect(result?.subtitle).toBe('Test Subtitle');
//     });

//     it('should throw error when advertisers CTA hero section does not exist', async () => {
//       await expect(AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection()).rejects.toThrow('Advertisers CTA hero section not found');
//     });
//   });

//   describe('updateAdvertisersCtaHeroSection', () => {
//     it('should update advertisers CTA hero section successfully', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);

//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };

//       const result = await AdvertisersCtaHeroSectionService.updateAdvertisersCtaHeroSection(updateData);

//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });

//   describe('updateCTAButtons', () => {
//     it('should update CTA buttons successfully', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);

//       const newCTAButtons = [
//         {
//           text: 'Updated Book Call',
//           link: '/updated-book-call',
//           icon: 'calendar',
//           variant: 'primary',
//         },
//         {
//           text: 'Updated View Pricing',
//           link: '/updated-pricing',
//           icon: 'file-text',
//           variant: 'secondary',
//         },
//       ];

//       const result = await AdvertisersCtaHeroSectionService.updateCTAButtons(newCTAButtons);

//       expect(result).toBeDefined();
//       expect(result?.ctaButtons).toHaveLength(2);
//       expect(result?.ctaButtons[0].text).toBe('Updated Book Call');
//       expect(result?.ctaButtons[1].variant).toBe('secondary');
//     });
//   });

//   describe('updateBenefits', () => {
//     it('should update benefits successfully', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);

//       const newBenefits = [
//         { text: 'Updated no setup fees' },
//         { text: 'Updated cancel anytime' },
//         { text: 'Updated 30-day guarantee' },
//       ];

//       const result = await AdvertisersCtaHeroSectionService.updateBenefits(newBenefits);

//       expect(result).toBeDefined();
//       expect(result?.benefits).toHaveLength(3);
//       expect(result?.benefits[0].text).toBe('Updated no setup fees');
//       expect(result?.benefits[2].text).toBe('Updated 30-day guarantee');
//     });
//   });

//   describe('deleteAdvertisersCtaHeroSection', () => {
//     it('should delete advertisers CTA hero section successfully', async () => {
//       const advertisersCtaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         benefits: [{ text: 'Test benefit' }],
//       };

//       const createdAdvertisersCtaHeroSection = await AdvertisersCtaHeroSectionModel.create(advertisersCtaHeroSectionData);
//       const result = await AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersCtaHeroSection._id.toString());

//       const deletedAdvertisersCtaHeroSection = await AdvertisersCtaHeroSectionModel.findById(createdAdvertisersCtaHeroSection._id);
//       expect(deletedAdvertisersCtaHeroSection).toBeNull();
//     });

//     it('should throw error when advertisers CTA hero section does not exist', async () => {
//       await expect(AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection()).rejects.toThrow('Advertisers CTA hero section not found');
//     });
//   });
// });
