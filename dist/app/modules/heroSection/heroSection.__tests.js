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
const heroSection_service_1 = require("./heroSection.service");
const heroSection_model_1 = __importDefault(require("./heroSection.model"));
(0, vitest_1.describe)('Hero Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear the hero section collection before each test
        yield heroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clean up after each test
        yield heroSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createHeroSection', () => {
        (0, vitest_1.it)('should create a new hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Promote your business in Meta, TikTok and Telegram',
                subtitle: 'Find clients on booming platforms with Gulshan Ads — easy payment and ad launch in one interface',
            };
            const result = yield heroSection_service_1.HeroSectionService.createHeroSection(heroSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(heroSectionData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(heroSectionData.subtitle);
            (0, vitest_1.expect)(result._id).toBeDefined();
            (0, vitest_1.expect)(result.createdAt).toBeDefined();
            (0, vitest_1.expect)(result.updatedAt).toBeDefined();
        }));
        (0, vitest_1.it)('should throw error when trying to create second hero section', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'First Hero Section',
                subtitle: 'First subtitle',
            };
            // Create first hero section
            yield heroSection_service_1.HeroSectionService.createHeroSection(heroSectionData);
            // Try to create second hero section
            const secondHeroSectionData = {
                title: 'Second Hero Section',
                subtitle: 'Second subtitle',
            };
            yield (0, vitest_1.expect)(heroSection_service_1.HeroSectionService.createHeroSection(secondHeroSectionData)).rejects.toThrow('Hero section already exists. You can only update it.');
        }));
        (0, vitest_1.it)('should create hero section with minimum length strings', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'A',
                subtitle: 'B',
            };
            const result = yield heroSection_service_1.HeroSectionService.createHeroSection(heroSectionData);
            (0, vitest_1.expect)(result.title).toBe('A');
            (0, vitest_1.expect)(result.subtitle).toBe('B');
        }));
    });
    (0, vitest_1.describe)('getHeroSection', () => {
        (0, vitest_1.it)('should return hero section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
            };
            const createdHeroSection = yield heroSection_model_1.default.create(heroSectionData);
            const result = yield heroSection_service_1.HeroSectionService.getHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdHeroSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(heroSection_service_1.HeroSectionService.getHeroSection()).rejects.toThrow('Hero section not found');
        }));
    });
    (0, vitest_1.describe)('updateHeroSection', () => {
        (0, vitest_1.it)('should update hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
            };
            yield heroSection_model_1.default.create(heroSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield heroSection_service_1.HeroSectionService.updateHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
        (0, vitest_1.it)('should update only title when only title is provided', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
            };
            yield heroSection_model_1.default.create(heroSectionData);
            const updateData = {
                title: 'Updated Title Only',
            };
            const result = yield heroSection_service_1.HeroSectionService.updateHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title Only');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Original Subtitle'); // Should remain unchanged
        }));
        (0, vitest_1.it)('should update only subtitle when only subtitle is provided', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
            };
            yield heroSection_model_1.default.create(heroSectionData);
            const updateData = {
                subtitle: 'Updated Subtitle Only',
            };
            const result = yield heroSection_service_1.HeroSectionService.updateHeroSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Original Title'); // Should remain unchanged
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle Only');
        }));
        (0, vitest_1.it)('should throw error when hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const updateData = {
                title: 'Updated Title',
            };
            yield (0, vitest_1.expect)(heroSection_service_1.HeroSectionService.updateHeroSection(updateData)).rejects.toThrow('Hero section not found');
        }));
    });
    (0, vitest_1.describe)('deleteHeroSection', () => {
        (0, vitest_1.it)('should delete hero section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const heroSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
            };
            const createdHeroSection = yield heroSection_model_1.default.create(heroSectionData);
            const result = yield heroSection_service_1.HeroSectionService.deleteHeroSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdHeroSection._id.toString());
            // Verify it's actually deleted
            const deletedHeroSection = yield heroSection_model_1.default.findById(createdHeroSection._id);
            (0, vitest_1.expect)(deletedHeroSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when hero section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(heroSection_service_1.HeroSectionService.deleteHeroSection()).rejects.toThrow('Hero section not found');
        }));
    });
    (0, vitest_1.describe)('Integration Tests', () => {
        (0, vitest_1.it)('should handle full CRUD lifecycle', () => __awaiter(void 0, void 0, void 0, function* () {
            // Create
            const createData = {
                title: 'Initial Title',
                subtitle: 'Initial Subtitle',
            };
            const created = yield heroSection_service_1.HeroSectionService.createHeroSection(createData);
            (0, vitest_1.expect)(created.title).toBe('Initial Title');
            // Read
            const retrieved = yield heroSection_service_1.HeroSectionService.getHeroSection();
            (0, vitest_1.expect)(retrieved === null || retrieved === void 0 ? void 0 : retrieved.title).toBe('Initial Title');
            // Update
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const updated = yield heroSection_service_1.HeroSectionService.updateHeroSection(updateData);
            (0, vitest_1.expect)(updated === null || updated === void 0 ? void 0 : updated.title).toBe('Updated Title');
            // Delete
            const deleted = yield heroSection_service_1.HeroSectionService.deleteHeroSection();
            (0, vitest_1.expect)(deleted === null || deleted === void 0 ? void 0 : deleted.title).toBe('Updated Title');
            // Verify deletion
            yield (0, vitest_1.expect)(heroSection_service_1.HeroSectionService.getHeroSection()).rejects.toThrow('Hero section not found');
        }));
    });
});
