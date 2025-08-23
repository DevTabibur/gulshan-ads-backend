export interface ITrustedCompany {
  abbreviation: string;
  fullName: string;
  iconColor: string;
}

export interface IStatistic {
  value: string;
  label: string;
  color: string;
}

export interface IFeaturedTestimonial {
  quote: string;
  authorName: string;
  authorPosition: string;
  authorCompany: string;
  authorInitials: string;
}

export interface ITrustSection {
  title: string;
  subtitle: string;
  trustedCompanies: ITrustedCompany[];
  statistics: IStatistic[];
  featuredTestimonial: IFeaturedTestimonial;
}

export interface ITrustSectionResponse {
  message?: string;
  data?: Partial<ITrustSection>;
}
