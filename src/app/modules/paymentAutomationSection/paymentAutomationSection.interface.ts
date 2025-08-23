export interface IBenefitTag {
  text: string;
  color: 'orange' | 'green' | 'blue';
}

export interface IFeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ICTAButton {
  text: string;
  color: string;
}

export interface IPaymentAutomationSection {
  mainTitle: string;
  highlightedText: string;
  benefitTags: IBenefitTag[];
  featureCards: IFeatureCard[];
  financialCalloutText: string;
  ctaButton: ICTAButton;
}

export interface IPaymentAutomationSectionResponse {
  message?: string;
  data?: Partial<IPaymentAutomationSection>;
}
