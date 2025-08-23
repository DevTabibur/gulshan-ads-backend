import { z } from "zod";

const statisticSchema = z.object({
  value: z.string({
    required_error: "Statistic value is required",
  }).min(1, "Statistic value cannot be empty"),
  label: z.string({
    required_error: "Statistic label is required",
  }).min(1, "Statistic label cannot be empty"),
  icon: z.string({
    required_error: "Statistic icon is required",
  }).min(1, "Statistic icon cannot be empty"),
  iconColor: z.string({
    required_error: "Statistic icon color is required",
  }).min(1, "Statistic icon color cannot be empty"),
});

const clientTypeSchema = z.object({
  title: z.string({
    required_error: "Client type title is required",
  }).min(1, "Client type title cannot be empty"),
  description: z.string({
    required_error: "Client type description is required",
  }).min(1, "Client type description cannot be empty"),
  icon: z.string({
    required_error: "Client type icon is required",
  }).min(1, "Client type icon cannot be empty"),
  iconColor: z.string({
    required_error: "Client type icon color is required",
  }).min(1, "Client type icon color cannot be empty"),
  features: z.array(z.string()).min(1, "At least one feature is required").max(10, "Maximum 10 features allowed"),
});

const missionPillarSchema = z.object({
  title: z.string({
    required_error: "Mission pillar title is required",
  }).min(1, "Mission pillar title cannot be empty"),
  description: z.string({
    required_error: "Mission pillar description is required",
  }).min(1, "Mission pillar description cannot be empty"),
});

const createAboutSectionZodSchema = z.object({
  body: z.object({
    aboutTitle: z.string({
      required_error: "About title is required",
    }).min(1, "About title cannot be empty"),
    aboutDescription: z.string({
      required_error: "About description is required",
    }).min(1, "About description cannot be empty"),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    weWorkWithTitle: z.string({
      required_error: "We Work With title is required",
    }).min(1, "We Work With title cannot be empty"),
    weWorkWithDescription: z.string({
      required_error: "We Work With description is required",
    }).min(1, "We Work With description cannot be empty"),
    clientTypes: z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed"),
    missionTitle: z.string({
      required_error: "Mission title is required",
    }).min(1, "Mission title cannot be empty"),
    missionDescription: z.string({
      required_error: "Mission description is required",
    }).min(1, "Mission description cannot be empty"),
    missionPillars: z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed"),
  }),
});

const updateAboutSectionZodSchema = z.object({
  body: z.object({
    aboutTitle: z.string().min(1, "About title cannot be empty").optional(),
    aboutDescription: z.string().min(1, "About description cannot be empty").optional(),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    weWorkWithTitle: z.string().min(1, "We Work With title cannot be empty").optional(),
    weWorkWithDescription: z.string().min(1, "We Work With description cannot be empty").optional(),
    clientTypes: z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed").optional(),
    missionTitle: z.string().min(1, "Mission title cannot be empty").optional(),
    missionDescription: z.string().min(1, "Mission description cannot be empty").optional(),
    missionPillars: z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed").optional(),
  }),
});

const updateStatisticsZodSchema = z.object({
  body: z.object({
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
  }),
});

const updateClientTypesZodSchema = z.object({
  body: z.object({
    clientTypes: z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed"),
  }),
});

const updateMissionPillarsZodSchema = z.object({
  body: z.object({
    missionPillars: z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed"),
  }),
});

export const AboutSectionValidation = {
  createAboutSectionZodSchema,
  updateAboutSectionZodSchema,
  updateStatisticsZodSchema,
  updateClientTypesZodSchema,
  updateMissionPillarsZodSchema,
};
