"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const platformIconSchema = new mongoose_1.Schema({
    platform: {
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
const featureButtonSchema = new mongoose_1.Schema({
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
});
const performanceStatisticSchema = new mongoose_1.Schema({
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
const metaSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    platformIcons: {
        type: [platformIconSchema],
        required: true,
        validate: {
            validator: function (icons) {
                return icons.length >= 1 && icons.length <= 10;
            },
            message: 'Platform icons must be between 1 and 10',
        },
    },
    featureButtons: {
        type: [featureButtonSchema],
        required: true,
        validate: {
            validator: function (buttons) {
                return buttons.length >= 1 && buttons.length <= 10;
            },
            message: 'Feature buttons must be between 1 and 10',
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
    performanceTitle: {
        type: String,
        required: true,
    },
    performanceSubtitle: {
        type: String,
        required: true,
    },
    performanceStatistics: {
        type: [performanceStatisticSchema],
        required: true,
        validate: {
            validator: function (stats) {
                return stats.length >= 1 && stats.length <= 10;
            },
            message: 'Performance statistics must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const MetaSectionModel = (0, mongoose_1.model)("MetaSection", metaSectionSchema);
exports.default = MetaSectionModel;
