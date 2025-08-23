"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const advertisingOptionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const budgetInfoSchema = new mongoose_1.Schema({
    amount: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const profileInfoSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});
const interactionInfoSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    count: {
        type: String,
        required: true,
    },
});
const phoneMockupSchema = new mongoose_1.Schema({
    profileInfo: {
        type: profileInfoSchema,
        required: true,
    },
    interactionInfo: {
        type: interactionInfoSchema,
        required: true,
    },
    adCopy: {
        type: String,
        required: true,
    },
});
const engagementStatisticSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const tikTokVideoAdvertisingSectionSchema = new mongoose_1.Schema({
    mainTitle: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    advertisingOptions: {
        type: [advertisingOptionSchema],
        required: true,
        validate: {
            validator: function (advertisingOptions) {
                return advertisingOptions.length >= 1 && advertisingOptions.length <= 10;
            },
            message: 'Advertising options must be between 1 and 10',
        },
    },
    budgetInfo: {
        type: budgetInfoSchema,
        required: true,
    },
    phoneMockup: {
        type: phoneMockupSchema,
        required: true,
    },
    engagementStatistic: {
        type: engagementStatisticSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const TikTokVideoAdvertisingSectionModel = (0, mongoose_1.model)("TikTokVideoAdvertisingSection", tikTokVideoAdvertisingSectionSchema);
exports.default = TikTokVideoAdvertisingSectionModel;
