export interface ITopPill {
  text: string;
  icon: string;
  color: string;
}

export interface ICTAButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
}

export interface IRating {
  score: string;
  reviewCount: string;
}

export interface ICampaignMetric {
  value: string;
  label: string;
}

export interface ICampaignPerformance {
  title: string;
  percentageChange: string;
  metrics: ICampaignMetric[];
  adPlatform: string;
  adSpend: string;
}

export interface IBottomStatistic {
  value: string;
  label: string;
  icon: string;
  iconColor?: string;
}

export interface IAdvertisersHeroSection {
  topPill: ITopPill;
  mainTitle: string;
  mainDescription: string;
  ctaButtons: ICTAButton[];
  rating: IRating;
  campaignPerformance: ICampaignPerformance;
  bottomStatistics: IBottomStatistic[];
}

export interface IAdvertisersHeroSectionResponse {
  message?: string;
  data?: Partial<IAdvertisersHeroSection>;
}
