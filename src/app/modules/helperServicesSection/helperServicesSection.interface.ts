export interface IServiceCard {
  title: string;
  subtitle: string;
  rating: number;
  stars: number;
}

export interface IHelperServicesSection {
  title: string;
  icon: string;
  description: string;
  recommendedLabel: string;
  recommendedCount: number;
  currentlyUsedLabel: string;
  currentlyUsedCount: number;
  services: IServiceCard[];
}

export interface IHelperServicesSectionResponse {
  message?: string;
  data?: Partial<IHelperServicesSection>;
}
