export interface ISubscribeSection {
  icon: string;
  title: string;
  subtitle: string;
  emailPlaceholder: string;
  subscribeButtonText: string;
  legalDisclaimer: string;
}

export interface ISubscribeSectionResponse {
  message?: string;
  data?: Partial<ISubscribeSection>;
}
