"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutSectionValidation = void 0;
const zod_1 = require("zod");
const statisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Statistic value is required",
    }).min(1, "Statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Statistic label is required",
    }).min(1, "Statistic label cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Statistic icon is required",
    }).min(1, "Statistic icon cannot be empty"),
    iconColor: zod_1.z.string({
        required_error: "Statistic icon color is required",
    }).min(1, "Statistic icon color cannot be empty"),
});
const clientTypeSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Client type title is required",
    }).min(1, "Client type title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Client type description is required",
    }).min(1, "Client type description cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Client type icon is required",
    }).min(1, "Client type icon cannot be empty"),
    iconColor: zod_1.z.string({
        required_error: "Client type icon color is required",
    }).min(1, "Client type icon color cannot be empty"),
    features: zod_1.z.array(zod_1.z.string()).min(1, "At least one feature is required").max(10, "Maximum 10 features allowed"),
});
const missionPillarSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Mission pillar title is required",
    }).min(1, "Mission pillar title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Mission pillar description is required",
    }).min(1, "Mission pillar description cannot be empty"),
});
const createAboutSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        aboutTitle: zod_1.z.string({
            required_error: "About title is required",
        }).min(1, "About title cannot be empty"),
        aboutDescription: zod_1.z.string({
            required_error: "About description is required",
        }).min(1, "About description cannot be empty"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
        weWorkWithTitle: zod_1.z.string({
            required_error: "We Work With title is required",
        }).min(1, "We Work With title cannot be empty"),
        weWorkWithDescription: zod_1.z.string({
            required_error: "We Work With description is required",
        }).min(1, "We Work With description cannot be empty"),
        clientTypes: zod_1.z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed"),
        missionTitle: zod_1.z.string({
            required_error: "Mission title is required",
        }).min(1, "Mission title cannot be empty"),
        missionDescription: zod_1.z.string({
            required_error: "Mission description is required",
        }).min(1, "Mission description cannot be empty"),
        missionPillars: zod_1.z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed"),
    }),
});
const updateAboutSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        aboutTitle: zod_1.z.string().min(1, "About title cannot be empty").optional(),
        aboutDescription: zod_1.z.string().min(1, "About description cannot be empty").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
        weWorkWithTitle: zod_1.z.string().min(1, "We Work With title cannot be empty").optional(),
        weWorkWithDescription: zod_1.z.string().min(1, "We Work With description cannot be empty").optional(),
        clientTypes: zod_1.z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed").optional(),
        missionTitle: zod_1.z.string().min(1, "Mission title cannot be empty").optional(),
        missionDescription: zod_1.z.string().min(1, "Mission description cannot be empty").optional(),
        missionPillars: zod_1.z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed").optional(),
    }),
});
const updateStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
const updateClientTypesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        clientTypes: zod_1.z.array(clientTypeSchema).min(1, "At least one client type is required").max(10, "Maximum 10 client types allowed"),
    }),
});
const updateMissionPillarsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        missionPillars: zod_1.z.array(missionPillarSchema).min(1, "At least one mission pillar is required").max(10, "Maximum 10 mission pillars allowed"),
    }),
});
exports.AboutSectionValidation = {
    createAboutSectionZodSchema,
    updateAboutSectionZodSchema,
    updateStatisticsZodSchema,
    updateClientTypesZodSchema,
    updateMissionPillarsZodSchema,
};
