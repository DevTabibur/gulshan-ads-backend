export interface IPricingFeature {
  text: string;
}

export interface IPricingPlan {
  icon: string;
  title: string;
  minimumSpend: string;
  description: string;
  features: IPricingFeature[];
  ctaText: string;
  isPopular?: boolean;
  popularTag?: string;
}

export interface IMetaPricingSection {
  title: string;
  subtitle: string;
  plans: IPricingPlan[];
}

export interface IMetaPricingSectionResponse {
  message?: string;
  data?: Partial<IMetaPricingSection>;
}
