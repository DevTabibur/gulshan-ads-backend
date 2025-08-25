// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { GettingStartedSectionService } from './gettingStartedSection.service';
// import GettingStartedSectionModel from './gettingStartedSection.model';

// describe('Getting Started Section Service', () => {
//   beforeEach(async () => {
//     await GettingStartedSectionModel.deleteMany({});
//   });

//   afterEach(async () => {
//     await GettingStartedSectionModel.deleteMany({});
//   });

//   describe('createGettingStartedSection', () => {
//     it('should create a new getting started section successfully', async () => {
//       const gettingStartedSectionData = {
//         title: 'How to Get Started with Gulshan Ads?',
//         description: 'Launch your first multi-platform advertising campaign in just 4 simple steps. Our streamlined process gets you from signup to success in minutes, not hours.',
//         steps: [
//           {
//             number: 1,
//             title: 'Create Your Account',
//             subtitle: 'Quick & Free Setup',
//             description: 'Register in under 2 minutes with our streamlined onboarding process. No setup fees, no hidden costs - just instant access to premium advertising platforms.',
//             features: ['Instant activation', 'No credit card required', 'Multi-platform access'],
//             iconColor: '#10B981',
//           },
//           {
//             number: 2,
//             title: 'Verify & Configure',
//             subtitle: 'Secure Account Setup',
//             description: 'Complete our quick verification process to ensure smooth ad delivery and account security. Our team pre-approves your setup to prevent any launch delays.',
//             features: ['Identity verification', 'Account optimization', 'Compliance check'],
//             iconColor: '#3B82F6',
//           },
//           {
//             number: 3,
//             title: 'Fund Your Campaigns',
//             subtitle: 'Flexible Payment Options',
//             description: 'Add funds instantly via card, bank transfer, or invoice. Our smart allocation system distributes your budget optimally across Meta, TikTok, and Telegram.',
//             features: ['Instant processing', 'Multi-currency support', 'Smart budget allocation'],
//             iconColor: '#10B981',
//           },
//           {
//             number: 4,
//             title: 'Launch & Optimize',
//             subtitle: 'Expert-Guided Success',
//             description: 'Go live with expert support every step of the way. Our certified specialists monitor, optimize, and scale your campaigns for maximum ROI across all platforms.',
//             features: ['24/7 monitoring', 'Performance optimization', 'Dedicated support'],
//             iconColor: '#3B82F6',
//           },
//         ],
//         ctaTitle: 'Ready to Transform Your Advertising?',
//         ctaDescription: 'Join thousands of successful businesses and agencies who trust Gulshan Ads for their multi-platform advertising needs. Start your journey today!',
//         ctaButtons: [
//           {
//             text: 'Start Free Account',
//             type: 'primary',
//             action: '/register',
//           },
//           {
//             text: 'Schedule Demo',
//             type: 'secondary',
//             action: '/demo',
//           },
//         ],
//       };

//       const result = await GettingStartedSectionService.createGettingStartedSection(gettingStartedSectionData as any);

//       expect(result).toBeDefined();
//       expect(result.title).toBe(gettingStartedSectionData.title);
//       expect(result.steps).toHaveLength(4);
//       expect(result.ctaButtons).toHaveLength(2);
//     });

//     it('should throw error when trying to create second getting started section', async () => {
//       const gettingStartedSectionData = {
//         title: 'First Getting Started Section',
//         description: 'First description',
//         steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
//         ctaTitle: 'Test CTA',
//         ctaDescription: 'Test CTA description',
//         ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
//       };

//       await GettingStartedSectionService.createGettingStartedSection(gettingStartedSectionData as any);

//       const secondGettingStartedSectionData = {
//         title: 'Second Getting Started Section',
//         description: 'Second description',
//         steps: [{ number: 1, title: 'Test 2', subtitle: 'Test 2', description: 'Test 2', features: ['test2'], iconColor: '#000000' }],
//         ctaTitle: 'Test CTA 2',
//         ctaDescription: 'Test CTA description 2',
//         ctaButtons: [{ text: 'Test 2', type: 'primary', action: '/test2' }],
//       };

//       await expect(GettingStartedSectionService.createGettingStartedSection(secondGettingStartedSectionData as any)).rejects.toThrow('Getting started section already exists. You can only update it.');
//     });
//   });

//   describe('getGettingStartedSection', () => {
//     it('should return getting started section when it exists', async () => {
//       const gettingStartedSectionData = {
//         title: 'Test Title',
//         description: 'Test Description',
//         steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
//         ctaTitle: 'Test CTA',
//         ctaDescription: 'Test CTA description',
//         ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
//       };

//       const createdGettingStartedSection = await GettingStartedSectionModel.create(gettingStartedSectionData);
//       const result = await GettingStartedSectionService.getGettingStartedSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdGettingStartedSection._id.toString());
//       expect(result?.title).toBe('Test Title');
//     });

//     it('should throw error when getting started section does not exist', async () => {
//       await expect(GettingStartedSectionService.getGettingStartedSection()).rejects.toThrow('Getting started section not found');
//     });
//   });

//   describe('updateGettingStartedSection', () => {
//     it('should update getting started section successfully', async () => {
//       const gettingStartedSectionData = {
//         title: 'Original Title',
//         description: 'Original Description',
//         steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
//         ctaTitle: 'Test CTA',
//         ctaDescription: 'Test CTA description',
//         ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
//       };

//       await GettingStartedSectionModel.create(gettingStartedSectionData);

//       const updateData = {
//         title: 'Updated Title',
//         description: 'Updated Description',
//       };

//       const result = await GettingStartedSectionService.updateGettingStartedSection(updateData);

//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.description).toBe('Updated Description');
//     });
//   });

//   describe('deleteGettingStartedSection', () => {
//     it('should delete getting started section successfully', async () => {
//       const gettingStartedSectionData = {
//         title: 'Test Title',
//         description: 'Test Description',
//         steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
//         ctaTitle: 'Test CTA',
//         ctaDescription: 'Test CTA description',
//         ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
//       };

//       const createdGettingStartedSection = await GettingStartedSectionModel.create(gettingStartedSectionData);
//       const result = await GettingStartedSectionService.deleteGettingStartedSection();

//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdGettingStartedSection._id.toString());

//       const deletedGettingStartedSection = await GettingStartedSectionModel.findById(createdGettingStartedSection._id);
//       expect(deletedGettingStartedSection).toBeNull();
//     });

//     it('should throw error when getting started section does not exist', async () => {
//       await expect(GettingStartedSectionService.deleteGettingStartedSection()).rejects.toThrow('Getting started section not found');
//     });
//   });
// });
