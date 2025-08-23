import { z } from "zod";

const keyFeatureSchema = z.object({
  text: z.string({
    required_error: "Feature text is required",
  }).min(1, "Feature text cannot be empty"),
  icon: z.string({
    required_error: "Feature icon is required",
  }).min(1, "Feature icon cannot be empty"),
  color: z.string({
    required_error: "Feature color is required",
  }).min(1, "Feature color cannot be empty"),
});

const pricingPointSchema = z.object({
  text: z.string({
    required_error: "Pricing point text is required",
  }).min(1, "Pricing point text cannot be empty"),
  icon: z.string({
    required_error: "Pricing point icon is required",
  }).min(1, "Pricing point icon cannot be empty"),
});

const engagementSchema = z.object({
  likes: z.string({
    required_error: "Likes count is required",
  }).min(1, "Likes count cannot be empty"),
  comments: z.string({
    required_error: "Comments count is required",
  }).min(1, "Comments count cannot be empty"),
  views: z.string({
    required_error: "Views count is required",
  }).min(1, "Views count cannot be empty"),
});

const buttonSchema = z.object({
  text: z.string({
    required_error: "Button text is required",
  }).min(1, "Button text cannot be empty"),
  color: z.string({
    required_error: "Button color is required",
  }).min(1, "Button color cannot be empty"),
});

const chatMessageSchema = z.object({
  sender: z.string({
    required_error: "Message sender is required",
  }).min(1, "Message sender cannot be empty"),
  timestamp: z.string({
    required_error: "Message timestamp is required",
  }).min(1, "Message timestamp cannot be empty"),
  content: z.string({
    required_error: "Message content is required",
  }).min(1, "Message content cannot be empty"),
  emoji: z.string().optional(),
  engagement: engagementSchema.optional(),
  button: buttonSchema.optional(),
});

const sponsoredAdSchema = z.object({
  label: z.string({
    required_error: "Sponsored ad label is required",
  }).min(1, "Sponsored ad label cannot be empty"),
  content: z.string({
    required_error: "Sponsored ad content is required",
  }).min(1, "Sponsored ad content cannot be empty"),
});

const chatInterfaceSchema = z.object({
  channelName: z.string({
    required_error: "Channel name is required",
  }).min(1, "Channel name cannot be empty"),
  channelSubscribers: z.string({
    required_error: "Channel subscribers count is required",
  }).min(1, "Channel subscribers count cannot be empty"),
  messages: z.array(chatMessageSchema).min(1, "At least one message is required").max(20, "Maximum 20 messages allowed"),
  sponsoredAd: sponsoredAdSchema,
});

const futureBannerSchema = z.object({
  title: z.string({
    required_error: "Future banner title is required",
  }).min(1, "Future banner title cannot be empty"),
  description: z.string({
    required_error: "Future banner description is required",
  }).min(1, "Future banner description cannot be empty"),
  icon: z.string({
    required_error: "Future banner icon is required",
  }).min(1, "Future banner icon cannot be empty"),
  gradientColors: z.array(z.string()).min(2, "At least 2 gradient colors are required").max(5, "Maximum 5 gradient colors allowed"),
});

const createTelegramSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
    pricingTitle: z.string({
      required_error: "Pricing title is required",
    }).min(1, "Pricing title cannot be empty"),
    pricingPoints: z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed"),
    ctaButton: z.object({
      text: z.string({
        required_error: "CTA button text is required",
      }).min(1, "CTA button text cannot be empty"),
      color: z.string({
        required_error: "CTA button color is required",
      }).min(1, "CTA button color cannot be empty"),
    }),
    chatInterface: chatInterfaceSchema,
    futureBanner: futureBannerSchema,
  }),
});

const updateTelegramSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed").optional(),
    pricingTitle: z.string().min(1, "Pricing title cannot be empty").optional(),
    pricingPoints: z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed").optional(),
    ctaButton: z.object({
      text: z.string().min(1, "CTA button text cannot be empty"),
      color: z.string().min(1, "CTA button color cannot be empty"),
    }).optional(),
    chatInterface: chatInterfaceSchema.optional(),
    futureBanner: futureBannerSchema.optional(),
  }),
});

const updateKeyFeaturesZodSchema = z.object({
  body: z.object({
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
  }),
});

const updatePricingPointsZodSchema = z.object({
  body: z.object({
    pricingPoints: z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed"),
  }),
});

const updateChatInterfaceZodSchema = z.object({
  body: z.object({
    chatInterface: chatInterfaceSchema,
  }),
});

const updateFutureBannerZodSchema = z.object({
  body: z.object({
    futureBanner: futureBannerSchema,
  }),
});

export const TelegramSectionValidation = {
  createTelegramSectionZodSchema,
  updateTelegramSectionZodSchema,
  updateKeyFeaturesZodSchema,
  updatePricingPointsZodSchema,
  updateChatInterfaceZodSchema,
  updateFutureBannerZodSchema,
};
