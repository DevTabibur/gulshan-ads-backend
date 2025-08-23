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
const whyChooseUsSection_service_1 = require("./whyChooseUsSection.service");
const whyChooseUsSection_model_1 = __importDefault(require("./whyChooseUsSection.model"));
(0, vitest_1.describe)('Why Choose Us Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield whyChooseUsSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield whyChooseUsSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createWhyChooseUsSection', () => {
        (0, vitest_1.it)('should create a new why choose us section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'Why Advertisers Choose Gulshan Ads',
                subtitle: 'Join thousands of successful Advertisers who\'ve transformed their business with our proven advertising solutions.',
                benefits: [
                    {
                        icon: 'target',
                        title: 'Precision Targeting',
                        description: 'Reach your ideal clients with laser-focused targeting across all major platforms',
                        iconColor: '#10B981',
                    },
                    {
                        icon: 'zap',
                        title: 'Lightning Fast Setup',
                        description: 'Get your campaigns running in under 24 hours with our streamlined process',
                        iconColor: '#3B82F6',
                    },
                    {
                        icon: 'shield',
                        title: 'Expert Management',
                        description: 'Our certified specialists handle everything while you focus on your craft',
                        iconColor: '#8B5CF6',
                    },
                    {
                        icon: 'bar-chart',
                        title: 'Real-time Analytics',
                        description: 'Track performance with detailed insights and optimize for maximum results',
                        iconColor: '#EC4899',
                    },
                ],
            };
            const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.createWhyChooseUsSection(whyChooseUsSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(whyChooseUsSectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(whyChooseUsSectionData.subtitle);
            (0, vitest_1.expect)(result.benefits).toHaveLength(4);
            (0, vitest_1.expect)(result.benefits[0].title).toBe('Precision Targeting');
            (0, vitest_1.expect)(result.benefits[1].iconColor).toBe('#3B82F6');
        }));
        (0, vitest_1.it)('should throw error when trying to create second why choose us section', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'First Why Choose Us Section',
                subtitle: 'First subtitle',
                benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
            };
            yield whyChooseUsSection_service_1.WhyChooseUsSectionService.createWhyChooseUsSection(whyChooseUsSectionData);
            const secondWhyChooseUsSectionData = {
                title: 'Second Why Choose Us Section',
                subtitle: 'Second subtitle',
                benefits: [{ icon: 'test2', title: 'Test 2', description: 'Test 2', iconColor: '#000000' }],
            };
            yield (0, vitest_1.expect)(whyChooseUsSection_service_1.WhyChooseUsSectionService.createWhyChooseUsSection(secondWhyChooseUsSectionData)).rejects.toThrow('Why choose us section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getWhyChooseUsSection', () => {
        (0, vitest_1.it)('should return why choose us section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
            };
            const createdWhyChooseUsSection = yield whyChooseUsSection_model_1.default.create(whyChooseUsSectionData);
            const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.getWhyChooseUsSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdWhyChooseUsSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when why choose us section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(whyChooseUsSection_service_1.WhyChooseUsSectionService.getWhyChooseUsSection()).rejects.toThrow('Why choose us section not found');
        }));
    });
    (0, vitest_1.describe)('updateWhyChooseUsSection', () => {
        (0, vitest_1.it)('should update why choose us section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
            };
            yield whyChooseUsSection_model_1.default.create(whyChooseUsSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.updateWhyChooseUsSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateBenefits', () => {
        (0, vitest_1.it)('should update benefits successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
            };
            yield whyChooseUsSection_model_1.default.create(whyChooseUsSectionData);
            const newBenefits = [
                {
                    icon: 'target',
                    title: 'Precision Targeting',
                    description: 'Reach your ideal clients with laser-focused targeting',
                    iconColor: '#10B981',
                },
                {
                    icon: 'zap',
                    title: 'Lightning Fast Setup',
                    description: 'Get your campaigns running in under 24 hours',
                    iconColor: '#3B82F6',
                },
            ];
            const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.updateBenefits(newBenefits);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits[0].title).toBe('Precision Targeting');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.benefits[1].iconColor).toBe('#3B82F6');
        }));
    });
    (0, vitest_1.describe)('deleteWhyChooseUsSection', () => {
        (0, vitest_1.it)('should delete why choose us section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const whyChooseUsSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                benefits: [{ icon: 'test', title: 'Test', description: 'Test', iconColor: '#000000' }],
            };
            const createdWhyChooseUsSection = yield whyChooseUsSection_model_1.default.create(whyChooseUsSectionData);
            const result = yield whyChooseUsSection_service_1.WhyChooseUsSectionService.deleteWhyChooseUsSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdWhyChooseUsSection._id.toString());
            const deletedWhyChooseUsSection = yield whyChooseUsSection_model_1.default.findById(createdWhyChooseUsSection._id);
            (0, vitest_1.expect)(deletedWhyChooseUsSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when why choose us section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(whyChooseUsSection_service_1.WhyChooseUsSectionService.deleteWhyChooseUsSection()).rejects.toThrow('Why choose us section not found');
        }));
    });
});
