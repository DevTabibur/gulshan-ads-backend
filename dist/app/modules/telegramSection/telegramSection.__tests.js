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
const telegramSection_service_1 = require("./telegramSection.service");
const telegramSection_model_1 = __importDefault(require("./telegramSection.model"));
(0, vitest_1.describe)('Telegram Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield telegramSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield telegramSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createTelegramSection', () => {
        (0, vitest_1.it)('should create a new telegram section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const telegramSectionData = {
                title: 'Telegram: Untapped Advertising Goldmine',
                subtitle: 'Reach highly engaged audiences through Telegram\'s unique advertising formats. Drive traffic to your channels, boost website visits, and connect directly with customers in their preferred messaging app.',
                keyFeatures: [
                    { text: 'Precision targeting with 900M+ active users', icon: 'target', color: '#10B981' },
                    { text: 'Direct customer engagement & instant feedback', icon: 'chat-bubble', color: '#3B82F6' },
                    { text: 'Higher conversion rates than traditional ads', icon: 'trending-up', color: '#EF4444' },
                ],
                pricingTitle: 'Agency-Friendly Pricing',
                pricingPoints: [
                    { text: 'Minimum budget: $200 per campaign', icon: 'check' },
                    { text: 'Flexible commission: 15% - 25%', icon: 'check' },
                    { text: 'White-label dashboard available', icon: 'check' },
                ],
                ctaButton: {
                    text: 'Launch Telegram Ads',
                    color: '#3B82F6',
                },
                chatInterface: {
                    channelName: 'Gulshan Ads Agency',
                    channelSubscribers: '1.2K subscribers',
                    messages: [
                        {
                            sender: 'AH Gulshan Ads',
                            timestamp: '2:30 PM',
                            content: 'New case study: How we increased ROI by 340% using cross-platform targeting strategies',
                            emoji: '🚀',
                            engagement: {
                                likes: '124',
                                comments: '23',
                                views: '1.2K',
                            },
                        },
                        {
                            sender: 'AH Gulshan Ads',
                            timestamp: '2:45 PM',
                            content: 'Pro tip: Telegram ads have 3x higher engagement rates compared to traditional display ads',
                            emoji: '💡',
                            button: {
                                text: 'Learn More →',
                                color: '#10B981',
                            },
                        },
                    ],
                    sponsoredAd: {
                        label: 'Sponsored',
                        content: 'Scale Your Agency with Gulshan',
                    },
                },
                futureBanner: {
                    title: 'The Future of Messaging Advertising',
                    description: 'Telegram advertising is revolutionizing how agencies connect with audiences. With native ad formats, precise targeting, and unmatched engagement rates, it\'s the platform your competitors haven\'t discovered yet.',
                    icon: 'lightning',
                    gradientColors: ['#3B82F6', '#1D4ED8', '#1E40AF'],
                },
            };
            const result = yield telegramSection_service_1.TelegramSectionService.createTelegramSection(telegramSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(telegramSectionData.title);
            (0, vitest_1.expect)(result.keyFeatures).toHaveLength(3);
            (0, vitest_1.expect)(result.pricingPoints).toHaveLength(3);
            (0, vitest_1.expect)(result.chatInterface.messages).toHaveLength(2);
            (0, vitest_1.expect)(result.futureBanner.gradientColors).toHaveLength(3);
        }));
        (0, vitest_1.it)('should throw error when trying to create second telegram section', () => __awaiter(void 0, void 0, void 0, function* () {
            const telegramSectionData = {
                title: 'First Telegram Section',
                subtitle: 'First subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                pricingTitle: 'Pricing Title',
                pricingPoints: [{ text: 'Point 1', icon: 'check' }],
                ctaButton: { text: 'Button', color: '#000000' },
                chatInterface: {
                    channelName: 'Test Channel',
                    channelSubscribers: '1K subscribers',
                    messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
                    sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
                },
                futureBanner: {
                    title: 'Test Banner',
                    description: 'Test description',
                    icon: 'test',
                    gradientColors: ['#000000', '#FFFFFF'],
                },
            };
            yield telegramSection_service_1.TelegramSectionService.createTelegramSection(telegramSectionData);
            const secondTelegramSectionData = {
                title: 'Second Telegram Section',
                subtitle: 'Second subtitle',
                keyFeatures: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
                pricingTitle: 'Pricing Title 2',
                pricingPoints: [{ text: 'Point 2', icon: 'check' }],
                ctaButton: { text: 'Button 2', color: '#000000' },
                chatInterface: {
                    channelName: 'Test Channel 2',
                    channelSubscribers: '2K subscribers',
                    messages: [{ sender: 'Test 2', timestamp: '12:00 PM', content: 'Test message 2' }],
                    sponsoredAd: { label: 'Sponsored', content: 'Test Ad 2' },
                },
                futureBanner: {
                    title: 'Test Banner 2',
                    description: 'Test description 2',
                    icon: 'test2',
                    gradientColors: ['#000000', '#FFFFFF'],
                },
            };
            yield (0, vitest_1.expect)(telegramSection_service_1.TelegramSectionService.createTelegramSection(secondTelegramSectionData)).rejects.toThrow('Telegram section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getTelegramSection', () => {
        (0, vitest_1.it)('should return telegram section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const telegramSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                pricingTitle: 'Pricing Title',
                pricingPoints: [{ text: 'Point 1', icon: 'check' }],
                ctaButton: { text: 'Button', color: '#000000' },
                chatInterface: {
                    channelName: 'Test Channel',
                    channelSubscribers: '1K subscribers',
                    messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
                    sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
                },
                futureBanner: {
                    title: 'Test Banner',
                    description: 'Test description',
                    icon: 'test',
                    gradientColors: ['#000000', '#FFFFFF'],
                },
            };
            const createdTelegramSection = yield telegramSection_model_1.default.create(telegramSectionData);
            const result = yield telegramSection_service_1.TelegramSectionService.getTelegramSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdTelegramSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when telegram section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(telegramSection_service_1.TelegramSectionService.getTelegramSection()).rejects.toThrow('Telegram section not found');
        }));
    });
    (0, vitest_1.describe)('updateTelegramSection', () => {
        (0, vitest_1.it)('should update telegram section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const telegramSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                pricingTitle: 'Original Pricing Title',
                pricingPoints: [{ text: 'Point 1', icon: 'check' }],
                ctaButton: { text: 'Original Button', color: '#000000' },
                chatInterface: {
                    channelName: 'Original Channel',
                    channelSubscribers: '1K subscribers',
                    messages: [{ sender: 'Original', timestamp: '12:00 PM', content: 'Original message' }],
                    sponsoredAd: { label: 'Sponsored', content: 'Original Ad' },
                },
                futureBanner: {
                    title: 'Original Banner',
                    description: 'Original description',
                    icon: 'original',
                    gradientColors: ['#000000', '#FFFFFF'],
                },
            };
            yield telegramSection_model_1.default.create(telegramSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield telegramSection_service_1.TelegramSectionService.updateTelegramSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('deleteTelegramSection', () => {
        (0, vitest_1.it)('should delete telegram section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const telegramSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                keyFeatures: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                pricingTitle: 'Pricing Title',
                pricingPoints: [{ text: 'Point 1', icon: 'check' }],
                ctaButton: { text: 'Button', color: '#000000' },
                chatInterface: {
                    channelName: 'Test Channel',
                    channelSubscribers: '1K subscribers',
                    messages: [{ sender: 'Test', timestamp: '12:00 PM', content: 'Test message' }],
                    sponsoredAd: { label: 'Sponsored', content: 'Test Ad' },
                },
                futureBanner: {
                    title: 'Test Banner',
                    description: 'Test description',
                    icon: 'test',
                    gradientColors: ['#000000', '#FFFFFF'],
                },
            };
            const createdTelegramSection = yield telegramSection_model_1.default.create(telegramSectionData);
            const result = yield telegramSection_service_1.TelegramSectionService.deleteTelegramSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdTelegramSection._id.toString());
            const deletedTelegramSection = yield telegramSection_model_1.default.findById(createdTelegramSection._id);
            (0, vitest_1.expect)(deletedTelegramSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when telegram section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(telegramSection_service_1.TelegramSectionService.deleteTelegramSection()).rejects.toThrow('Telegram section not found');
        }));
    });
});
