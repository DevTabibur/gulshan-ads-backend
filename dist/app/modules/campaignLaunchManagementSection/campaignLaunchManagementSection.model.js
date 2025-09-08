"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const spendFeatureSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    indicators: {
        type: [String],
        required: true,
        validate: {
            validator: function (indicators) {
                return indicators.length >= 1 && indicators.length <= 10;
            },
            message: 'Indicators must be between 1 and 10',
        },
    },
});
const progressIndicatorSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    progress: {
        type: Number,
        required: true,
        min: 0,
    },
    total: {
        type: Number,
        required: true,
        min: 1,
    },
    color: {
        type: String,
        required: true,
    },
});
const chatInterfaceSchema = new mongoose_1.Schema({
    profileIcon: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
const managementCardSchema = new mongoose_1.Schema({
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
    spendFeature: {
        type: spendFeatureSchema,
        required: false,
    },
    progressIndicator: {
        type: progressIndicatorSchema,
        required: false,
    },
    chatInterface: {
        type: chatInterfaceSchema,
        required: false,
    },
});
const campaignLaunchManagementSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    cards: {
        type: [managementCardSchema],
        required: true,
        validate: {
            validator: function (cards) {
                return cards.length >= 1 && cards.length <= 10;
            },
            message: 'Management cards must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const CampaignLaunchManagementSectionModel = (0, mongoose_1.model)("CampaignLaunchManagementSection", campaignLaunchManagementSectionSchema);
exports.default = CampaignLaunchManagementSectionModel;
