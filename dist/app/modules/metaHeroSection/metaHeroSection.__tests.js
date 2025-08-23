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
const metaHeroSection_service_1 = require("./metaHeroSection.service");
const metaHeroSection_model_1 = __importDefault(require("./metaHeroSection.model"));
(0, vitest_1.describe)('Meta Hero Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield metaHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield metaHeroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createMetaHeroSection', () => {
        (0, vitest_1.it)('should create a new meta hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Instagram and Facebook Accounts with Benefits',
                subtitle: 'Pay for Instagram and Facebook on favorable terms and run campaigns in reliable Gulshan Ads accounts with expert support',
                ctaButtons: [
                    {
                        text: 'Sign up',
                        link: '/signup',
                        icon: 'user-plus',
                        variant: 'primary',
                    },
                    {
                        text: 'Learn More',
                        link: '/learn-more',
                        icon: 'info',
                        variant: 'secondary',
                    },
                ],
                statistics: [
                    { value: '3.8B+', label: 'Meta Users' },
                    { value: '98%', label: 'Success Rate' },
                    { value: '24/7', label: 'Expert Support' },
                ],
            };
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.createMetaHeroSection(metaHeroSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(metaHeroSectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(metaHeroSectionData.subtitle);
            (0, vitest_1.expect)(result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result.ctaButtons[0].text).toBe('Sign up');
            (0, vitest_1.expect)(result.ctaButtons[1].variant).toBe('secondary');
            (0, vitest_1.expect)(result.statistics).toHaveLength(3);
            (0, vitest_1.expect)(result.statistics[0].value).toBe('3.8B+');
            (0, vitest_1.expect)(result.statistics[1].label).toBe('Success Rate');
        }));
        (0, vitest_1.it)('should throw error when trying to create second meta hero section', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'First Meta Hero Section',
                subtitle: 'First subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            yield metaHeroSection_service_1.MetaHeroSectionService.createMetaHeroSection(metaHeroSectionData);
            const secondMetaHeroSectionData = {
                title: 'Second Meta Hero Section',
                subtitle: 'Second subtitle',
                ctaButtons: [{
                        text: 'Test Button 2',
                        link: '/test2',
                        icon: 'test2',
                        variant: 'secondary'
                    }],
                statistics: [{ value: '200', label: 'Test Stat 2' }],
            };
            yield (0, vitest_1.expect)(metaHeroSection_service_1.MetaHeroSectionService.createMetaHeroSection(secondMetaHeroSectionData)).rejects.toThrow('Meta hero section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getMetaHeroSection', () => {
        (0, vitest_1.it)('should return meta hero section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            const createdMetaHeroSection = yield metaHeroSection_model_1.default.create(metaHeroSectionData);
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.getMetaHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdMetaHeroSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when meta hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(metaHeroSection_service_1.MetaHeroSectionService.getMetaHeroSection()).rejects.toThrow('Meta hero section not found');
        }));
    });
    (0, vitest_1.describe)('updateMetaHeroSection', () => {
        (0, vitest_1.it)('should update meta hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            yield metaHeroSection_model_1.default.create(metaHeroSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateMetaHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateCTAButtons', () => {
        (0, vitest_1.it)('should update CTA buttons successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            yield metaHeroSection_model_1.default.create(metaHeroSectionData);
            const newCTAButtons = [
                {
                    text: 'Updated Sign up',
                    link: '/updated-signup',
                    icon: 'user-plus',
                    variant: 'primary',
                },
                {
                    text: 'Updated Learn More',
                    link: '/updated-learn-more',
                    icon: 'info',
                    variant: 'secondary',
                },
            ];
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateCTAButtons(newCTAButtons);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons[0].text).toBe('Updated Sign up');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.ctaButtons[1].variant).toBe('secondary');
        }));
    });
    (0, vitest_1.describe)('updateStatistics', () => {
        (0, vitest_1.it)('should update statistics successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            yield metaHeroSection_model_1.default.create(metaHeroSectionData);
            const newStatistics = [
                { value: '4.0B+', label: 'Updated Meta Users' },
                { value: '99%', label: 'Updated Success Rate' },
                { value: '24/7', label: 'Updated Expert Support' },
            ];
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.updateStatistics(newStatistics);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics).toHaveLength(3);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics[0].value).toBe('4.0B+');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics[2].label).toBe('Updated Expert Support');
        }));
    });
    (0, vitest_1.describe)('deleteMetaHeroSection', () => {
        (0, vitest_1.it)('should delete meta hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaHeroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                ctaButtons: [{
                        text: 'Test Button',
                        link: '/test',
                        icon: 'test',
                        variant: 'primary'
                    }],
                statistics: [{ value: '100', label: 'Test Stat' }],
            };
            const createdMetaHeroSection = yield metaHeroSection_model_1.default.create(metaHeroSectionData);
            const result = yield metaHeroSection_service_1.MetaHeroSectionService.deleteMetaHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdMetaHeroSection._id.toString());
            const deletedMetaHeroSection = yield metaHeroSection_model_1.default.findById(createdMetaHeroSection._id);
            (0, vitest_1.expect)(deletedMetaHeroSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when meta hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(metaHeroSection_service_1.MetaHeroSectionService.deleteMetaHeroSection()).rejects.toThrow('Meta hero section not found');
        }));
    });
});
