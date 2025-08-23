export interface IPricingFeature {
  text: string;
}

export interface IPricingPlan {
  icon: string;
  title: string;
  price: string;
  description: string;
  features: IPricingFeature[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  popularTag?: string;
}

export interface IPricingSection {
  title: string;
  subtitle: string;
  plans: IPricingPlan[];
}

export interface IPricingSectionResponse {
  message?: string;
  data?: Partial<IPricingSection>;
}
