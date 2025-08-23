export interface IAdvertisingOption {
  title: string;
  description: string;
}

export interface IBudgetInfo {
  amount: string;
  label: string;
}

export interface IProfileInfo {
  icon: string;
  username: string;
}

export interface IInteractionInfo {
  icon: string;
  count: string;
}

export interface IPhoneMockup {
  profileInfo: IProfileInfo;
  interactionInfo: IInteractionInfo;
  adCopy: string;
}

export interface IEngagementStatistic {
  value: string;
  label: string;
}

export interface ITikTokVideoAdvertisingSection {
  mainTitle: string;
  subtitle: string;
  description: string;
  advertisingOptions: IAdvertisingOption[];
  budgetInfo: IBudgetInfo;
  phoneMockup: IPhoneMockup;
  engagementStatistic: IEngagementStatistic;
}

export interface ITikTokVideoAdvertisingSectionResponse {
  message?: string;
  data?: Partial<ITikTokVideoAdvertisingSection>;
}
