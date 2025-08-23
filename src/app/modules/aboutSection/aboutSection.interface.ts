export interface IStatistic {
  value: string;
  label: string;
  icon: string;
  iconColor: string;
}

export interface IClientType {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  features: string[];
}

export interface IMissionPillar {
  title: string;
  description: string;
}

export interface IAboutSection {
  aboutTitle: string;
  aboutDescription: string;
  statistics: IStatistic[];
  weWorkWithTitle: string;
  weWorkWithDescription: string;
  clientTypes: IClientType[];
  missionTitle: string;
  missionDescription: string;
  missionPillars: IMissionPillar[];
}

export interface IAboutSectionResponse {
  message?: string;
  data?: Partial<IAboutSection>;
}
