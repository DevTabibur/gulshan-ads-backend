"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const advertisersStorySection_service_1 = require("./advertisersStorySection.service");
const advertisersStorySection_model_1 = __importDefault(require("./advertisersStorySection.model"));
(0, vitest_1.describe)('Advertisers Story Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersStorySection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersStorySection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAdvertisersStorySection', () => {
        (0, vitest_1.it)('should create a new advertisers story section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'Success Stories from Real Advertisers',
                subtitle: 'See how Gulshan Ads has transformed freelance businesses across different industries.',
                testimonials: [
                    {
                        rating: 5,
                        testimonialText: 'Gulshan Ads transformed my freelance business. I went from struggling to find clients to having a 3-month waiting list!',
                        reviewerName: 'Pijus',
                        reviewerTitle: 'Digital Marketer',
                        impactMetric: '+400% revenue',
                        profileImage: '/images/pijus.jpg',
                    },
                    {
                        rating: 5,
                        testimonialText: 'The ROI is incredible. Every dollar I spend on ads brings back $4-5 in new client revenue. Game changer!',
                        reviewerName: 'MD Raju',
                        reviewerTitle: 'Business Owner',
                        impactMetric: '+250% clients',
                        profileImage: '/images/raju.jpg',
                    },
                    {
                        rating: 5,
                        testimonialText: 'Finally, I can focus on what I love - writing - while Gulshan Ads handles all my marketing. Best decision ever!',
                        reviewerName: 'Amir Hossain',
                        reviewerTitle: 'Business Owner',
                        impactMetric: '+180% income',
                        profileImage: '/images/amir.jpg',
                    },
                ],
            };
            const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.createAdvertisersStorySection(advertisersStorySectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(advertisersStorySectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(advertisersStorySectionData.subtitle);
            (0, vitest_1.expect)(result.testimonials).toHaveLength(3);
            (0, vitest_1.expect)(result.testimonials[0].reviewerName).toBe('Pijus');
            (0, vitest_1.expect)(result.testimonials[1].impactMetric).toBe('+250% clients');
            (0, vitest_1.expect)(result.testimonials[2].rating).toBe(5);
        }));
        (0, vitest_1.it)('should throw error when trying to create second advertisers story section', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'First Advertisers Story Section',
                subtitle: 'First subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial',
                        reviewerName: 'Test User',
                        reviewerTitle: 'Test Title',
                        impactMetric: '+100% growth'
                    }],
            };
            yield advertisersStorySection_service_1.AdvertisersStorySectionService.createAdvertisersStorySection(advertisersStorySectionData);
            const secondAdvertisersStorySectionData = {
                title: 'Second Advertisers Story Section',
                subtitle: 'Second subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial 2',
                        reviewerName: 'Test User 2',
                        reviewerTitle: 'Test Title 2',
                        impactMetric: '+200% growth'
                    }],
            };
            yield (0, vitest_1.expect)(advertisersStorySection_service_1.AdvertisersStorySectionService.createAdvertisersStorySection(secondAdvertisersStorySectionData)).rejects.toThrow('Advertisers story section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAdvertisersStorySection', () => {
        (0, vitest_1.it)('should return advertisers story section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial',
                        reviewerName: 'Test User',
                        reviewerTitle: 'Test Title',
                        impactMetric: '+100% growth'
                    }],
            };
            const createdAdvertisersStorySection = yield advertisersStorySection_model_1.default.create(advertisersStorySectionData);
            const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.getAdvertisersStorySection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersStorySection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when advertisers story section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersStorySection_service_1.AdvertisersStorySectionService.getAdvertisersStorySection()).rejects.toThrow('Advertisers story section not found');
        }));
    });
    (0, vitest_1.describe)('updateAdvertisersStorySection', () => {
        (0, vitest_1.it)('should update advertisers story section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial',
                        reviewerName: 'Test User',
                        reviewerTitle: 'Test Title',
                        impactMetric: '+100% growth'
                    }],
            };
            yield advertisersStorySection_model_1.default.create(advertisersStorySectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.updateAdvertisersStorySection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateTestimonials', () => {
        (0, vitest_1.it)('should update testimonials successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial',
                        reviewerName: 'Test User',
                        reviewerTitle: 'Test Title',
                        impactMetric: '+100% growth'
                    }],
            };
            yield advertisersStorySection_model_1.default.create(advertisersStorySectionData);
            const newTestimonials = [
                {
                    rating: 5,
                    testimonialText: 'Updated testimonial from Pijus',
                    reviewerName: 'Pijus',
                    reviewerTitle: 'Digital Marketer',
                    impactMetric: '+400% revenue',
                    profileImage: '/images/pijus.jpg',
                },
                {
                    rating: 5,
                    testimonialText: 'Updated testimonial from Raju',
                    reviewerName: 'MD Raju',
                    reviewerTitle: 'Business Owner',
                    impactMetric: '+250% clients',
                    profileImage: '/images/raju.jpg',
                },
            ];
            const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.updateTestimonials(newTestimonials);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.testimonials).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.testimonials[0].reviewerName).toBe('Pijus');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.testimonials[1].impactMetric).toBe('+250% clients');
        }));
    });
    (0, vitest_1.describe)('deleteAdvertisersStorySection', () => {
        (0, vitest_1.it)('should delete advertisers story section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersStorySectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                testimonials: [{
                        rating: 5,
                        testimonialText: 'Test testimonial',
                        reviewerName: 'Test User',
                        reviewerTitle: 'Test Title',
                        impactMetric: '+100% growth'
                    }],
            };
            const createdAdvertisersStorySection = yield advertisersStorySection_model_1.default.create(advertisersStorySectionData);
            const result = yield advertisersStorySection_service_1.AdvertisersStorySectionService.deleteAdvertisersStorySection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersStorySection._id.toString());
            const deletedAdvertisersStorySection = yield advertisersStorySection_model_1.default.findById(createdAdvertisersStorySection._id);
            (0, vitest_1.expect)(deletedAdvertisersStorySection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when advertisers story section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersStorySection_service_1.AdvertisersStorySectionService.deleteAdvertisersStorySection()).rejects.toThrow('Advertisers story section not found');
        }));
    });
});
