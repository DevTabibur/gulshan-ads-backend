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
const aboutSection_service_1 = require("./aboutSection.service");
const aboutSection_model_1 = __importDefault(require("./aboutSection.model"));
(0, vitest_1.describe)('About Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield aboutSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield aboutSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAboutSection', () => {
        (0, vitest_1.it)('should create a new about section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutSectionData = {
                aboutTitle: 'About Gulshan Ads',
                aboutDescription: 'Empowering businesses and agencies with cutting-edge multi-platform advertising solutions. We bridge the gap between complex ad platforms and successful campaigns.',
                statistics: [
                    { value: '7+', label: 'Years of Multi-Platform Expertise', icon: 'check', iconColor: '#10B981' },
                    { value: '5000+', label: 'Global Clients Served', icon: 'globe', iconColor: '#3B82F6' },
                    { value: '150+', label: 'Agency Partners Worldwide', icon: 'users', iconColor: '#06B6D4' },
                    { value: '25+', label: 'Certified Platform Specialists', icon: 'book-open', iconColor: '#8B5CF6' },
                ],
                weWorkWithTitle: 'We Work With',
                weWorkWithDescription: 'Our platform serves diverse clients, from growing agencies to enterprise advertisers, each with unique needs and goals.',
                clientTypes: [
                    {
                        title: 'Marketing Agencies',
                        description: 'Scale your client campaigns with our white-label solutions. Access premium ad accounts, expert consultation, and transparent reporting that enhances your agency\'s reputation.',
                        icon: 'building',
                        iconColor: '#10B981',
                        features: ['White-label dashboard', '24/7 expert support', 'Competitive commissions', 'Advanced reporting'],
                    },
                    {
                        title: 'Direct Advertisers',
                        description: 'Launch high-impact campaigns across Meta, TikTok, and Telegram without the complexity. Get expert guidance, premium account access, and transparent pricing.',
                        icon: 'user',
                        iconColor: '#3B82F6',
                        features: ['No setup fees', 'Expert consultation', 'Multi-platform access', 'Flexible payment terms'],
                    },
                    {
                        title: 'Performance Marketers',
                        description: 'Manage all your campaigns from one unified dashboard. Access advanced targeting tools, real-time analytics, and optimization features that maximize your ROI.',
                        icon: 'bar-chart',
                        iconColor: '#06B6D4',
                        features: ['Unified dashboard', 'Advanced analytics', 'A/B testing tools', 'Performance optimization'],
                    },
                ],
                missionTitle: 'Our Mission',
                missionDescription: 'To democratize access to premium advertising platforms and expert knowledge, enabling businesses of all sizes to compete effectively in the digital marketplace. We believe great advertising should be accessible, transparent, and results-driven.',
                missionPillars: [
                    { title: 'Transparency', description: 'Clear pricing, honest reporting, no hidden fees' },
                    { title: 'Expertise', description: 'Certified specialists with proven track records' },
                    { title: 'Innovation', description: 'Cutting-edge tools and emerging platform access' },
                ],
            };
            const result = yield aboutSection_service_1.AboutSectionService.createAboutSection(aboutSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.aboutTitle).toBe(aboutSectionData.aboutTitle);
            (0, vitest_1.expect)(result.statistics).toHaveLength(4);
            (0, vitest_1.expect)(result.clientTypes).toHaveLength(3);
            (0, vitest_1.expect)(result.missionPillars).toHaveLength(3);
        }));
        (0, vitest_1.it)('should throw error when trying to create second about section', () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutSectionData = {
                aboutTitle: 'First About Section',
                aboutDescription: 'First description',
                statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
                weWorkWithTitle: 'We Work With',
                weWorkWithDescription: 'Test description',
                clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
                missionTitle: 'Mission',
                missionDescription: 'Mission description',
                missionPillars: [{ title: 'Test', description: 'Test' }],
            };
            yield aboutSection_service_1.AboutSectionService.createAboutSection(aboutSectionData);
            const secondAboutSectionData = {
                aboutTitle: 'Second About Section',
                aboutDescription: 'Second description',
                statistics: [{ value: '2+', label: 'Test 2', icon: 'test2', iconColor: '#000000' }],
                weWorkWithTitle: 'We Work With 2',
                weWorkWithDescription: 'Test description 2',
                clientTypes: [{ title: 'Test 2', description: 'Test 2', icon: 'test2', iconColor: '#000000', features: ['test2'] }],
                missionTitle: 'Mission 2',
                missionDescription: 'Mission description 2',
                missionPillars: [{ title: 'Test 2', description: 'Test 2' }],
            };
            yield (0, vitest_1.expect)(aboutSection_service_1.AboutSectionService.createAboutSection(secondAboutSectionData)).rejects.toThrow('About section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAboutSection', () => {
        (0, vitest_1.it)('should return about section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutSectionData = {
                aboutTitle: 'Test Title',
                aboutDescription: 'Test Description',
                statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
                weWorkWithTitle: 'We Work With',
                weWorkWithDescription: 'Test description',
                clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
                missionTitle: 'Mission',
                missionDescription: 'Mission description',
                missionPillars: [{ title: 'Test', description: 'Test' }],
            };
            const createdAboutSection = yield aboutSection_model_1.default.create(aboutSectionData);
            const result = yield aboutSection_service_1.AboutSectionService.getAboutSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAboutSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.aboutTitle).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when about section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(aboutSection_service_1.AboutSectionService.getAboutSection()).rejects.toThrow('About section not found');
        }));
    });
    (0, vitest_1.describe)('updateAboutSection', () => {
        (0, vitest_1.it)('should update about section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutSectionData = {
                aboutTitle: 'Original Title',
                aboutDescription: 'Original Description',
                statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
                weWorkWithTitle: 'We Work With',
                weWorkWithDescription: 'Test description',
                clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
                missionTitle: 'Mission',
                missionDescription: 'Mission description',
                missionPillars: [{ title: 'Test', description: 'Test' }],
            };
            yield aboutSection_model_1.default.create(aboutSectionData);
            const updateData = {
                aboutTitle: 'Updated Title',
                aboutDescription: 'Updated Description',
            };
            const result = yield aboutSection_service_1.AboutSectionService.updateAboutSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.aboutTitle).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.aboutDescription).toBe('Updated Description');
        }));
    });
    (0, vitest_1.describe)('deleteAboutSection', () => {
        (0, vitest_1.it)('should delete about section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const aboutSectionData = {
                aboutTitle: 'Test Title',
                aboutDescription: 'Test Description',
                statistics: [{ value: '1+', label: 'Test', icon: 'test', iconColor: '#000000' }],
                weWorkWithTitle: 'We Work With',
                weWorkWithDescription: 'Test description',
                clientTypes: [{ title: 'Test', description: 'Test', icon: 'test', iconColor: '#000000', features: ['test'] }],
                missionTitle: 'Mission',
                missionDescription: 'Mission description',
                missionPillars: [{ title: 'Test', description: 'Test' }],
            };
            const createdAboutSection = yield aboutSection_model_1.default.create(aboutSectionData);
            const result = yield aboutSection_service_1.AboutSectionService.deleteAboutSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAboutSection._id.toString());
            const deletedAboutSection = yield aboutSection_model_1.default.findById(createdAboutSection._id);
            (0, vitest_1.expect)(deletedAboutSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when about section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(aboutSection_service_1.AboutSectionService.deleteAboutSection()).rejects.toThrow('About section not found');
        }));
    });
});
