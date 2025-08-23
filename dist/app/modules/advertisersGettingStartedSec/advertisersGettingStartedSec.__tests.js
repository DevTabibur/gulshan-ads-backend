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
const advertisersGettingStartedSec_service_1 = require("./advertisersGettingStartedSec.service");
const advertisersGettingStartedSec_model_1 = __importDefault(require("./advertisersGettingStartedSec.model"));
(0, vitest_1.describe)('Advertisers Getting Started Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersGettingStartedSec_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield advertisersGettingStartedSec_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createAdvertisersGettingStartedSec', () => {
        (0, vitest_1.it)('should create a new advertisers getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'How We Get You Started',
                subtitle: 'Our proven 4-step process to transform your freelance business with strategic advertising',
                steps: [
                    {
                        stepNumber: '01',
                        icon: 'message-circle',
                        title: 'Discovery Call',
                        description: 'We analyze your niche, goals, and current marketing efforts',
                        duration: '30 min',
                    },
                    {
                        stepNumber: '02',
                        icon: 'lightbulb',
                        title: 'Strategy Development',
                        description: 'Custom advertising strategy tailored to your freelance business',
                        duration: '2-3 days',
                    },
                    {
                        stepNumber: '03',
                        icon: 'rocket',
                        title: 'Campaign Launch',
                        description: 'We create and launch your campaigns across selected platforms',
                        duration: '1 week',
                    },
                    {
                        stepNumber: '04',
                        icon: 'trending-up',
                        title: 'Optimization & Growth',
                        description: 'Continuous monitoring and optimization for maximum ROI',
                        duration: 'Ongoing',
                    },
                ],
            };
            const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(advertisersGettingStartedSecData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(advertisersGettingStartedSecData.title);
            (0, vitest_1.expect)(result.subtitle).toBe(advertisersGettingStartedSecData.subtitle);
            (0, vitest_1.expect)(result.steps).toHaveLength(4);
            (0, vitest_1.expect)(result.steps[0].title).toBe('Discovery Call');
            (0, vitest_1.expect)(result.steps[1].duration).toBe('2-3 days');
            (0, vitest_1.expect)(result.steps[2].stepNumber).toBe('03');
        }));
        (0, vitest_1.it)('should throw error when trying to create second advertisers getting started section', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'First Getting Started Section',
                subtitle: 'First subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test',
                        title: 'Test Step',
                        description: 'Test description',
                        duration: '1 hour'
                    }],
            };
            yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(advertisersGettingStartedSecData);
            const secondAdvertisersGettingStartedSecData = {
                title: 'Second Getting Started Section',
                subtitle: 'Second subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test2',
                        title: 'Test Step 2',
                        description: 'Test description 2',
                        duration: '2 hours'
                    }],
            };
            yield (0, vitest_1.expect)(advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(secondAdvertisersGettingStartedSecData)).rejects.toThrow('Advertisers getting started section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getAdvertisersGettingStartedSec', () => {
        (0, vitest_1.it)('should return advertisers getting started section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test',
                        title: 'Test Step',
                        description: 'Test description',
                        duration: '1 hour'
                    }],
            };
            const createdAdvertisersGettingStartedSec = yield advertisersGettingStartedSec_model_1.default.create(advertisersGettingStartedSecData);
            const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersGettingStartedSec._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Test Subtitle');
        }));
        (0, vitest_1.it)('should throw error when advertisers getting started section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec()).rejects.toThrow('Advertisers getting started section not found');
        }));
    });
    (0, vitest_1.describe)('updateAdvertisersGettingStartedSec', () => {
        (0, vitest_1.it)('should update advertisers getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'Original Title',
                subtitle: 'Original Subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test',
                        title: 'Test Step',
                        description: 'Test description',
                        duration: '1 hour'
                    }],
            };
            yield advertisersGettingStartedSec_model_1.default.create(advertisersGettingStartedSecData);
            const updateData = {
                title: 'Updated Title',
                subtitle: 'Updated Subtitle',
            };
            const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.updateAdvertisersGettingStartedSec(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).toBe('Updated Subtitle');
        }));
    });
    (0, vitest_1.describe)('updateSteps', () => {
        (0, vitest_1.it)('should update steps successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test',
                        title: 'Test Step',
                        description: 'Test description',
                        duration: '1 hour'
                    }],
            };
            yield advertisersGettingStartedSec_model_1.default.create(advertisersGettingStartedSecData);
            const newSteps = [
                {
                    stepNumber: '01',
                    icon: 'message-circle',
                    title: 'Discovery Call',
                    description: 'We analyze your niche, goals, and current marketing efforts',
                    duration: '30 min',
                },
                {
                    stepNumber: '02',
                    icon: 'lightbulb',
                    title: 'Strategy Development',
                    description: 'Custom advertising strategy tailored to your freelance business',
                    duration: '2-3 days',
                },
            ];
            const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.updateSteps(newSteps);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.steps).toHaveLength(2);
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.steps[0].title).toBe('Discovery Call');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.steps[1].duration).toBe('2-3 days');
        }));
    });
    (0, vitest_1.describe)('deleteAdvertisersGettingStartedSec', () => {
        (0, vitest_1.it)('should delete advertisers getting started section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const advertisersGettingStartedSecData = {
                title: 'Test Title',
                subtitle: 'Test Subtitle',
                steps: [{
                        stepNumber: '01',
                        icon: 'test',
                        title: 'Test Step',
                        description: 'Test description',
                        duration: '1 hour'
                    }],
            };
            const createdAdvertisersGettingStartedSec = yield advertisersGettingStartedSec_model_1.default.create(advertisersGettingStartedSecData);
            const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdAdvertisersGettingStartedSec._id.toString());
            const deletedAdvertisersGettingStartedSec = yield advertisersGettingStartedSec_model_1.default.findById(createdAdvertisersGettingStartedSec._id);
            (0, vitest_1.expect)(deletedAdvertisersGettingStartedSec).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when advertisers getting started section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec()).rejects.toThrow('Advertisers getting started section not found');
        }));
    });
});
