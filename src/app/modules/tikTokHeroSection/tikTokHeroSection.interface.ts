export interface ICTAButton {
  text: string;
  type: 'primary' | 'secondary';
  icon?: string;
}

export interface IStatistic {
  value: string;
  label: string;
}

export interface IPhoneMockup {
  profilePicture: {
    initials: string;
    color: string;
  };
  username: string;
  adCopy: string;
  interactions: {
    likes: string;
    comments: string;
    shares: string;
  };
  learnMoreLink: string;
}

export interface ITikTokHeroSection {
  title: string;
  description: string;
  ctaButtons: ICTAButton[];
  statistics: IStatistic[];
  phoneMockup: IPhoneMockup;
  decorativeElements: {
    lightningIcon: string;
    floatingHeartIcon: string;
  };
}

export interface ITikTokHeroSectionResponse {
  message?: string;
  data?: Partial<ITikTokHeroSection>;
}
