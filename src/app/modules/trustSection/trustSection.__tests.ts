// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { TrustSectionService } from './trustSection.service';
// import TrustSectionModel from './trustSection.model';

// describe('Trust Section Service', () => {
//   beforeEach(async () => {
//     await TrustSectionModel.deleteMany({});
//   });

//   afterEach(async () => {
//     await TrustSectionModel.deleteMany({});
//   });

//   describe('createTrustSection', () => {
//     it('should create a new trust section successfully', async () => {
//       const trustSectionData = {
//         title: 'We are trusted by leading companies',
//         subtitle: 'Join thousands of businesses that trust Gulshan Ads',
//         trustedCompanies: [
//           { abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' },
//           { abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' },
//         ],
//         statistics: [
//           { value: '500+', label: 'Active Clients', color: '#10B981' },
//           { value: '2M+', label: 'Ads Launched', color: '#3B82F6' },
//         ],
//         featuredTestimonial: {
//           quote: 'Gulshan Ads transformed our social media advertising strategy.',
//           authorName: 'John Davis',
//           authorPosition: 'CEO',
//           authorCompany: 'TechFlow Solutions',
//           authorInitials: 'JD',
//         },
//       };

//       const result = await TrustSectionService.createTrustSection(trustSectionData as any);

//       expect(result).toBeDefined();
//       expect(result.title).toBe(trustSectionData.title);
//       expect(result.trustedCompanies).toHaveLength(2);
//       expect(result.statistics).toHaveLength(2);
//       expect(result.featuredTestimonial.authorName).toBe('John Davis');
//     });

//     it('should throw error when trying to create second trust section', async () => {
//       const trustSectionData = {
//         title: 'First Trust Section',
//         subtitle: 'First subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Great service!',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       await TrustSectionService.createTrustSection(trustSectionData as any);

//       const secondTrustSectionData = {
//         title: 'Second Trust Section',
//         subtitle: 'Second subtitle',
//         trustedCompanies: [{ abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' }],
//         statistics: [{ value: '200+', label: 'Clients', color: '#3B82F6' }],
//         featuredTestimonial: {
//           quote: 'Excellent service!',
//           authorName: 'Jane Smith',
//           authorPosition: 'CTO',
//           authorCompany: 'Test Corp 2',
//           authorInitials: 'JS',
//         },
//       };

//       await expect(TrustSectionService.createTrustSection(secondTrustSectionData as any)).rejects.toThrow('Trust section already exists. You can only update it.');
//     });
//   });

//   describe('getTrustSection', () => {
//     it('should return trust section when it exists', async () => {
//       const trustSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Great service!',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       const createdTrustSection = await TrustSectionModel.create(trustSectionData);

//       const result = await TrustSectionService.getTrustSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdTrustSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//     });

//     it('should throw error when trust section does not exist', async () => {
//       await expect(TrustSectionService.getTrustSection()).rejects.toThrow('Trust section not found');
//     });
//   });

//   describe('updateTrustSection', () => {
//     it('should update trust section successfully', async () => {
//       const trustSectionData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Original quote',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       await TrustSectionModel.create(trustSectionData);

//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };

//       const result = await TrustSectionService.updateTrustSection(updateData);

//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });

//   describe('updateTrustedCompanies', () => {
//     it('should update trusted companies successfully', async () => {
//       const trustSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Great service!',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       await TrustSectionModel.create(trustSectionData);

//       const newCompanies = [
//         { abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' },
//         { abbreviation: 'CV', fullName: 'CloudVault', iconColor: '#F59E0B' },
//       ];

//       const result = await TrustSectionService.updateTrustedCompanies(newCompanies);

//       expect(result).toBeDefined();
//       expect(result?.trustedCompanies).toHaveLength(2);
//       expect(result?.trustedCompanies[0].abbreviation).toBe('DS');
//     });
//   });

//   describe('updateStatistics', () => {
//     it('should update statistics successfully', async () => {
//       const trustSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Great service!',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       await TrustSectionModel.create(trustSectionData);

//       const newStatistics = [
//         { value: '500+', label: 'Active Clients', color: '#10B981' },
//         { value: '2M+', label: 'Ads Launched', color: '#3B82F6' },
//       ];

//       const result = await TrustSectionService.updateStatistics(newStatistics);

//       expect(result).toBeDefined();
//       expect(result?.statistics).toHaveLength(2);
//       expect(result?.statistics[0].value).toBe('500+');
//     });
//   });

//   describe('updateFeaturedTestimonial', () => {
//     it('should update featured testimonial successfully', async () => {
//       const trustSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Original quote',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       await TrustSectionModel.create(trustSectionData);

//       const newTestimonial = {
//         quote: 'Updated quote with amazing results!',
//         authorName: 'Jane Smith',
//         authorPosition: 'CTO',
//         authorCompany: 'TechFlow Solutions',
//         authorInitials: 'JS',
//       };

//       const result = await TrustSectionService.updateFeaturedTestimonial(newTestimonial);

//       expect(result).toBeDefined();
//       expect(result?.featuredTestimonial.quote).toBe('Updated quote with amazing results!');
//       expect(result?.featuredTestimonial.authorName).toBe('Jane Smith');
//     });
//   });

//   describe('deleteTrustSection', () => {
//     it('should delete trust section successfully', async () => {
//       const trustSectionData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
//         statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
//         featuredTestimonial: {
//           quote: 'Great service!',
//           authorName: 'John Doe',
//           authorPosition: 'CEO',
//           authorCompany: 'Test Corp',
//           authorInitials: 'JD',
//         },
//       };

//       const createdTrustSection = await TrustSectionModel.create(trustSectionData);

//       const result = await TrustSectionService.deleteTrustSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdTrustSection._id.toString());

//       const deletedTrustSection = await TrustSectionModel.findById(createdTrustSection._id);
//       expect(deletedTrustSection).toBeNull();
//     });

//     it('should throw error when trust section does not exist', async () => {
//       await expect(TrustSectionService.deleteTrustSection()).rejects.toThrow('Trust section not found');
//     });
//   });
// });
