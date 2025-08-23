export interface ICompanyInfo {
  initialsIcon: string;
  companyName: string;
  rating: number; // 1-5 stars
}

export interface IClientInfo {
  initialsIcon: string;
  clientName: string;
  clientTitle: string;
}

export interface ITestimonialCard {
  companyInfo: ICompanyInfo;
  testimonialText: string;
  clientInfo: IClientInfo;
}

export interface ITikTokClientSaysSection {
  title: string;
  subtitle: string;
  testimonialCards: ITestimonialCard[];
}

export interface ITikTokClientSaysSectionResponse {
  message?: string;
  data?: Partial<ITikTokClientSaysSection>;
}
