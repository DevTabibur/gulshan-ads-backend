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
const advertisersHeroSection_service_1 = require("./advertisersHeroSection.service");
const advertisersHeroSection_model_1 = __importDefault(require("./advertisersHeroSection.model"));
(0, vitest_1.describe)('Advertisers Hero Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAdvertisersHeroSection', () => {
        (0, vitest_1.it)('should create a new advertisers hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'Scale Your Freelance Business With Smart Ads',
                mainDescription: 'Stop chasing clients. Let them find you with our proven advertising strategies that have helped 10,000+ Advertisers grow their business by 300% on average.',
                ctaButtons: [
                    {
                        text: 'Start Growing Today →',
                        link: '/register',
                        type: 'primary',
                    },
                    {
                        text: 'View Case Studies',
                        link: '/case-studies',
                        type: 'secondary',
                    },
                ],
                rating: {
                    score: '4.9/5',
                    reviewCount: '2,500+ Advertisers',
                },
                campaignPerformance: {
                    title: 'Campaign Performance',
                    percentageChange: '+47% this month',
                    metrics: [
                        {
                            value: '$12.4K',
                            label: 'Revenue',
                        },
                        {
                            value: '156',
                            label: 'New Leads',
                        },
                    ],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [
                    {
                        value: '200+',
                        label: 'Active Advertisers',
                        icon: 'users',
                        iconColor: '#10B981',
                    },
                    {
                        value: '300%',
                        label: 'Average ROI',
                        icon: 'chart-up',
                        iconColor: '#3B82F6',
                    },
                    {
                        value: '$2M+',
                        label: 'Revenue Generated',
                        icon: 'dollar-sign',
                        iconColor: '#F59E0B',
                    },
                    {
                        value: '12/6',
                        label: 'Support Available',
                        icon: 'clock',
                        iconColor: '#EF4444',
                    },
                ],
            };
            const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.createAdvertisersHeroSection(advertisersHeroSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.mainTitle).toBe(advertisersHeroSectionData.mainTitle);
            (0, vitest_1.expect)(result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result.campaignPerformance.metrics).toHaveLength(2);
            (0, vitest_1.expect)(result.bottomStatistics).toHaveLength(4);
        }));
        (0, vitest_1.it)('should throw error when trying to create second advertisers hero section', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'First Advertisers Hero Section',
                mainDescription: 'First description',
                ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
                rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
                campaignPerformance: {
                    title: 'Campaign Performance',
                    percentageChange: '+47% this month',
                    metrics: [{ value: '$12.4K', label: 'Revenue' }],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
            };
            yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.createAdvertisersHeroSection(advertisersHeroSectionData);
            const secondAdvertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies 2',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'Second Advertisers Hero Section',
                mainDescription: 'Second description',
                ctaButtons: [{ text: 'Test 2', link: '/test2', type: 'primary' }],
                rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
                campaignPerformance: {
                    title: 'Campaign Performance 2',
                    percentageChange: '+47% this month',
                    metrics: [{ value: '$12.4K', label: 'Revenue' }],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
            };
            yield (0, vitest_1.expect)(advertisersHeroSection_service_1.AdvertisersHeroSectionService.createAdvertisersHeroSection(secondAdvertisersHeroSectionData)).rejects.toThrow('Advertisers hero section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAdvertisersHeroSection', () => {
        (0, vitest_1.it)('should return advertisers hero section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'Test Title',
                mainDescription: 'Test Description',
                ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
                rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
                campaignPerformance: {
                    title: 'Campaign Performance',
                    percentageChange: '+47% this month',
                    metrics: [{ value: '$12.4K', label: 'Revenue' }],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
            };
            const createdAdvertisersHeroSection = yield advertisersHeroSection_model_1.default.create(advertisersHeroSectionData);
            const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.getAdvertisersHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersHeroSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.mainTitle).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when advertisers hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersHeroSection_service_1.AdvertisersHeroSectionService.getAdvertisersHeroSection()).rejects.toThrow('Advertisers hero section not found');
        }));
    });
    (0, vitest_1.describe)('updateAdvertisersHeroSection', () => {
        (0, vitest_1.it)('should update advertisers hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'Original Title',
                mainDescription: 'Original Description',
                ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
                rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
                campaignPerformance: {
                    title: 'Campaign Performance',
                    percentageChange: '+47% this month',
                    metrics: [{ value: '$12.4K', label: 'Revenue' }],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
            };
            yield advertisersHeroSection_model_1.default.create(advertisersHeroSectionData);
            const updateData = {
                mainTitle: 'Updated Title',
                mainDescription: 'Updated Description',
            };
            const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.updateAdvertisersHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.mainTitle).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.mainDescription).toBe('Updated Description');
        }));
    });
    (0, vitest_1.describe)('deleteAdvertisersHeroSection', () => {
        (0, vitest_1.it)('should delete advertisers hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersHeroSectionData = {
                topPill: {
                    text: 'For Advertisers & Agencies',
                    icon: 'briefcase',
                    color: '#10B981',
                },
                mainTitle: 'Test Title',
                mainDescription: 'Test Description',
                ctaButtons: [{ text: 'Test', link: '/test', type: 'primary' }],
                rating: { score: '4.9/5', reviewCount: '2,500+ Advertisers' },
                campaignPerformance: {
                    title: 'Campaign Performance',
                    percentageChange: '+47% this month',
                    metrics: [{ value: '$12.4K', label: 'Revenue' }],
                    adPlatform: 'Facebook Ads',
                    adSpend: '$4.2K',
                },
                bottomStatistics: [{ value: '200+', label: 'Active Advertisers', icon: 'users' }],
            };
            const createdAdvertisersHeroSection = yield advertisersHeroSection_model_1.default.create(advertisersHeroSectionData);
            const result = yield advertisersHeroSection_service_1.AdvertisersHeroSectionService.deleteAdvertisersHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersHeroSection._id.toString());
            const deletedAdvertisersHeroSection = yield advertisersHeroSection_model_1.default.findById(createdAdvertisersHeroSection._id);
            (0, vitest_1.expect)(deletedAdvertisersHeroSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when advertisers hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersHeroSection_service_1.AdvertisersHeroSectionService.deleteAdvertisersHeroSection()).rejects.toThrow('Advertisers hero section not found');
        }));
    });
});
