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
const pricingSection_service_1 = require("./pricingSection.service");
const pricingSection_model_1 = __importDefault(require("./pricingSection.model"));
(0, vitest_1.describe)('Pricing Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield pricingSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield pricingSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createPricingSection', () => {
        (0, vitest_1.it)('should create a new pricing section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'Choose Your Growth Plan',
                subtitle: 'Flexible packages designed to scale with your freelance business, from startup to enterprise level.',
                plans: [
                    {
                        icon: 'globe',
                        title: 'Multi-Platform Campaigns',
                        price: 'From $299/mo',
                        description: 'Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all.',
                        features: [
                            { text: 'Cross-platform optimization' },
                            { text: 'Weekly reporting' },
                            { text: 'Unified reporting' },
                            { text: 'Budget friendly campaign' },
                        ],
                        ctaText: 'Get Started',
                        ctaLink: '/register',
                        isPopular: false,
                    },
                    {
                        icon: 'rocket',
                        title: 'Growth Acceleration',
                        price: 'From $499/mo',
                        description: 'Scale your freelance business with proven advertising strategies.',
                        features: [
                            { text: 'Lead generation' },
                            { text: 'Brand awareness' },
                            { text: 'Client acquisition' },
                        ],
                        ctaText: 'Get Started',
                        ctaLink: '/register',
                        isPopular: true,
                        popularTag: 'Most Popular',
                    },
                    {
                        icon: 'shield',
                        title: 'Premium Management',
                        price: 'From $999/mo',
                        description: 'White-glove service with dedicated account manager.',
                        features: [
                            { text: '1-on-1 strategy calls' },
                            { text: 'Custom creatives' },
                            { text: 'Priority support' },
                        ],
                        ctaText: 'Get Started',
                        ctaLink: '/register',
                        isPopular: false,
                    },
                ],
            };
            const result = yield pricingSection_service_1.PricingSectionService.createPricingSection(pricingSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(pricingSectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(pricingSectionData.subtitle);
            (0, vitest_1.expect)(result.plans).toHaveLength(3);
            (0, vitest_1.expect)(result.plans[0].title).toBe('Multi-Platform Campaigns');
            (0, vitest_1.expect)(result.plans[1].isPopular).toBe(true);
            (0, vitest_1.expect)(result.plans[1].popularTag).toBe('Most Popular');
            (0, vitest_1.expect)(result.plans[2].features).toHaveLength(3);
        }));
        (0, vitest_1.it)('should throw error when trying to create second pricing section', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'First Pricing Section',
                subtitle: 'First subtitle',
                plans: [{
                        icon: 'test',
                        title: 'Test Plan',
                        price: '$100/mo',
                        description: 'Test description',
                        features: [{ text: 'Test feature' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test'
                    }],
            };
            yield pricingSection_service_1.PricingSectionService.createPricingSection(pricingSectionData);
            const secondPricingSectionData = {
                title: 'Second Pricing Section',
                subtitle: 'Second subtitle',
                plans: [{
                        icon: 'test2',
                        title: 'Test Plan 2',
                        price: '$200/mo',
                        description: 'Test description 2',
                        features: [{ text: 'Test feature 2' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test2'
                    }],
            };
            yield (0, vitest_1.expect)(pricingSection_service_1.PricingSectionService.createPricingSection(secondPricingSectionData)).rejects.toThrow('Pricing section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getPricingSection', () => {
        (0, vitest_1.it)('should return pricing section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                plans: [{
                        icon: 'test',
                        title: 'Test Plan',
                        price: '$100/mo',
                        description: 'Test description',
                        features: [{ text: 'Test feature' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test'
                    }],
            };
            const createdPricingSection = yield pricingSection_model_1.default.create(pricingSectionData);
            const result = yield pricingSection_service_1.PricingSectionService.getPricingSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdPricingSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when pricing section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(pricingSection_service_1.PricingSectionService.getPricingSection()).rejects.toThrow('Pricing section not found');
        }));
    });
    (0, vitest_1.describe)('updatePricingSection', () => {
        (0, vitest_1.it)('should update pricing section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                plans: [{
                        icon: 'test',
                        title: 'Test Plan',
                        price: '$100/mo',
                        description: 'Test description',
                        features: [{ text: 'Test feature' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test'
                    }],
            };
            yield pricingSection_model_1.default.create(pricingSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield pricingSection_service_1.PricingSectionService.updatePricingSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updatePlans', () => {
        (0, vitest_1.it)('should update plans successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                plans: [{
                        icon: 'test',
                        title: 'Test Plan',
                        price: '$100/mo',
                        description: 'Test description',
                        features: [{ text: 'Test feature' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test'
                    }],
            };
            yield pricingSection_model_1.default.create(pricingSectionData);
            const newPlans = [
                {
                    icon: 'globe',
                    title: 'Multi-Platform Campaigns',
                    price: 'From $299/mo',
                    description: 'Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all.',
                    features: [
                        { text: 'Cross-platform optimization' },
                        { text: 'Weekly reporting' },
                    ],
                    ctaText: 'Get Started',
                    ctaLink: '/register',
                    isPopular: false,
                },
                {
                    icon: 'rocket',
                    title: 'Growth Acceleration',
                    price: 'From $499/mo',
                    description: 'Scale your freelance business with proven advertising strategies.',
                    features: [
                        { text: 'Lead generation' },
                        { text: 'Brand awareness' },
                    ],
                    ctaText: 'Get Started',
                    ctaLink: '/register',
                    isPopular: true,
                    popularTag: 'Most Popular',
                },
            ];
            const result = yield pricingSection_service_1.PricingSectionService.updatePlans(newPlans);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.plans).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.plans[0].title).toBe('Multi-Platform Campaigns');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.plans[1].isPopular).toBe(true);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.plans[1].popularTag).toBe('Most Popular');
        }));
    });
    (0, vitest_1.describe)('deletePricingSection', () => {
        (0, vitest_1.it)('should delete pricing section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const pricingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                plans: [{
                        icon: 'test',
                        title: 'Test Plan',
                        price: '$100/mo',
                        description: 'Test description',
                        features: [{ text: 'Test feature' }],
                        ctaText: 'Get Started',
                        ctaLink: '/test'
                    }],
            };
            const createdPricingSection = yield pricingSection_model_1.default.create(pricingSectionData);
            const result = yield pricingSection_service_1.PricingSectionService.deletePricingSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdPricingSection._id.toString());
            const deletedPricingSection = yield pricingSection_model_1.default.findById(createdPricingSection._id);
            (0, vitest_1.expect)(deletedPricingSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when pricing section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(pricingSection_service_1.PricingSectionService.deletePricingSection()).rejects.toThrow('Pricing section not found');
        }));
    });
});
