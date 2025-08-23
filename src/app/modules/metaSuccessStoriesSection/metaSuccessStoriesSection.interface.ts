export interface IMetric {
  label: string;
  value: string;
  color: string;
}

export interface ITestimonialCard {
  reviewerName: string;
  reviewerTitle: string;
  companyName: string;
  initials: string;
  rating: number;
  testimonialText: string;
  metrics: IMetric[];
}

export interface IMetaSuccessStoriesSection {
  title: string;
  subtitle: string;
  testimonials: ITestimonialCard[];
}

export interface IMetaSuccessStoriesSectionResponse {
  message?: string;
  data?: Partial<IMetaSuccessStoriesSection>;
}
