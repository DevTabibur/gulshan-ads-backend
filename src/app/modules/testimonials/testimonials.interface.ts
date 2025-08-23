export interface ITestimonial {
  updatedAt(updatedAt: any): unknown;
  createdAt(createdAt: any): unknown;
  private _id(_id: any): unknown;
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
