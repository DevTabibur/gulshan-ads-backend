export interface IPlatformIcon {
  platform: string;
  icon: string;
  color: string;
}

export interface IFeatureButton {
  text: string;
  icon: string;
  color: string;
}

export interface IServiceCard {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

export interface IPerformanceStatistic {
  value: string;
  label: string;
  color: string;
}

export interface IMetaSection {
  title: string;
  subtitle: string;
  platformIcons: IPlatformIcon[];
  featureButtons: IFeatureButton[];
  serviceCards: IServiceCard[];
  performanceTitle: string;
  performanceSubtitle: string;
  performanceStatistics: IPerformanceStatistic[];
}

export interface IMetaSectionResponse {
  message?: string;
  data?: Partial<IMetaSection>;
}
