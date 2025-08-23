import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { GulshanAdsMetaManagementSectionService } from './gulshanAdsMetaManagementSection.service';
import GulshanAdsMetaManagementSectionModel from './gulshanAdsMetaManagementSection.model';

describe('Gulshan Ads Meta Management Section Service', () => {
  beforeEach(async () => {
    await GulshanAdsMetaManagementSectionModel.deleteMany({});
  });

  afterEach(async () => {
    await GulshanAdsMetaManagementSectionModel.deleteMany({});
  });

  describe('createGulshanAdsMetaManagementSection', () => {
    it('should create a new gulshan ads meta management section successfully', async () => {
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

      const result = await GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(gulshanAdsMetaManagementSectionData as any);

      expect(result).toBeDefined();
      expect(result.title).toBe(gulshanAdsMetaManagementSectionData.title);
      expect(result.commissionTag.text).toBe('Commission - 10%');
      expect(result.paymentFeature.title).toBe('Convenient payment');
      expect(result.paymentFeature.balanceCard.amount).toBe('1,200');
      expect(result.paymentFeature.balanceCard.platformIcons).toHaveLength(6);
      expect(result.paperworkFeature.invoiceCard.tableData.month).toBe('December');
    });

    it('should throw error when trying to create second gulshan ads meta management section', async () => {
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

      await GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(gulshanAdsMetaManagementSectionData as any);

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

      await expect(GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(secondGulshanAdsMetaManagementSectionData as any)).rejects.toThrow('Gulshan Ads meta management section already exists. You can only update it.');
    });
  });

  describe('getGulshanAdsMetaManagementSection', () => {
    it('should return gulshan ads meta management section when it exists', async () => {
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

      const createdGulshanAdsMetaManagementSection = await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);
      const result = await GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdGulshanAdsMetaManagementSection._id.toString());
      expect(result?.title).toBe('Test Title');
    });

    it('should throw error when gulshan ads meta management section does not exist', async () => {
      await expect(GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection()).rejects.toThrow('Gulshan Ads meta management section not found');
    });
  });

  describe('updateGulshanAdsMetaManagementSection', () => {
    it('should update gulshan ads meta management section successfully', async () => {
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

      await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);

      const updateData = {
        title: 'Updated Title',
      };

      const result = await GulshanAdsMetaManagementSectionService.updateGulshanAdsMetaManagementSection(updateData);

      expect(result).toBeDefined();
      expect(result?.title).toBe('Updated Title');
    });
  });

  describe('updateCommissionTag', () => {
    it('should update commission tag successfully', async () => {
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

      await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);

      const newCommissionTag = {
        text: 'Updated Commission - 15%',
        icon: 'zap',
      };

      const result = await GulshanAdsMetaManagementSectionService.updateCommissionTag(newCommissionTag);

      expect(result).toBeDefined();
      expect(result?.commissionTag.text).toBe('Updated Commission - 15%');
      expect(result?.commissionTag.icon).toBe('zap');
    });
  });

  describe('updatePaymentFeature', () => {
    it('should update payment feature successfully', async () => {
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

      await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);

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

      const result = await GulshanAdsMetaManagementSectionService.updatePaymentFeature(newPaymentFeature);

      expect(result).toBeDefined();
      expect(result?.paymentFeature.title).toBe('Updated Convenient payment');
      expect(result?.paymentFeature.balanceCard.amount).toBe('2,000');
      expect(result?.paymentFeature.balanceCard.platformIcons).toHaveLength(3);
    });
  });

  describe('updatePaperworkFeature', () => {
    it('should update paperwork feature successfully', async () => {
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

      await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);

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

      const result = await GulshanAdsMetaManagementSectionService.updatePaperworkFeature(newPaperworkFeature);

      expect(result).toBeDefined();
      expect(result?.paperworkFeature.invoiceCard.title).toBe('Updated Download invoice');
      expect(result?.paperworkFeature.invoiceCard.tableData.month).toBe('January');
      expect(result?.paperworkFeature.invoiceCard.tableData.amount).toBe('1,500');
    });
  });

  describe('deleteGulshanAdsMetaManagementSection', () => {
    it('should delete gulshan ads meta management section successfully', async () => {
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

      const createdGulshanAdsMetaManagementSection = await GulshanAdsMetaManagementSectionModel.create(gulshanAdsMetaManagementSectionData);
      const result = await GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection();

      expect(result).toBeDefined();
      expect(result?._id.toString()).toBe(createdGulshanAdsMetaManagementSection._id.toString());

      const deletedGulshanAdsMetaManagementSection = await GulshanAdsMetaManagementSectionModel.findById(createdGulshanAdsMetaManagementSection._id);
      expect(deletedGulshanAdsMetaManagementSection).toBeNull();
    });

    it('should throw error when gulshan ads meta management section does not exist', async () => {
      await expect(GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection()).rejects.toThrow('Gulshan Ads meta management section not found');
    });
  });
});
