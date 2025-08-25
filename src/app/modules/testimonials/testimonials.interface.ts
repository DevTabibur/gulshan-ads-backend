export interface ITestimonial {
  _id: any;
  updatedAt: any;
  createdAt: any;
  authorUrl: string;
  fullName: string;
  rating: number;
  companyName: string;
  description: string;
}

export interface ITestimonialResponse {
  message?: string;
  data?: Partial<ITestimonial>;
}
