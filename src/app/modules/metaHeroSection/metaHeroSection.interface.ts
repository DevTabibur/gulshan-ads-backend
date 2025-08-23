export interface ICTAButton {
  text: string;
  link: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

export interface IStatistic {
  value: string;
  label: string;
}

export interface IMetaHeroSection {
  title: string;
  subtitle: string;
  ctaButtons: ICTAButton[];
  statistics: IStatistic[];
}

export interface IMetaHeroSectionResponse {
  message?: string;
  data?: Partial<IMetaHeroSection>;
}
