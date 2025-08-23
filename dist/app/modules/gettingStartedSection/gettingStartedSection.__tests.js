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
const gettingStartedSection_service_1 = require("./gettingStartedSection.service");
const gettingStartedSection_model_1 = __importDefault(require("./gettingStartedSection.model"));
(0, vitest_1.describe)('Getting Started Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield gettingStartedSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield gettingStartedSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createGettingStartedSection', () => {
        (0, vitest_1.it)('should create a new getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gettingStartedSectionData = {
                title: 'How to Get Started with Gulshan Ads?',
                description: 'Launch your first multi-platform advertising campaign in just 4 simple steps. Our streamlined process gets you from signup to success in minutes, not hours.',
                steps: [
                    {
                        number: 1,
                        title: 'Create Your Account',
                        subtitle: 'Quick & Free Setup',
                        description: 'Register in under 2 minutes with our streamlined onboarding process. No setup fees, no hidden costs - just instant access to premium advertising platforms.',
                        features: ['Instant activation', 'No credit card required', 'Multi-platform access'],
                        iconColor: '#10B981',
                    },
                    {
                        number: 2,
                        title: 'Verify & Configure',
                        subtitle: 'Secure Account Setup',
                        description: 'Complete our quick verification process to ensure smooth ad delivery and account security. Our team pre-approves your setup to prevent any launch delays.',
                        features: ['Identity verification', 'Account optimization', 'Compliance check'],
                        iconColor: '#3B82F6',
                    },
                    {
                        number: 3,
                        title: 'Fund Your Campaigns',
                        subtitle: 'Flexible Payment Options',
                        description: 'Add funds instantly via card, bank transfer, or invoice. Our smart allocation system distributes your budget optimally across Meta, TikTok, and Telegram.',
                        features: ['Instant processing', 'Multi-currency support', 'Smart budget allocation'],
                        iconColor: '#10B981',
                    },
                    {
                        number: 4,
                        title: 'Launch & Optimize',
                        subtitle: 'Expert-Guided Success',
                        description: 'Go live with expert support every step of the way. Our certified specialists monitor, optimize, and scale your campaigns for maximum ROI across all platforms.',
                        features: ['24/7 monitoring', 'Performance optimization', 'Dedicated support'],
                        iconColor: '#3B82F6',
                    },
                ],
                ctaTitle: 'Ready to Transform Your Advertising?',
                ctaDescription: 'Join thousands of successful businesses and agencies who trust Gulshan Ads for their multi-platform advertising needs. Start your journey today!',
                ctaButtons: [
                    {
                        text: 'Start Free Account',
                        type: 'primary',
                        action: '/register',
                    },
                    {
                        text: 'Schedule Demo',
                        type: 'secondary',
                        action: '/demo',
                    },
                ],
            };
            const result = yield gettingStartedSection_service_1.GettingStartedSectionService.createGettingStartedSection(gettingStartedSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(gettingStartedSectionData.title);
            (0, vitest_1.expect)(result.steps).toHaveLength(4);
            (0, vitest_1.expect)(result.ctaButtons).toHaveLength(2);
        }));
        (0, vitest_1.it)('should throw error when trying to create second getting started section', () => __awaiter(void 0, void 0, void 0, function* () {
            const gettingStartedSectionData = {
                title: 'First Getting Started Section',
                description: 'First description',
                steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
                ctaTitle: 'Test CTA',
                ctaDescription: 'Test CTA description',
                ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
            };
            yield gettingStartedSection_service_1.GettingStartedSectionService.createGettingStartedSection(gettingStartedSectionData);
            const secondGettingStartedSectionData = {
                title: 'Second Getting Started Section',
                description: 'Second description',
                steps: [{ number: 1, title: 'Test 2', subtitle: 'Test 2', description: 'Test 2', features: ['test2'], iconColor: '#000000' }],
                ctaTitle: 'Test CTA 2',
                ctaDescription: 'Test CTA description 2',
                ctaButtons: [{ text: 'Test 2', type: 'primary', action: '/test2' }],
            };
            yield (0, vitest_1.expect)(gettingStartedSection_service_1.GettingStartedSectionService.createGettingStartedSection(secondGettingStartedSectionData)).rejects.toThrow('Getting started section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getGettingStartedSection', () => {
        (0, vitest_1.it)('should return getting started section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const gettingStartedSectionData = {
                title: 'Test Title',
                description: 'Test Description',
                steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
                ctaTitle: 'Test CTA',
                ctaDescription: 'Test CTA description',
                ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
            };
            const createdGettingStartedSection = yield gettingStartedSection_model_1.default.create(gettingStartedSectionData);
            const result = yield gettingStartedSection_service_1.GettingStartedSectionService.getGettingStartedSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdGettingStartedSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when getting started section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(gettingStartedSection_service_1.GettingStartedSectionService.getGettingStartedSection()).rejects.toThrow('Getting started section not found');
        }));
    });
    (0, vitest_1.describe)('updateGettingStartedSection', () => {
        (0, vitest_1.it)('should update getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gettingStartedSectionData = {
                title: 'Original Title',
                description: 'Original Description',
                steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
                ctaTitle: 'Test CTA',
                ctaDescription: 'Test CTA description',
                ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
            };
            yield gettingStartedSection_model_1.default.create(gettingStartedSectionData);
            const updateData = {
                title: 'Updated Title',
                description: 'Updated Description',
            };
            const result = yield gettingStartedSection_service_1.GettingStartedSectionService.updateGettingStartedSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.description).toBe('Updated Description');
        }));
    });
    (0, vitest_1.describe)('deleteGettingStartedSection', () => {
        (0, vitest_1.it)('should delete getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gettingStartedSectionData = {
                title: 'Test Title',
                description: 'Test Description',
                steps: [{ number: 1, title: 'Test', subtitle: 'Test', description: 'Test', features: ['test'], iconColor: '#000000' }],
                ctaTitle: 'Test CTA',
                ctaDescription: 'Test CTA description',
                ctaButtons: [{ text: 'Test', type: 'primary', action: '/test' }],
            };
            const createdGettingStartedSection = yield gettingStartedSection_model_1.default.create(gettingStartedSectionData);
            const result = yield gettingStartedSection_service_1.GettingStartedSectionService.deleteGettingStartedSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdGettingStartedSection._id.toString());
            const deletedGettingStartedSection = yield gettingStartedSection_model_1.default.findById(createdGettingStartedSection._id);
            (0, vitest_1.expect)(deletedGettingStartedSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when getting started section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(gettingStartedSection_service_1.GettingStartedSectionService.deleteGettingStartedSection()).rejects.toThrow('Getting started section not found');
        }));
    });
});
