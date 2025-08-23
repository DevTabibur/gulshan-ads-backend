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
const gulshanAdsMetaManagementSection_service_1 = require("./gulshanAdsMetaManagementSection.service");
const gulshanAdsMetaManagementSection_model_1 = __importDefault(require("./gulshanAdsMetaManagementSection.model"));
(0, vitest_1.describe)('Gulshan Ads Meta Management Section Service', () => {
    (0, vitest_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield gulshanAdsMetaManagementSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.afterEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield gulshanAdsMetaManagementSection_model_1.default.deleteMany({});
    }));
    (0, vitest_1.describe)('createGulshanAdsMetaManagementSection', () => {
        (0, vitest_1.it)('should create a new gulshan ads meta management section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Gulshan Ads simplifies working with Meta at every stage',
                commissionTag: {
                    text: 'Commission - 10%',
                    icon: 'zap',
                },
                paymentFeature: {
                    icon: 'dollar-sign',
                    title: 'Convenient payment',
                    subtitle: 'With opportunities for budget optimization',
                    balanceCard: {
                        title: 'Balance',
                        amount: '1,200',
                        currency: 'USD',
                        platformIcons: ['facebook', 'instagram', 'pinterest', 'tiktok', 'twitter', 'linkedin'],
                    },
                    sectionTitle: 'Full Control Over Expenses',
                    description: 'Easily top up your Gulshan Ads balance using a card or invoice, and allocate funds across multiple campaigns with complete transparency and control.',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Download invoice',
                        requestButton: 'Request documents',
                        tableData: {
                            month: 'December',
                            amount: '1,200',
                            vat: '240',
                            downloadIcon: 'download',
                        },
                    },
                    sectionTitle: 'All the paperwork you need',
                    description: 'Closing documents in the required format for easy reporting. Download invoices, request documents, and manage all your financial paperwork seamlessly.',
                },
            };
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(gulshanAdsMetaManagementSectionData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.title).toBe(gulshanAdsMetaManagementSectionData.title);
            (0, vitest_1.expect)(result.commissionTag.text).toBe('Commission - 10%');
            (0, vitest_1.expect)(result.paymentFeature.title).toBe('Convenient payment');
            (0, vitest_1.expect)(result.paymentFeature.balanceCard.amount).toBe('1,200');
            (0, vitest_1.expect)(result.paymentFeature.balanceCard.platformIcons).toHaveLength(6);
            (0, vitest_1.expect)(result.paperworkFeature.invoiceCard.tableData.month).toBe('December');
        }));
        (0, vitest_1.it)('should throw error when trying to create second gulshan ads meta management section', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'First Meta Management Section',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(gulshanAdsMetaManagementSectionData);
            const secondGulshanAdsMetaManagementSectionData = {
                title: 'Second Meta Management Section',
                commissionTag: { text: 'Test2', icon: 'test2' },
                paymentFeature: {
                    icon: 'test2',
                    title: 'Test2',
                    subtitle: 'Test2',
                    balanceCard: {
                        title: 'Test2',
                        amount: '200',
                        currency: 'USD',
                        platformIcons: ['test2'],
                    },
                    sectionTitle: 'Test2',
                    description: 'Test2',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test2',
                        requestButton: 'Test2',
                        tableData: {
                            month: 'Test2',
                            amount: '200',
                            vat: '40',
                            downloadIcon: 'test2',
                        },
                    },
                    sectionTitle: 'Test2',
                    description: 'Test2',
                },
            };
            yield (0, vitest_1.expect)(gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(secondGulshanAdsMetaManagementSectionData)).rejects.toThrow('Gulshan Ads meta management section already exists. You can only update it.');
        }));
    });
    (0, vitest_1.describe)('getGulshanAdsMetaManagementSection', () => {
        (0, vitest_1.it)('should return gulshan ads meta management section when it exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Test Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            const createdGulshanAdsMetaManagementSection = yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdGulshanAdsMetaManagementSection._id.toString());
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Test Title');
        }));
        (0, vitest_1.it)('should throw error when gulshan ads meta management section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection()).rejects.toThrow('Gulshan Ads meta management section not found');
        }));
    });
    (0, vitest_1.describe)('updateGulshanAdsMetaManagementSection', () => {
        (0, vitest_1.it)('should update gulshan ads meta management section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Original Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const updateData = {
                title: 'Updated Title',
            };
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updateGulshanAdsMetaManagementSection(updateData);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.title).toBe('Updated Title');
        }));
    });
    (0, vitest_1.describe)('updateCommissionTag', () => {
        (0, vitest_1.it)('should update commission tag successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Test Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const newCommissionTag = {
                text: 'Updated Commission - 15%',
                icon: 'zap',
            };
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updateCommissionTag(newCommissionTag);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.commissionTag.text).toBe('Updated Commission - 15%');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.commissionTag.icon).toBe('zap');
        }));
    });
    (0, vitest_1.describe)('updatePaymentFeature', () => {
        (0, vitest_1.it)('should update payment feature successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Test Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const newPaymentFeature = {
                icon: 'dollar-sign',
                title: 'Updated Convenient payment',
                subtitle: 'Updated subtitle',
                balanceCard: {
                    title: 'Updated Balance',
                    amount: '2,000',
                    currency: 'USD',
                    platformIcons: ['facebook', 'instagram', 'pinterest'],
                },
                sectionTitle: 'Updated Full Control Over Expenses',
                description: 'Updated description for payment feature.',
            };
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updatePaymentFeature(newPaymentFeature);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paymentFeature.title).toBe('Updated Convenient payment');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paymentFeature.balanceCard.amount).toBe('2,000');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paymentFeature.balanceCard.platformIcons).toHaveLength(3);
        }));
    });
    (0, vitest_1.describe)('updatePaperworkFeature', () => {
        (0, vitest_1.it)('should update paperwork feature successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Test Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const newPaperworkFeature = {
                invoiceCard: {
                    title: 'Updated Download invoice',
                    requestButton: 'Updated Request documents',
                    tableData: {
                        month: 'January',
                        amount: '1,500',
                        vat: '300',
                        downloadIcon: 'download',
                    },
                },
                sectionTitle: 'Updated All the paperwork you need',
                description: 'Updated description for paperwork feature.',
            };
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.updatePaperworkFeature(newPaperworkFeature);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paperworkFeature.invoiceCard.title).toBe('Updated Download invoice');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paperworkFeature.invoiceCard.tableData.month).toBe('January');
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.paperworkFeature.invoiceCard.tableData.amount).toBe('1,500');
        }));
    });
    (0, vitest_1.describe)('deleteGulshanAdsMetaManagementSection', () => {
        (0, vitest_1.it)('should delete gulshan ads meta management section successfully', () => __awaiter(void 0, void 0, void 0, function* () {
            const gulshanAdsMetaManagementSectionData = {
                title: 'Test Title',
                commissionTag: { text: 'Test', icon: 'test' },
                paymentFeature: {
                    icon: 'test',
                    title: 'Test',
                    subtitle: 'Test',
                    balanceCard: {
                        title: 'Test',
                        amount: '100',
                        currency: 'USD',
                        platformIcons: ['test'],
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
                paperworkFeature: {
                    invoiceCard: {
                        title: 'Test',
                        requestButton: 'Test',
                        tableData: {
                            month: 'Test',
                            amount: '100',
                            vat: '20',
                            downloadIcon: 'test',
                        },
                    },
                    sectionTitle: 'Test',
                    description: 'Test',
                },
            };
            const createdGulshanAdsMetaManagementSection = yield gulshanAdsMetaManagementSection_model_1.default.create(gulshanAdsMetaManagementSectionData);
            const result = yield gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection();
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result._id.toString()).toBe(createdGulshanAdsMetaManagementSection._id.toString());
            const deletedGulshanAdsMetaManagementSection = yield gulshanAdsMetaManagementSection_model_1.default.findById(createdGulshanAdsMetaManagementSection._id);
            (0, vitest_1.expect)(deletedGulshanAdsMetaManagementSection).toBeNull();
        }));
        (0, vitest_1.it)('should throw error when gulshan ads meta management section does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, vitest_1.expect)(gulshanAdsMetaManagementSection_service_1.GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection()).rejects.toThrow('Gulshan Ads meta management section not found');
        }));
    });
});
