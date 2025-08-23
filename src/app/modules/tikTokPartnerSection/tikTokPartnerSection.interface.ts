export interface IPartnershipLogos {
  leftLogoIcon: string;
  rightLogoIcon: string;
  separatorIcon: string;
}

export interface IFeatureCard {
  cardTitle: string;
  cardSubtitle: string;
}

export interface ICTAButton {
  ctaButtonText: string;
  ctaButtonLink?: string;
}

export interface ITikTokPartnerSection {
  title: string;
  description: string;
  partnershipLogos: IPartnershipLogos;
  featureCards: IFeatureCard[];
  ctaButton: ICTAButton;
}

export interface ITikTokPartnerSectionResponse {
  message?: string;
  data?: Partial<ITikTokPartnerSection>;
}
