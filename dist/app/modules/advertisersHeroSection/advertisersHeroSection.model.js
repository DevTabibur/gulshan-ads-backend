"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const topPillSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const ctaButtonSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['primary', 'secondary'],
        required: true,
    },
});
const ratingSchema = new mongoose_1.Schema({
    score: {
        type: String,
        required: true,
    },
    reviewCount: {
        type: String,
        required: true,
    },
});
const campaignMetricSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const campaignPerformanceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    percentageChange: {
        type: String,
        required: true,
    },
    metrics: {
        type: [campaignMetricSchema],
        required: true,
        validate: {
            validator: function (metrics) {
                return metrics.length >= 1 && metrics.length <= 10;
            },
            message: 'Campaign metrics must be between 1 and 10',
        },
    },
    adPlatform: {
        type: String,
        required: true,
    },
    adSpend: {
        type: String,
        required: true,
    },
});
const bottomStatisticSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
        required: false,
    },
});
const advertisersHeroSectionSchema = new mongoose_1.Schema({
    topPill: {
        type: topPillSchema,
        required: true,
    },
    mainTitle: {
        type: String,
        required: true,
    },
    mainDescription: {
        type: String,
        required: true,
    },
    ctaButtons: {
        type: [ctaButtonSchema],
        required: true,
        validate: {
            validator: function (buttons) {
                return buttons.length >= 1 && buttons.length <= 5;
            },
            message: 'CTA buttons must be between 1 and 5',
        },
    },
    rating: {
        type: ratingSchema,
        required: true,
    },
    campaignPerformance: {
        type: campaignPerformanceSchema,
        required: true,
    },
    bottomStatistics: {
        type: [bottomStatisticSchema],
        required: true,
        validate: {
            validator: function (stats) {
                return stats.length >= 1 && stats.length <= 10;
            },
            message: 'Bottom statistics must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const AdvertisersHeroSectionModel = (0, mongoose_1.model)("AdvertisersHeroSection", advertisersHeroSectionSchema);
exports.default = AdvertisersHeroSectionModel;
