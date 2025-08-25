// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { MetaSectionService } from './metaSection.service';
// import MetaSectionModel from './metaSection.model';

// describe('Meta Section Service', () => {
//   beforeEach(async () => {
//     await MetaSectionModel.deleteMany({});
//   });

//   afterEach(async () => {
//     await MetaSectionModel.deleteMany({});
//   });

//   describe('createMetaSection', () => {
//     it('should create a new meta section successfully', async () => {
//       const metaSectionData = {
//         title: 'Meta: Your Gateway to Social Success',
//         subtitle: 'Leverage the power of Facebook and Instagram advertising with Gulshan Ads\'s premium Meta solutions.',
//         platformIcons: [
//           { platform: 'Pinterest', icon: 'P', color: '#E60023' },
//           { platform: 'Facebook', icon: 'f', color: '#1877F2' },
//         ],
//         featureButtons: [
//           { text: 'Tax-optimized billing', icon: 'padlock', color: '#10B981' },
//           { text: 'Multi-currency support', icon: 'currency-exchange', color: '#3B82F6' },
//         ],
//         serviceCards: [
//           { title: 'Advanced Security', description: 'Premium verified accounts with multi-layer protection.', icon: 'shield-check', iconColor: '#10B981' },
//           { title: 'Meta Certified Experts', description: 'Our team of Meta Blueprint certified specialists.', icon: 'team', iconColor: '#3B82F6' },
//         ],
//         performanceTitle: 'Meta Platform Performance',
//         performanceSubtitle: 'Real results from our Meta advertising campaigns',
//         performanceStatistics: [
//           { value: '25%', label: 'Average ROI Increase', color: '#10B981' },
//           { value: '1.2M+', label: 'People Reached Monthly', color: '#3B82F6' },
//         ],
//       };

//       const result = await MetaSectionService.createMetaSection(metaSectionData as any);

//       expect(result).toBeDefined();
//       expect(result.title).toBe(metaSectionData.title);
//       expect(result.platformIcons).toHaveLength(2);
//       expect(result.featureButtons).toHaveLength(2);
//       expect(result.serviceCards).toHaveLength(2);
//       expect(result.performanceStatistics).toHaveLength(2);
//     });

//     it('should throw error when trying to create second meta section', async () => {
//       const metaSectionData = {
//         title: 'First Meta Section',
//         subtitle: 'First subtitle',
//         platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
//         featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         performanceTitle: 'Performance Title',
//         performanceSubtitle: 'Performance Subtitle',
//         performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//       };

//       await MetaSectionService.createMetaSection(metaSectionData as any);

//       const secondMetaSectionData = {
//         title: 'Second Meta Section',
//         subtitle: 'Second subtitle',
//         platformIcons: [{ platform: 'Test2', icon: 'T2', color: '#000000' }],
//         featureButtons: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
//         serviceCards: [{ title: 'Card 2', description: 'Desc 2', icon: 'icon2', iconColor: '#000000' }],
//         performanceTitle: 'Performance Title 2',
//         performanceSubtitle: 'Performance Subtitle 2',
//         performanceStatistics: [{ value: '200+', label: 'Test 2', color: '#000000' }],
//       };

//       await expect(MetaSectionService.createMetaSection(secondMetaSectionData as any)).rejects.toThrow('Meta section already exists. You can only update it.');
//     });
//   });

//   describe('getMetaSection', () => {
//     it('should return meta section when it exists', async () => {
//       const metaSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
//         featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         performanceTitle: 'Performance Title',
//         performanceSubtitle: 'Performance Subtitle',
//         performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//       };

//       const createdMetaSection = await MetaSectionModel.create(metaSectionData);
//       const result = await MetaSectionService.getMetaSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdMetaSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//     });

//     it('should throw error when meta section does not exist', async () => {
//       await expect(MetaSectionService.getMetaSection()).rejects.toThrow('Meta section not found');
//     });
//   });

//   describe('updateMetaSection', () => {
//     it('should update meta section successfully', async () => {
//       const metaSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
//         featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         performanceTitle: 'Original Performance Title',
//         performanceSubtitle: 'Original Performance Subtitle',
//         performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//       };

//       await MetaSectionModel.create(metaSectionData);

//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };

//       const result = await MetaSectionService.updateMetaSection(updateData);

//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });

//   describe('deleteMetaSection', () => {
//     it('should delete meta section successfully', async () => {
//       const metaSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
//         featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
//         serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
//         performanceTitle: 'Performance Title',
//         performanceSubtitle: 'Performance Subtitle',
//         performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
//       };

//       const createdMetaSection = await MetaSectionModel.create(metaSectionData);
//       const result = await MetaSectionService.deleteMetaSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdMetaSection._id.toString());

//       const deletedMetaSection = await MetaSectionModel.findById(createdMetaSection._id);
//       expect(deletedMetaSection).toBeNull();
//     });

//     it('should throw error when meta section does not exist', async () => {
//       await expect(MetaSectionService.deleteMetaSection()).rejects.toThrow('Meta section not found');
//     });
//   });
// });
