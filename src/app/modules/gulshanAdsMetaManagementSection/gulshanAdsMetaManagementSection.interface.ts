export interface ICommissionTag {
  text: string;
  icon: string;
}

export interface IPaymentFeature {
  icon: string;
  title: string;
  subtitle: string;
  balanceCard: {
    title: string;
    amount: string;
    currency: string;
    platformIcons: string[];
  };
  sectionTitle: string;
  description: string;
}

export interface IPaperworkFeature {
  invoiceCard: {
    title: string;
    requestButton: string;
    tableData: {
      month: string;
      amount: string;
      vat: string;
      downloadIcon: string;
    };
  };
  sectionTitle: string;
  description: string;
}

export interface IGulshanAdsMetaManagementSection {
  title: string;
  commissionTag: ICommissionTag;
  paymentFeature: IPaymentFeature;
  paperworkFeature: IPaperworkFeature;
}

export interface IGulshanAdsMetaManagementSectionResponse {
  message?: string;
  data?: Partial<IGulshanAdsMetaManagementSection>;
}
