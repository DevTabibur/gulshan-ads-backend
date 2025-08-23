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
const trustSection_service_1 = require("./trustSection.service");
const trustSection_model_1 = __importDefault(require("./trustSection.model"));
(0, vitest_1.describe)('Trust Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield trustSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield trustSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createTrustSection', () => {
        (0, vitest_1.it)('should create a new trust section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'We are trusted by leading companies',
                subtitle: 'Join thousands of businesses that trust Gulshan Ads',
                trustedCompanies: [
                    { abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' },
                    { abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' },
                ],
                statistics: [
                    { value: '500+', label: 'Active Clients', color: '#10B981' },
                    { value: '2M+', label: 'Ads Launched', color: '#3B82F6' },
                ],
                featuredTestimonial: {
                    quote: 'Gulshan Ads transformed our social media advertising strategy.',
                    authorName: 'John Davis',
                    authorPosition: 'CEO',
                    authorCompany: 'TechFlow Solutions',
                    authorInitials: 'JD',
                },
            };
            const result = yield trustSection_service_1.TrustSectionService.createTrustSection(trustSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(trustSectionData.title);
            (0, vitest_1.expect)(result.trustedCompanies).toHaveLength(2);
            (0, vitest_1.expect)(result.statistics).toHaveLength(2);
            (0, vitest_1.expect)(result.featuredTestimonial.authorName).toBe('John Davis');
        }));
        (0, vitest_1.it)('should throw error when trying to create second trust section', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'First Trust Section',
                subtitle: 'First subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Great service!',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            yield trustSection_service_1.TrustSectionService.createTrustSection(trustSectionData);
            const secondTrustSectionData = {
                title: 'Second Trust Section',
                subtitle: 'Second subtitle',
                trustedCompanies: [{ abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' }],
                statistics: [{ value: '200+', label: 'Clients', color: '#3B82F6' }],
                featuredTestimonial: {
                    quote: 'Excellent service!',
                    authorName: 'Jane Smith',
                    authorPosition: 'CTO',
                    authorCompany: 'Test Corp 2',
                    authorInitials: 'JS',
                },
            };
            yield (0, vitest_1.expect)(trustSection_service_1.TrustSectionService.createTrustSection(secondTrustSectionData)).rejects.toThrow('Trust section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getTrustSection', () => {
        (0, vitest_1.it)('should return trust section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Great service!',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            const createdTrustSection = yield trustSection_model_1.default.create(trustSectionData);
            const result = yield trustSection_service_1.TrustSectionService.getTrustSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdTrustSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when trust section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(trustSection_service_1.TrustSectionService.getTrustSection()).rejects.toThrow('Trust section not found');
        }));
    });
    (0, vitest_1.describe)('updateTrustSection', () => {
        (0, vitest_1.it)('should update trust section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Original quote',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            yield trustSection_model_1.default.create(trustSectionData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield trustSection_service_1.TrustSectionService.updateTrustSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateTrustedCompanies', () => {
        (0, vitest_1.it)('should update trusted companies successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Great service!',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            yield trustSection_model_1.default.create(trustSectionData);
            const newCompanies = [
                { abbreviation: 'DS', fullName: 'DataSync', iconColor: '#EF4444' },
                { abbreviation: 'CV', fullName: 'CloudVault', iconColor: '#F59E0B' },
            ];
            const result = yield trustSection_service_1.TrustSectionService.updateTrustedCompanies(newCompanies);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.trustedCompanies).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.trustedCompanies[0].abbreviation).toBe('DS');
        }));
    });
    (0, vitest_1.describe)('updateStatistics', () => {
        (0, vitest_1.it)('should update statistics successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Great service!',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            yield trustSection_model_1.default.create(trustSectionData);
            const newStatistics = [
                { value: '500+', label: 'Active Clients', color: '#10B981' },
                { value: '2M+', label: 'Ads Launched', color: '#3B82F6' },
            ];
            const result = yield trustSection_service_1.TrustSectionService.updateStatistics(newStatistics);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.statistics[0].value).toBe('500+');
        }));
    });
    (0, vitest_1.describe)('updateFeaturedTestimonial', () => {
        (0, vitest_1.it)('should update featured testimonial successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Original quote',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            yield trustSection_model_1.default.create(trustSectionData);
            const newTestimonial = {
                quote: 'Updated quote with amazing results!',
                authorName: 'Jane Smith',
                authorPosition: 'CTO',
                authorCompany: 'TechFlow Solutions',
                authorInitials: 'JS',
            };
            const result = yield trustSection_service_1.TrustSectionService.updateFeaturedTestimonial(newTestimonial);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.featuredTestimonial.quote).toBe('Updated quote with amazing results!');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.featuredTestimonial.authorName).toBe('Jane Smith');
        }));
    });
    (0, vitest_1.describe)('deleteTrustSection', () => {
        (0, vitest_1.it)('should delete trust section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const trustSectionData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                trustedCompanies: [{ abbreviation: 'TF', fullName: 'TechFlow', iconColor: '#8B5CF6' }],
                statistics: [{ value: '100+', label: 'Clients', color: '#10B981' }],
                featuredTestimonial: {
                    quote: 'Great service!',
                    authorName: 'John Doe',
                    authorPosition: 'CEO',
                    authorCompany: 'Test Corp',
                    authorInitials: 'JD',
                },
            };
            const createdTrustSection = yield trustSection_model_1.default.create(trustSectionData);
            const result = yield trustSection_service_1.TrustSectionService.deleteTrustSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdTrustSection._id.toString());
            const deletedTrustSection = yield trustSection_model_1.default.findById(createdTrustSection._id);
            (0, vitest_1.expect)(deletedTrustSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when trust section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(trustSection_service_1.TrustSectionService.deleteTrustSection()).rejects.toThrow('Trust section not found');
        }));
    });
});
