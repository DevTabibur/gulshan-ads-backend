// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { AboutSectionService } from './aboutSection.service';
// import AboutSectionModel from './aboutSection.model';

// describe('About Section Service', () => {
//   beforeEach(async () => {
//     await AboutSectionModel.deleteMany({});
//   });

//   afterEach(async () => {
//     await AboutSectionModel.deleteMany({});
//   });

//   describe('createAboutSection', () => {
//     it('should create a new about section successfully', async () => {
//       const aboutSectionData = {
//         aboutTitle: 'About Gulshan Ads',
//         aboutDescription: 'Empowering businesses and agencies with cutting-edge multi-platform advertising solutions. We bridge the gap between complex ad platforms and successful campaigns.',
//         statistics: [
//           { value: '7+', label: 'Years of Multi-Platform Expertise', icon: 'check', iconColor: '#10B981' },
//           { value: '5000+', label: 'Global Clients Served', icon: 'globe', iconColor: '#3B82F6' },
//           { value: '150+', label: 'Agency Partners Worldwide', icon: 'users', iconColor: '#06B6D4' },
//           { value: '25+', label: 'Certified Platform Specialists', icon: 'book-open', iconColor: '#8B5CF6' },
//         ],
//         weWorkWithTitle: 'We Work With',
//         weWorkWithDescription: 'Our platform serves diverse clients, from growing agencies to enterprise advertisers, each with unique needs and goals.',
//         clientTypes: [
//           {
//             title: 'Marketing Agencies',
//             description: 'Scale your client campaigns with our white-label solutions. Access premium ad accounts, expert consultation, and transparent reporting that enhances your agency\'s reputation.',
//             icon: 'building',
//             iconColor: '#10B981',
//             features: ['White-label dashboard', '24/7 expert support', 'Competitive commissions', 'Advanced reporting'],
//           },
//           {
//             title: 'Direct Advertisers',
//             description: 'Launch high-impact campaigns across Meta, TikTok, and Telegram without the complexity. Get expert guidance, premium account access, and transparent pricing.',
//             icon: 'user',
//             iconColor: '#3B82F6',
//             features: ['No setup fees', 'Expert consultation', 'Multi-platform access', 'Flexible payment terms'],
//           },
//           {
//             title: 'Performance Marketers',
//             description: 'Manage all your campaigns from one unified dashboard. Access advanced targeting tools, real-time analytics, and optimization features that maximize your ROI.',
//             icon: 'bar-chart',
//             iconColor: '#06B6D4',
//             features: ['Unified dashboard', 'Advanced analytics', 'A/B testing tools', 'Performance optimization'],
//           },
//         ],
//         missionTitle: 'Our Mission',
//         missionDescription: 'To democratize access to premium advertising platforms and expert knowledge, enabling businesses of all sizes to compete effectively in the digital marketplace. We believe great advertising should be accessible, transparent, and results-driven.',
//         missionPillars: [
//           { title: 'Transparency', description: 'Clear pricing, honest reporting, no hidden fees' },
//           { title: 'Expertise', description: 'Certified specialists with proven track records' },
//           { title: 'Innovation', description: 'Cutting-edge tools and emerging platform access' },
//         ],
//       };

//       const result = await AboutSectionService.createAboutSection(aboutSectionData as any);

//       expect(result).toBeDefined();
//       expect(result.aboutTitle).toBe(aboutSectionData.aboutTitle);
//       expect(result.statistics).toHaveLength(4);
//       expect(result.clientTypes).toHaveLength(3);
//       expect(result.missionPillars).toHaveLength(3);
//     });

//     it('should throw error when trying to create second about section', async () => {
//       const aboutSectionData = {
//         aboutTitle: 'First About Section',
//         aboutDescription: 'First description',
//         statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
//         weWorkWithTitle: 'We Work With',
//         weWorkWithDescription: 'Test description',
//         clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
//         missionTitle: 'Mission',
//         missionDescription: 'Mission description',
//         missionPillars: [{ title: 'Test', description: 'Test' }],
//       };

//       await AboutSectionService.createAboutSection(aboutSectionData as any);

//       const secondAboutSectionData = {
//         aboutTitle: 'Second About Section',
//         aboutDescription: 'Second description',
//         statistics: [{ value: '2+', label: 'Test 2', icon: 'test2', iconColor: '#000000' }],
//         weWorkWithTitle: 'We Work With 2',
//         weWorkWithDescription: 'Test description 2',
//         clientTypes: [{ title: 'Test 2', description: 'Test 2', icon: 'test2', iconColor: '#000000', features: ['test2'] }],
//         missionTitle: 'Mission 2',
//         missionDescription: 'Mission description 2',
//         missionPillars: [{ title: 'Test 2', description: 'Test 2' }],
//       };

//       await expect(AboutSectionService.createAboutSection(secondAboutSectionData as any)).rejects.toThrow('About section already exists. You can only update it.');
//     });
//   });

//   describe('getAboutSection', () => {
//     it('should return about section when it exists', async () => {
//       const aboutSectionData = {
//         aboutTitle: 'Test Title',
//         aboutDescription: 'Test Description',
//         statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
//         weWorkWithTitle: 'We Work With',
//         weWorkWithDescription: 'Test description',
//         clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
//         missionTitle: 'Mission',
//         missionDescription: 'Mission description',
//         missionPillars: [{ title: 'Test', description: 'Test' }],
//       };

//       const createdAboutSection = await AboutSectionModel.create(aboutSectionData);
//       const result = await AboutSectionService.getAboutSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAboutSection._id.toString());
//       expect(result?.aboutTitle).toBe('Test Title');
//     });

//     it('should throw error when about section does not exist', async () => {
//       await expect(AboutSectionService.getAboutSection()).rejects.toThrow('About section not found');
//     });
//   });

//   describe('updateAboutSection', () => {
//     it('should update about section successfully', async () => {
//       const aboutSectionData = {
//         aboutTitle: 'Original Title',
//         aboutDescription: 'Original Description',
//         statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
//         weWorkWithTitle: 'We Work With',
//         weWorkWithDescription: 'Test description',
//         clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
//         missionTitle: 'Mission',
//         missionDescription: 'Mission description',
//         missionPillars: [{ title: 'Test', description: 'Test' }],
//       };

//       await AboutSectionModel.create(aboutSectionData);

//       const updateData = {
//         aboutTitle: 'Updated Title',
//         aboutDescription: 'Updated Description',
//       };

//       const result = await AboutSectionService.updateAboutSection(updateData);

//       expect(result).toBeDefined();
//       expect(result?.aboutTitle).toBe('Updated Title');
//       expect(result?.aboutDescription).toBe('Updated Description');
//     });
//   });

//   describe('deleteAboutSection', () => {
//     it('should delete about section successfully', async () => {
//       const aboutSectionData = {
//         aboutTitle: 'Test Title',
//         aboutDescription: 'Test Description',
//         statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
//         weWorkWithTitle: 'We Work With',
//         weWorkWithDescription: 'Test description',
//         clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
//         missionTitle: 'Mission',
//         missionDescription: 'Mission description',
//         missionPillars: [{ title: 'Test', description: 'Test' }],
//       };

//       const createdAboutSection = await AboutSectionModel.create(aboutSectionData);
//       const result = await AboutSectionService.deleteAboutSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAboutSection._id.toString());

//       const deletedAboutSection = await AboutSectionModel.findById(createdAboutSection._id);
//       expect(deletedAboutSection).toBeNull();
//     });

//     it('should throw error when about section does not exist', async () => {
//       await expect(AboutSectionService.deleteAboutSection()).rejects.toThrow('About section not found');
//     });
//   });
// });
