export interface IKeyFeature {
  text: string;
  icon: string;
  color: string;
}

export interface IServiceCard {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  socialMediaIcons?: string[];
  testimonial?: {
    authorName: string;
    authorPosition: string;
    authorInitials: string;
  };
}

export interface IStatistic {
  value: string;
  label: string;
  color: string;
}

export interface ICTAButton {
  text: string;
  type: 'primary' | 'secondary';
  color: string;
  action: string;
}

export interface IAdvertisingSection {
  title: string;
  subtitle: string;
  keyFeatures: IKeyFeature[];
  serviceCards: IServiceCard[];
  statistics: IStatistic[];
  ctaButtons: ICTAButton[];
}

export interface IAdvertisingSectionResponse {
  message?: string;
  data?: Partial<IAdvertisingSection>;
}
