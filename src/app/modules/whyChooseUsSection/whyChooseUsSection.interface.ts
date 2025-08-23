export interface IBenefitCard {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
}

export interface IWhyChooseUsSection {
  title: string;
  subtitle: string;
  benefits: IBenefitCard[];
}

export interface IWhyChooseUsSectionResponse {
  message?: string;
  data?: Partial<IWhyChooseUsSection>;
}
