export interface ITestimonialCard {
  rating: number;
  testimonialText: string;
  reviewerName: string;
  reviewerTitle: string;
  impactMetric: string;
  profileImage?: string;
}

export interface IAdvertisersStorySection {
  title: string;
  subtitle: string;
  testimonials: ITestimonialCard[];
}

export interface IAdvertisersStorySectionResponse {
  message?: string;
  data?: Partial<IAdvertisersStorySection>;
}
