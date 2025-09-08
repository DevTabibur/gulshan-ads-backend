"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const keyFeatureSchema = new mongoose_1.Schema({
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
const testimonialSchema = new mongoose_1.Schema({
    authorName: {
        type: String,
        required: true,
    },
    authorPosition: {
        type: String,
        required: true,
    },
    authorInitials: {
        type: String,
        required: true,
        maxlength: 5,
    },
});
const serviceCardSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
        required: true,
    },
    socialMediaIcons: {
        type: [String],
        default: [],
    },
    testimonial: {
        type: testimonialSchema,
        required: false,
    },
});
const statisticSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    label: {
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
    type: {
        type: String,
        enum: ['primary', 'secondary'],
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
});
const advertisingSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    keyFeatures: {
        type: [keyFeatureSchema],
        required: true,
        validate: {
            validator: function (features) {
                return features.length >= 1 && features.length <= 10;
            },
            message: 'Key features must be between 1 and 10',
        },
    },
    serviceCards: {
        type: [serviceCardSchema],
        required: true,
        validate: {
            validator: function (cards) {
                return cards.length >= 1 && cards.length <= 10;
            },
            message: 'Service cards must be between 1 and 10',
        },
    },
    statistics: {
        type: [statisticSchema],
        required: true,
        validate: {
            validator: function (stats) {
                return stats.length >= 1 && stats.length <= 10;
            },
            message: 'Statistics must be between 1 and 10',
        },
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
}, {
    timestamps: true,
});
const AdvertisingSectionModel = (0, mongoose_1.model)("AdvertisingSection", advertisingSectionSchema);
exports.default = AdvertisingSectionModel;
