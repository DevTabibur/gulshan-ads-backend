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
const advertisersCtaHeroSection_service_1 = require("./advertisersCtaHeroSection.service");
const advertisersCtaHeroSection_model_1 = __importDefault(require("./advertisersCtaHeroSection.model"));
(0, vitest_1.describe)('Advertisers CTA Hero Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersCtaHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersCtaHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAdvertisersCtaHeroSection', () => {
        (0, vitest_1.it)('should create a new advertisers CTA hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Ready to Scale Your Freelance Business?',
                subtitle: 'Join 200+ successful Advertisers who\'ve transformed their business with Gulshan Ads. Get your first campaign running in 24 hours with our expert team.',
                ctaButtons: [
                    {
                        text: 'Book Free Strategy Call',
                        link: '/book-call',
                        icon: 'calendar',
                        variant: 'primary',
                    },
                    {
                        text: 'View Pricing Plans',
                        link: '/pricing',
                        icon: 'file-text',
                        variant: 'secondary',
                    },
                ],
                benefits: [
                    { text: 'No setup fees' },
                    { text: 'Cancel anytime' },
                    { text: '30-day guarantee' },
                ],
            };
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(advertisersCtaHeroSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(advertisersCtaHeroSectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(advertisersCtaHeroSectionData.subtitle);
            (0, vitest_1.expect)(result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result.ctaButtons[0].text).toBe('Book Free Strategy Call');
            (0, vitest_1.expect)(result.ctaButtons[1].variant).toBe('secondary');
            (0, vitest_1.expect)(result.benefits).toHaveLength(3);
            (0, vitest_1.expect)(result.benefits[0].text).toBe('No setup fees');
        }));
        (0, vitest_1.it)('should throw error when trying to create second advertisers CTA hero section', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'First CTA Hero Section',
                subtitle: 'First subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(advertisersCtaHeroSectionData);
            const secondAdvertisersCtaHeroSectionData = {
                title: 'Second CTA Hero Section',
                subtitle: 'Second subtitle',
                ctaButtons: [{
                        text: 'Test Button 2',
                        link: '/test2',
                        icon: 'test2',
                        variant: 'secondary'
                    }],
                benefits: [{ text: 'Test benefit 2' }],
            };
            yield (0, vitest_1.expect)(advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(secondAdvertisersCtaHeroSectionData)).rejects.toThrow('Advertisers CTA hero section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAdvertisersCtaHeroSection', () => {
        (0, vitest_1.it)('should return advertisers CTA hero section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            const createdAdvertisersCtaHeroSection = yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersCtaHeroSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when advertisers CTA hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection()).rejects.toThrow('Advertisers CTA hero section not found');
        }));
    });
    (0, vitest_1.describe)('updateAdvertisersCtaHeroSection', () => {
        (0, vitest_1.it)('should update advertisers CTA hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateAdvertisersCtaHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateCTAButtons', () => {
        (0, vitest_1.it)('should update CTA buttons successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
            const newCTAButtons = [
                {
                    text: 'Updated Book Call',
                    link: '/updated-book-call',
                    icon: 'calendar',
                    variant: 'primary',
                },
                {
                    text: 'Updated View Pricing',
                    link: '/updated-pricing',
                    icon: 'file-text',
                    variant: 'secondary',
                },
            ];
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateCTAButtons(newCTAButtons);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons[0].text).toBe('Updated Book Call');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons[1].variant).toBe('secondary');
        }));
    });
    (0, vitest_1.describe)('updateBenefits', () => {
        (0, vitest_1.it)('should update benefits successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
            const newBenefits = [
                { text: 'Updated no setup fees' },
                { text: 'Updated cancel anytime' },
                { text: 'Updated 30-day guarantee' },
            ];
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.updateBenefits(newBenefits);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits).toHaveLength(3);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits[0].text).toBe('Updated no setup fees');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits[2].text).toBe('Updated 30-day guarantee');
        }));
    });
    (0, vitest_1.describe)('deleteAdvertisersCtaHeroSection', () => {
        (0, vitest_1.it)('should delete advertisers CTA hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersCtaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                benefits: [{ text: 'Test benefit' }],
            };
            const createdAdvertisersCtaHeroSection = yield advertisersCtaHeroSection_model_1.default.create(advertisersCtaHeroSectionData);
            const result = yield advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersCtaHeroSection._id.toString());
            const deletedAdvertisersCtaHeroSection = yield advertisersCtaHeroSection_model_1.default.findById(createdAdvertisersCtaHeroSection._id);
            (0, vitest_1.expect)(deletedAdvertisersCtaHeroSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when advertisers CTA hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersCtaHeroSection_service_1.AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection()).rejects.toThrow('Advertisers CTA hero section not found');
        }));
    });
});
