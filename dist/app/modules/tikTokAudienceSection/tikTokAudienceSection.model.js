"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const statisticSchema = new mongoose_1.Schema({
    percentage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        enum: ['green', 'blue'],
        required: true,
    },
});
const advertisingBenefitSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const profileSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});
const interactionsSchema = new mongoose_1.Schema({
    likes: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    shares: {
        type: String,
        required: true,
    },
});
const testimonialCardSchema = new mongoose_1.Schema({
    profile: {
        type: profileSchema,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    testimonialText: {
        type: String,
        required: true,
    },
    interactions: {
        type: interactionsSchema,
        required: true,
    },
});
const tikTokAudienceSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    statistics: {
        type: [statisticSchema],
        required: true,
        validate: {
            validator: function (statistics) {
                return statistics.length >= 1 && statistics.length <= 10;
            },
            message: 'Statistics must be between 1 and 10',
        },
    },
    advertisingBenefit: {
        type: advertisingBenefitSchema,
        required: true,
    },
    testimonialCard: {
        type: testimonialCardSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const TikTokAudienceSectionModel = (0, mongoose_1.model)("TikTokAudienceSection", tikTokAudienceSectionSchema);
exports.default = TikTokAudienceSectionModel;
