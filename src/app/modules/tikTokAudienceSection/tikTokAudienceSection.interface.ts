export interface IStatistic {
  percentage: string;
  description: string;
  color: 'green' | 'blue';
}

export interface IAdvertisingBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ITestimonialCard {
  profile: {
    icon: string;
    username: string;
  };
  timestamp: string;
  testimonialText: string;
  interactions: {
    likes: string;
    comments: string;
    shares: string;
  };
}

export interface ITikTokAudienceSection {
  title: string;
  statistics: IStatistic[];
  advertisingBenefit: IAdvertisingBenefit;
  testimonialCard: ITestimonialCard;
}

export interface ITikTokAudienceSectionResponse {
  message?: string;
  data?: Partial<ITikTokAudienceSection>;
}
