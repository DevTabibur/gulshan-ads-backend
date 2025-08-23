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
const metaSection_service_1 = require("./metaSection.service");
const metaSection_model_1 = __importDefault(require("./metaSection.model"));
(0, vitest_1.describe)('Meta Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield metaSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield metaSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createMetaSection', () => {
        (0, vitest_1.it)('should create a new meta section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaSectionData = {
                title: 'Meta: Your Gateway to Social Success',
                subtitle: 'Leverage the power of Facebook and Instagram advertising with Gulshan Ads\'s premium Meta solutions.',
                platformIcons: [
                    { platform: 'Pinterest', icon: 'P', color: '#E60023' },
                    { platform: 'Facebook', icon: 'f', color: '#1877F2' },
                ],
                featureButtons: [
                    { text: 'Tax-optimized billing', icon: 'padlock', color: '#10B981' },
                    { text: 'Multi-currency support', icon: 'currency-exchange', color: '#3B82F6' },
                ],
                serviceCards: [
                    { title: 'Advanced Security', description: 'Premium verified accounts with multi-layer protection.', icon: 'shield-check', iconColor: '#10B981' },
                    { title: 'Meta Certified Experts', description: 'Our team of Meta Blueprint certified specialists.', icon: 'team', iconColor: '#3B82F6' },
                ],
                performanceTitle: 'Meta Platform Performance',
                performanceSubtitle: 'Real results from our Meta advertising campaigns',
                performanceStatistics: [
                    { value: '25%', label: 'Average ROI Increase', color: '#10B981' },
                    { value: '1.2M+', label: 'People Reached Monthly', color: '#3B82F6' },
                ],
            };
            const result = yield metaSection_service_1.MetaSectionService.createMetaSection(metaSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(metaSectionData.title);
            (0, vitest_1.expect)(result.platformIcons).toHaveLength(2);
            (0, vitest_1.expect)(result.featureButtons).toHaveLength(2);
            (0, vitest_1.expect)(result.serviceCards).toHaveLength(2);
            (0, vitest_1.expect)(result.performanceStatistics).toHaveLength(2);
        }));
        (0, vitest_1.it)('should throw error when trying to create second meta section', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaSectionData = {
                title: 'First Meta Section',
                subtitle: 'First subtitle',
                platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
                featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                performanceTitle: 'Performance Title',
                performanceSubtitle: 'Performance Subtitle',
                performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
            };
            yield metaSection_service_1.MetaSectionService.createMetaSection(metaSectionData);
            const secondMetaSectionData = {
                title: 'Second Meta Section',
                subtitle: 'Second subtitle',
                platformIcons: [{ platform: 'Test2', icon: 'T2', color: '#000000' }],
                featureButtons: [{ text: 'Feature 2', icon: 'icon2', color: '#000000' }],
                serviceCards: [{ title: 'Card 2', description: 'Desc 2', icon: 'icon2', iconColor: '#000000' }],
                performanceTitle: 'Performance Title 2',
                performanceSubtitle: 'Performance Subtitle 2',
                performanceStatistics: [{ value: '200+', label: 'Test 2', color: '#000000' }],
            };
            yield (0, vitest_1.expect)(metaSection_service_1.MetaSectionService.createMetaSection(secondMetaSectionData)).rejects.toThrow('Meta section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getMetaSection', () => {
        (0, vitest_1.it)('should return meta section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
                featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                performanceTitle: 'Performance Title',
                performanceSubtitle: 'Performance Subtitle',
                performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
            };
            const createdMetaSection = yield metaSection_model_1.default.create(metaSectionData);
            const result = yield metaSection_service_1.MetaSectionService.getMetaSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdMetaSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when meta section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(metaSection_service_1.MetaSectionService.getMetaSection()).rejects.toThrow('Meta section not found');
        }));
    });
    (0, vitest_1.describe)('updateMetaSection', () => {
        (0, vitest_1.it)('should update meta section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
                featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                performanceTitle: 'Original Performance Title',
                performanceSubtitle: 'Original Performance Subtitle',
                performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
            };
            yield metaSection_model_1.default.create(metaSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield metaSection_service_1.MetaSectionService.updateMetaSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('deleteMetaSection', () => {
        (0, vitest_1.it)('should delete meta section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const metaSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                platformIcons: [{ platform: 'Test', icon: 'T', color: '#000000' }],
                featureButtons: [{ text: 'Feature 1', icon: 'icon1', color: '#000000' }],
                serviceCards: [{ title: 'Card 1', description: 'Desc 1', icon: 'icon1', iconColor: '#000000' }],
                performanceTitle: 'Performance Title',
                performanceSubtitle: 'Performance Subtitle',
                performanceStatistics: [{ value: '100+', label: 'Test', color: '#000000' }],
            };
            const createdMetaSection = yield metaSection_model_1.default.create(metaSectionData);
            const result = yield metaSection_service_1.MetaSectionService.deleteMetaSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdMetaSection._id.toString());
            const deletedMetaSection = yield metaSection_model_1.default.findById(createdMetaSection._id);
            (0, vitest_1.expect)(deletedMetaSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when meta section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(metaSection_service_1.MetaSectionService.deleteMetaSection()).rejects.toThrow('Meta section not found');
        }));
    });
});
