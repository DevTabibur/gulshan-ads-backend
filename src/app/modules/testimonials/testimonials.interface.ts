export interface ITestimonial {
  authorImage: string;
  fullName: string;
  rating: number;
  companyName: string;
  description: string;
}

export interface ITestimonialResponse {
  message?: string;
  data?: Partial<ITestimonial>;
}
