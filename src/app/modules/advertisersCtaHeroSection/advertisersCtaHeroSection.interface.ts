export interface ICTAButton {
  text: string;
  link: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

export interface IBenefit {
  text: string;
}

export interface IAdvertisersCtaHeroSection {
  title: string;
  subtitle: string;
  ctaButtons: ICTAButton[];
  benefits: IBenefit[];
}

export interface IAdvertisersCtaHeroSectionResponse {
  message?: string;
  data?: Partial<IAdvertisersCtaHeroSection>;
}
