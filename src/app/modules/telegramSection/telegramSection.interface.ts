export interface IKeyFeature {
  text: string;
  icon: string;
  color: string;
}

export interface IPricingPoint {
  text: string;
  icon: string;
}

export interface IChatMessage {
  sender: string;
  timestamp: string;
  content: string;
  emoji?: string;
  engagement?: {
    likes: string;
    comments: string;
    views: string;
  };
  button?: {
    text: string;
    color: string;
  };
}

export interface IChatInterface {
  channelName: string;
  channelSubscribers: string;
  messages: IChatMessage[];
  sponsoredAd: {
    label: string;
    content: string;
  };
}

export interface IFutureBanner {
  title: string;
  description: string;
  icon: string;
  gradientColors: string[];
}

export interface ITelegramSection {
  title: string;
  subtitle: string;
  keyFeatures: IKeyFeature[];
  pricingTitle: string;
  pricingPoints: IPricingPoint[];
  ctaButton: {
    text: string;
    color: string;
  };
  chatInterface: IChatInterface;
  futureBanner: IFutureBanner;
}

export interface ITelegramSectionResponse {
  message?: string;
  data?: Partial<ITelegramSection>;
}
