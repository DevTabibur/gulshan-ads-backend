export interface ISpendFeature {
  label: string;
  text: string;
  indicators: string[];
}

export interface IProgressIndicator {
  text: string;
  progress: number;
  total: number;
  color: string;
}

export interface IChatInterface {
  profileIcon: string;
  name: string;
  status: string;
  message: string;
}

export interface IManagementCard {
  icon: string;
  title: string;
  description: string;
  spendFeature?: ISpendFeature;
  progressIndicator?: IProgressIndicator;
  chatInterface?: IChatInterface;
}

export interface ICampaignLaunchManagementSection {
  title: string;
  icon: string;
  cards: IManagementCard[];
}

export interface ICampaignLaunchManagementSectionResponse {
  message?: string;
  data?: Partial<ICampaignLaunchManagementSection>;
}
