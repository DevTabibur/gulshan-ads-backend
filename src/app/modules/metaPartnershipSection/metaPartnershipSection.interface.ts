export interface ILogo {
  icon: string;
  color: string;
}

export interface IFeatureCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface IMetaPartnershipSection {
  leftLogo: ILogo;
  rightLogo: ILogo;
  title: string;
  featureCards: IFeatureCard[];
  ctaButton: {
    text: string;
    color: string;
  };
}

export interface IMetaPartnershipSectionResponse {
  message?: string;
  data?: Partial<IMetaPartnershipSection>;
}
