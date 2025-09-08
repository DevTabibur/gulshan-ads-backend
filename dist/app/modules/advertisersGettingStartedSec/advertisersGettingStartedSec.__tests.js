"use strict";
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import { AdvertisersGettingStartedSecService } from './advertisersGettingStartedSec.service';
// import AdvertisersGettingStartedSecModel from './advertisersGettingStartedSec.model';
// describe('Advertisers Getting Started Section Service', () => {
//   beforeEach(async () => {
//     await AdvertisersGettingStartedSecModel.deleteMany({});
//   });
//   afterEach(async () => {
//     await AdvertisersGettingStartedSecModel.deleteMany({});
//   });
//   describe('createAdvertisersGettingStartedSec', () => {
//     it('should create a new advertisers getting started section successfully', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'How We Get You Started',
//         subtitle: 'Our proven 4-step process to transform your freelance business with strategic advertising',
//         steps: [
//           {
//             stepNumber: '01',
//             icon: 'message-circle',
//             title: 'Discovery Call',
//             description: 'We analyze your niche, goals, and current marketing efforts',
//             duration: '30 min',
//           },
//           {
//             stepNumber: '02',
//             icon: 'lightbulb',
//             title: 'Strategy Development',
//             description: 'Custom advertising strategy tailored to your freelance business',
//             duration: '2-3 days',
//           },
//           {
//             stepNumber: '03',
//             icon: 'rocket',
//             title: 'Campaign Launch',
//             description: 'We create and launch your campaigns across selected platforms',
//             duration: '1 week',
//           },
//           {
//             stepNumber: '04',
//             icon: 'trending-up',
//             title: 'Optimization & Growth',
//             description: 'Continuous monitoring and optimization for maximum ROI',
//             duration: 'Ongoing',
//           },
//         ],
//       };
//       const result = await AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(advertisersGettingStartedSecData as any);
//       expect(result).toBeDefined();
//       expect(result.title).toBe(advertisersGettingStartedSecData.title);
//       expect(result.subtitle).toBe(advertisersGettingStartedSecData.subtitle);
//       expect(result.steps).toHaveLength(4);
//       expect(result.steps[0].title).toBe('Discovery Call');
//       expect(result.steps[1].duration).toBe('2-3 days');
//       expect(result.steps[2].stepNumber).toBe('03');
//     });
//     it('should throw error when trying to create second advertisers getting started section', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'First Getting Started Section',
//         subtitle: 'First subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test', 
//           title: 'Test Step', 
//           description: 'Test description', 
//           duration: '1 hour' 
//         }],
//       };
//       await AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(advertisersGettingStartedSecData as any);
//       const secondAdvertisersGettingStartedSecData = {
//         title: 'Second Getting Started Section',
//         subtitle: 'Second subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test2', 
//           title: 'Test Step 2', 
//           description: 'Test description 2', 
//           duration: '2 hours' 
//         }],
//       };
//       await expect(AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(secondAdvertisersGettingStartedSecData as any)).rejects.toThrow('Advertisers getting started section already exists. You can only update it.');
//     });
//   });
//   describe('getAdvertisersGettingStartedSec', () => {
//     it('should return advertisers getting started section when it exists', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test', 
//           title: 'Test Step', 
//           description: 'Test description', 
//           duration: '1 hour' 
//         }],
//       };
//       const createdAdvertisersGettingStartedSec = await AdvertisersGettingStartedSecModel.create(advertisersGettingStartedSecData);
//       const result = await AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersGettingStartedSec._id.toString());
//       expect(result?.title).toBe('Test Title');
//       expect(result?.subtitle).toBe('Test Subtitle');
//     });
//     it('should throw error when advertisers getting started section does not exist', async () => {
//       await expect(AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec()).rejects.toThrow('Advertisers getting started section not found');
//     });
//   });
//   describe('updateAdvertisersGettingStartedSec', () => {
//     it('should update advertisers getting started section successfully', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'Original Title',
//         subtitle: 'Original Subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test', 
//           title: 'Test Step', 
//           description: 'Test description', 
//           duration: '1 hour' 
//         }],
//       };
//       await AdvertisersGettingStartedSecModel.create(advertisersGettingStartedSecData);
//       const updateData = {
//         title: 'Updated Title',
//         subtitle: 'Updated Subtitle',
//       };
//       const result = await AdvertisersGettingStartedSecService.updateAdvertisersGettingStartedSec(updateData);
//       expect(result).toBeDefined();
//       expect(result?.title).toBe('Updated Title');
//       expect(result?.subtitle).toBe('Updated Subtitle');
//     });
//   });
//   describe('updateSteps', () => {
//     it('should update steps successfully', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test', 
//           title: 'Test Step', 
//           description: 'Test description', 
//           duration: '1 hour' 
//         }],
//       };
//       await AdvertisersGettingStartedSecModel.create(advertisersGettingStartedSecData);
//       const newSteps = [
//         {
//           stepNumber: '01',
//           icon: 'message-circle',
//           title: 'Discovery Call',
//           description: 'We analyze your niche, goals, and current marketing efforts',
//           duration: '30 min',
//         },
//         {
//           stepNumber: '02',
//           icon: 'lightbulb',
//           title: 'Strategy Development',
//           description: 'Custom advertising strategy tailored to your freelance business',
//           duration: '2-3 days',
//         },
//       ];
//       const result = await AdvertisersGettingStartedSecService.updateSteps(newSteps);
//       expect(result).toBeDefined();
//       expect(result?.steps).toHaveLength(2);
//       expect(result?.steps[0].title).toBe('Discovery Call');
//       expect(result?.steps[1].duration).toBe('2-3 days');
//     });
//   });
//   describe('deleteAdvertisersGettingStartedSec', () => {
//     it('should delete advertisers getting started section successfully', async () => {
//       const advertisersGettingStartedSecData = {
//         title: 'Test Title',
//         subtitle: 'Test Subtitle',
//         steps: [{ 
//           stepNumber: '01', 
//           icon: 'test', 
//           title: 'Test Step', 
//           description: 'Test description', 
//           duration: '1 hour' 
//         }],
//       };
//       const createdAdvertisersGettingStartedSec = await AdvertisersGettingStartedSecModel.create(advertisersGettingStartedSecData);
//       const result = await AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec();
//       expect(result).toBeDefined();
//       expect(result?._id.toString()).toBe(createdAdvertisersGettingStartedSec._id.toString());
//       const deletedAdvertisersGettingStartedSec = await AdvertisersGettingStartedSecModel.findById(createdAdvertisersGettingStartedSec._id);
//       expect(deletedAdvertisersGettingStartedSec).toBeNull();
//     });
//     it('should throw error when advertisers getting started section does not exist', async () => {
//       await expect(AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec()).rejects.toThrow('Advertisers getting started section not found');
//     });
//   });
// });
