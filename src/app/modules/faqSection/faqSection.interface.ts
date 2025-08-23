export interface IFAQItem {
  question: string;
  answer: string;
}

export interface IFAQSection {
  title: string;
  subtitle: string;
  faqItems: IFAQItem[];
}

export interface IFAQSectionResponse {
  message?: string;
  data?: Partial<IFAQSection>;
}
