export interface IHeroSection {
  title: string;
  subtitle: string;
}

export interface IHeroSectionResponse {
  message?: string;
  data?: Partial<IHeroSection>;
}
