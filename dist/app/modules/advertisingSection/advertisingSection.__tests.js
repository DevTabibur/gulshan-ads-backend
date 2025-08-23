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
const advertisingSection_service_1 = require("./advertisingSection.service");
const advertisingSection_model_1 = __importDefault(require("./advertisingSection.model"));
(0, vitest_1.describe)('Advertising Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisingSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisingSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAdvertisingSection', () => {
        (0, vitest_1.it)('should create a new advertising section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Multi-Platform Advertising for Maximum Impact',
                subtitle: 'Reach your audience across Meta, TikTok, and Telegram with our unified advertising platform. Advanced targeting meets simplified management for unprecedented results.',
                keyFeatures: [
                    {
                        text: 'Minimum budget - $100',
                        icon: 'clock',
                        color: '#F59E0B',
                    },
                    {
                        text: 'Zero commission fees',
                        icon: 'checkmark',
                        color: '#10B981',
                    },
                    {
                        text: 'Global currency support',
                        icon: 'globe',
                        color: '#3B82F6',
                    },
                ],
                serviceCards: [
                    {
                        title: 'Multi-Platform Targeting',
                        description: 'Run synchronized campaigns across Meta, TikTok, and Telegram with unified audience targeting and budget optimization.',
                        icon: 'checkmark',
                        iconColor: '#10B981',
                    },
                    {
                        title: 'AI-Powered Optimization',
                        description: 'Our intelligent algorithms automatically optimize your ad spend across platforms to maximize ROI and reach your target audience effectively.',
                        icon: 'target',
                        iconColor: '#3B82F6',
                    },
                    {
                        title: 'Lightning Fast Setup',
                        description: 'Launch your campaigns in under 5 minutes with our streamlined interface. Pay securely with card or invoice - no hidden fees.',
                        icon: 'lightning',
                        iconColor: '#10B981',
                    },
                    {
                        title: '3x Better ROI',
                        description: 'Our clients see 3x better return on ad spend compared to single-platform campaigns',
                        iconColor: '#10B981',
                        socialMediaIcons: ['facebook', 'tiktok', 'telegram'],
                        testimonial: {
                            authorName: 'Gulshan Ads Expert',
                            authorPosition: 'Campaign Specialist',
                            authorInitials: 'AH',
                        },
                    },
                ],
                statistics: [
                    {
                        value: '250%',
                        label: 'Average ROI Increase',
                        color: '#10B981',
                    },
                    {
                        value: '5M+',
                        label: 'People Reached Monthly',
                        color: '#3B82F6',
                    },
                    {
                        value: '48h',
                        label: 'Average Setup Time',
                        color: '#10B981',
                    },
                    {
                        value: '99.9%',
                        label: 'Platform Uptime',
                        color: '#3B82F6',
                    },
                ],
                ctaButtons: [
                    {
                        text: 'Start Your Campaign',
                        type: 'primary',
                        color: '#10B981',
                        action: 'start-campaign',
                    },
                    {
                        text: 'Learn More',
                        type: 'secondary',
                        color: '#065F46',
                        action: 'learn-more',
                    },
                ],
            };
            const result = yield advertisingSection_service_1.AdvertisingSectionService.createAdvertisingSection(advertisingSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(advertisingSectionData.title);
            (0, vitest_1.expect)(result.keyFeatures).toHaveLength(3);
            (0, vitest_1.expect)(result.serviceCards).toHaveLength(4);
            (0, vitest_1.expect)(result.statistics).toHaveLength(4);
            (0, vitest_1.expect)(result.ctaButtons).toHaveLength(2);
        }));
        (0, vitest_1.it)('should throw error when trying to create second advertising section', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'First Advertising Section',
                subtitle: 'First subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_service_1.AdvertisingSectionService.createAdvertisingSection(advertisingSectionData);
            const secondAdvertisingSectionData = {
                title: 'Second Advertising Section',
                subtitle: 'Second subtitle',
                keyFeatures: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
                serviceCards: [{ title: 'Card 2', description: 'Desc 2', icon: 'icon2', iconColor: '#000000' }],
                statistics: [{ value: '200+', label: 'Test 2', color: '#000000' }],
                ctaButtons: [{ text: 'Button 2', type: 'secondary', color: '#000000', action: 'test2' }],
            };
            yield (0, vitest_1.expect)(advertisingSection_service_1.AdvertisingSectionService.createAdvertisingSection(secondAdvertisingSectionData)).rejects.toThrow('Advertising section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAdvertisingSection', () => {
        (0, vitest_1.it)('should return advertising section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            const createdAdvertisingSection = yield advertisingSection_model_1.default.create(advertisingSectionData);
            const result = yield advertisingSection_service_1.AdvertisingSectionService.getAdvertisingSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisingSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when advertising section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisingSection_service_1.AdvertisingSectionService.getAdvertisingSection()).rejects.toThrow('Advertising section not found');
        }));
    });
    (0, vitest_1.describe)('updateAdvertisingSection', () => {
        (0, vitest_1.it)('should update advertising section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_model_1.default.create(advertisingSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield advertisingSection_service_1.AdvertisingSectionService.updateAdvertisingSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateKeyFeatures', () => {
        (0, vitest_1.it)('should update key features successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_model_1.default.create(advertisingSectionData);
            const newFeatures = [
                { text: 'New Feature 1', icon: 'new-icon1', color: '#FF0000' },
                { text: 'New Feature 2', icon: 'new-icon2', color: '#00FF00' },
            ];
            const result = yield advertisingSection_service_1.AdvertisingSectionService.updateKeyFeatures(newFeatures);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.keyFeatures).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.keyFeatures[0].text).toBe('New Feature 1');
        }));
    });
    (0, vitest_1.describe)('updateServiceCards', () => {
        (0, vitest_1.it)('should update service cards successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_model_1.default.create(advertisingSectionData);
            const newCards = [
                { title: 'New Card 1', description: 'New Desc 1', icon: 'new-icon1', iconColor: '#FF0000' },
                { title: 'New Card 2', description: 'New Desc 2', icon: 'new-icon2', iconColor: '#00FF00' },
            ];
            const result = yield advertisingSection_service_1.AdvertisingSectionService.updateServiceCards(newCards);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.serviceCards).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.serviceCards[0].title).toBe('New Card 1');
        }));
    });
    (0, vitest_1.describe)('updateStatistics', () => {
        (0, vitest_1.it)('should update statistics successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_model_1.default.create(advertisingSectionData);
            const newStatistics = [
                { value: '500+', label: 'New Stat 1', color: '#FF0000' },
                { value: '1M+', label: 'New Stat 2', color: '#00FF00' },
            ];
            const result = yield advertisingSection_service_1.AdvertisingSectionService.updateStatistics(newStatistics);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics[0].value).toBe('500+');
        }));
    });
    (0, vitest_1.describe)('updateCTAButtons', () => {
        (0, vitest_1.it)('should update CTA buttons successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            yield advertisingSection_model_1.default.create(advertisingSectionData);
            const newButtons = [
                { text: 'New Button 1', type: 'primary', color: '#FF0000', action: 'new-action1' },
                { text: 'New Button 2', type: 'secondary', color: '#00FF00', action: 'new-action2' },
            ];
            const result = yield advertisingSection_service_1.AdvertisingSectionService.updateCTAButtons(newButtons);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons[0].text).toBe('New Button 1');
        }));
    });
    (0, vitest_1.describe)('deleteAdvertisingSection', () => {
        (0, vitest_1.it)('should delete advertising section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisingSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                statistics: [{ value: '100+', label: 'Test', color: '#000000' }],
                ctaButtons: [{ text: 'Button 1', type: 'primary', color: '#000000', action: 'test' }],
            };
            const createdAdvertisingSection = yield advertisingSection_model_1.default.create(advertisingSectionData);
            const result = yield advertisingSection_service_1.AdvertisingSectionService.deleteAdvertisingSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisingSection._id.toString());
            const deletedAdvertisingSection = yield advertisingSection_model_1.default.findById(createdAdvertisingSection._id);
            (0, vitest_1.expect)(deletedAdvertisingSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when advertising section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisingSection_service_1.AdvertisingSectionService.deleteAdvertisingSection()).rejects.toThrow('Advertising section not found');
        }));
    });
});
