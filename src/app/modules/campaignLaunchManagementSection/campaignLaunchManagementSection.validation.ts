import { z } from "zod";

const spendFeatureSchema = z.object({
  label: z.string({
    required_error: "Spend feature label is required",
  }).min(1, "Spend feature label cannot be empty"),
  text: z.string({
    required_error: "Spend feature text is required",
  }).min(1, "Spend feature text cannot be empty"),
  indicators: z.array(z.string()).min(1, "At least one indicator is required").max(10, "Maximum 10 indicators allowed"),
});

const progressIndicatorSchema = z.object({
  text: z.string({
    required_error: "Progress indicator text is required",
  }).min(1, "Progress indicator text cannot be empty"),
  progress: z.number({
    required_error: "Progress value is required",
  }).min(0, "Progress must be 0 or greater"),
  total: z.number({
    required_error: "Total value is required",
  }).min(1, "Total must be 1 or greater"),
  color: z.string({
    required_error: "Progress color is required",
  }).min(1, "Progress color cannot be empty"),
});

const chatInterfaceSchema = z.object({
  profileIcon: z.string({
    required_error: "Profile icon is required",
  }).min(1, "Profile icon cannot be empty"),
  name: z.string({
    required_error: "Name is required",
  }).min(1, "Name cannot be empty"),
  status: z.string({
    required_error: "Status is required",
  }).min(1, "Status cannot be empty"),
  message: z.string({
    required_error: "Message is required",
  }).min(1, "Message cannot be empty"),
});

const managementCardSchema = z.object({
  icon: z.string({
    required_error: "Card icon is required",
  }).min(1, "Card icon cannot be empty"),
  title: z.string({
    required_error: "Card title is required",
  }).min(1, "Card title cannot be empty"),
  description: z.string({
    required_error: "Card description is required",
  }).min(1, "Card description cannot be empty"),
  spendFeature: spendFeatureSchema.optional(),
  progressIndicator: progressIndicatorSchema.optional(),
  chatInterface: chatInterfaceSchema.optional(),
});

const createCampaignLaunchManagementSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    icon: z.string({
      required_error: "Icon is required",
    }).min(1, "Icon cannot be empty"),
    cards: z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed"),
  }),
});

const updateCampaignLaunchManagementSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    icon: z.string().min(1, "Icon cannot be empty").optional(),
    cards: z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed").optional(),
  }),
});

const updateCardsZodSchema = z.object({
  body: z.object({
    cards: z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed"),
  }),
});

export const CampaignLaunchManagementSectionValidation = {
  createCampaignLaunchManagementSectionZodSchema,
  updateCampaignLaunchManagementSectionZodSchema,
  updateCardsZodSchema,
};
