export interface IProcessStep {
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
}

export interface IAdvertisersGettingStartedSec {
  title: string;
  subtitle: string;
  steps: IProcessStep[];
}

export interface IAdvertisersGettingStartedSecResponse {
  message?: string;
  data?: Partial<IAdvertisersGettingStartedSec>;
}
