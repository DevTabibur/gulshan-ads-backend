export interface IStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconColor: string;
}

export interface ICTAButton {
  text: string;
  type: 'primary' | 'secondary';
  action: string;
}

export interface IGettingStartedSection {
  title: string;
  description: string;
  steps: IStep[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: ICTAButton[];
}

export interface IGettingStartedSectionResponse {
  message?: string;
  data?: Partial<IGettingStartedSection>;
}
