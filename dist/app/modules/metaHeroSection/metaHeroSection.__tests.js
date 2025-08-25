"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { MetaHeroSectionService } from './metaHeroSection.service';
// import MetaHeroSectionModel from './metaHeroSection.model';
// describe('Meta Hero Section Service', () => {
//   beforeEach(async () => {
//     await MetaHeroSectionModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await MetaHeroSectionModel.deleteMany({});
//   });
//   describe('createMetaHeroSection', () => {
//     it('should create a new meta hero section successfully', async () => {
//       const metaHeroSectionData = {
//         title: 'Instagram and Facebook Accounts with Benefits',
//         subtitle: 'Pay for Instagram and Facebook on favorable terms and run campaigns in reliable Gulshan Ads accounts with expert support',
//         ctaButtons: [
//           {
//             text: 'Sign up',
//             link: '/signup',
//             icon: 'user-plus',
//             variant: 'primary',
//           },
//           {
//             text: 'Learn More',
//             link: '/learn-more',
//             icon: 'info',
//             variant: 'secondary',
//           },
//         ],
//         statistics: [
//           { value: '3.8B+', label: 'Meta Users' },
//           { value: '98%', label: 'Success Rate' },
//           { value: '24/7', label: 'Expert Support' },
//         ],
//       };
//       const result = await MetaHeroSectionService.createMetaHeroSection(metaHeroSectionData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(metaHeroSectionData.title);
//       expect(result.subtitle).toBe(metaHeroSectionData.subtitle);
//       expect(result.ctaButtons).toHaveLength(2);
//       expect(result.ctaButtons[0].text).toBe('Sign up');
//       expect(result.ctaButtons[1].variant).toBe('secondary');
//       expect(result.statistics).toHaveLength(3);
//       expect(result.statistics[0].value).toBe('3.8B+');
//       expect(result.statistics[1].label).toBe('Success Rate');
//     });
//     it('should throw error when trying to create second meta hero section', async () => {
//       const metaHeroSectionData = {
//         title: 'First Meta Hero Section',
//         subtitle: 'First subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       await MetaHeroSectionService.createMetaHeroSection(metaHeroSectionData as any);
//       const secondMetaHeroSectionData = {
//         title: 'Second Meta Hero Section',
//         subtitle: 'Second subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button 2', 
//           link: '/test2', 
//           icon: 'test2', 
//           variant: 'secondary' 
//         }],
//         statistics: [{ value: '200', label: 'Test Stat 2' }],
//       };
//       await expect(MetaHeroSectionService.createMetaHeroSection(secondMetaHeroSectionData as any)).rejects.toThrow('Meta hero section already exists. You can only update it.');
//     });
//   });
//   describe('getMetaHeroSection', () => {
//     it('should return meta hero section when it exists', async () => {
//       const metaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       const createdMetaHeroSection = await MetaHeroSectionModel.create(metaHeroSectionData);
//       const result = await MetaHeroSectionService.getMetaHeroSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdMetaHeroSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//       expect(result?.subtitle).toBe('Test Subtitle');
//     });
//     it('should throw error when meta hero section does not exist', async () => {
//       await expect(MetaHeroSectionService.getMetaHeroSection()).rejects.toThrow('Meta hero section not found');
//     });
//   });
//   describe('updateMetaHeroSection', () => {
//     it('should update meta hero section successfully', async () => {
//       const metaHeroSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       await MetaHeroSectionModel.create(metaHeroSectionData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await MetaHeroSectionService.updateMetaHeroSection(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('updateCTAButtons', () => {
//     it('should update CTA buttons successfully', async () => {
//       const metaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       await MetaHeroSectionModel.create(metaHeroSectionData);
//       const newCTAButtons = [
//         {
//           text: 'Updated Sign up',
//           link: '/updated-signup',
//           icon: 'user-plus',
//           variant: 'primary',
//         },
//         {
//           text: 'Updated Learn More',
//           link: '/updated-learn-more',
//           icon: 'info',
//           variant: 'secondary',
//         },
//       ];
//       const result = await MetaHeroSectionService.updateCTAButtons(newCTAButtons);
//       expect(result).toBeDefined();
//       expect(result?.ctaButtons).toHaveLength(2);
//       expect(result?.ctaButtons[0].text).toBe('Updated Sign up');
//       expect(result?.ctaButtons[1].variant).toBe('secondary');
//     });
//   });
//   describe('updateStatistics', () => {
//     it('should update statistics successfully', async () => {
//       const metaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       await MetaHeroSectionModel.create(metaHeroSectionData);
//       const newStatistics = [
//         { value: '4.0B+', label: 'Updated Meta Users' },
//         { value: '99%', label: 'Updated Success Rate' },
//         { value: '24/7', label: 'Updated Expert Support' },
//       ];
//       const result = await MetaHeroSectionService.updateStatistics(newStatistics);
//       expect(result).toBeDefined();
//       expect(result?.statistics).toHaveLength(3);
//       expect(result?.statistics[0].value).toBe('4.0B+');
//       expect(result?.statistics[2].label).toBe('Updated Expert Support');
//     });
//   });
//   describe('deleteMetaHeroSection', () => {
//     it('should delete meta hero section successfully', async () => {
//       const metaHeroSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         ctaButtons: [{ 
//           text: 'Test Button', 
//           link: '/test', 
//           icon: 'test', 
//           variant: 'primary' 
//         }],
//         statistics: [{ value: '100', label: 'Test Stat' }],
//       };
//       const createdMetaHeroSection = await MetaHeroSectionModel.create(metaHeroSectionData);
//       const result = await MetaHeroSectionService.deleteMetaHeroSection();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdMetaHeroSection._id.toString());
//       const deletedMetaHeroSection = await MetaHeroSectionModel.findById(createdMetaHeroSection._id);
//       expect(deletedMetaHeroSection).toBeNull();
//     });
//     it('should throw error when meta hero section does not exist', async () => {
//       await expect(MetaHeroSectionService.deleteMetaHeroSection()).rejects.toThrow('Meta hero section not found');
//     });
//   });
// });
