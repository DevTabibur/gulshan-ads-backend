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
const pricingPointSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});
const engagementSchema = new mongoose_1.Schema({
    likes: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    views: {
        type: String,
        required: true,
    },
});
const buttonSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const chatMessageSchema = new mongoose_1.Schema({
    sender: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    emoji: {
        type: String,
        required: false,
    },
    engagement: {
        type: engagementSchema,
        required: false,
    },
    button: {
        type: buttonSchema,
        required: false,
    },
});
const sponsoredAdSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const chatInterfaceSchema = new mongoose_1.Schema({
    channelName: {
        type: String,
        required: true,
    },
    channelSubscribers: {
        type: String,
        required: true,
    },
    messages: {
        type: [chatMessageSchema],
        required: true,
        validate: {
            validator: function (messages) {
                return messages.length >= 1 && messages.length <= 20;
            },
            message: 'Chat messages must be between 1 and 20',
        },
    },
    sponsoredAd: {
        type: sponsoredAdSchema,
        required: true,
    },
});
const futureBannerSchema = new mongoose_1.Schema({
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
    gradientColors: {
        type: [String],
        required: true,
        validate: {
            validator: function (colors) {
                return colors.length >= 2 && colors.length <= 5;
            },
            message: 'Gradient colors must be between 2 and 5',
        },
    },
});
const telegramSectionSchema = new mongoose_1.Schema({
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
    pricingTitle: {
        type: String,
        required: true,
    },
    pricingPoints: {
        type: [pricingPointSchema],
        required: true,
        validate: {
            validator: function (points) {
                return points.length >= 1 && points.length <= 10;
            },
            message: 'Pricing points must be between 1 and 10',
        },
    },
    ctaButton: {
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    chatInterface: {
        type: chatInterfaceSchema,
        required: true,
    },
    futureBanner: {
        type: futureBannerSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const TelegramSectionModel = (0, mongoose_1.model)("TelegramSection", telegramSectionSchema);
exports.default = TelegramSectionModel;
