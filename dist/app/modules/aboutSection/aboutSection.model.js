"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const statisticSchema = new mongoose_1.Schema({
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
        required: true,
    },
});
const clientTypeSchema = new mongoose_1.Schema({
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
    features: {
        type: [String],
        required: true,
        validate: {
            validator: function (features) {
                return features.length >= 1 && features.length <= 10;
            },
            message: 'Features must be between 1 and 10',
        },
    },
});
const missionPillarSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const aboutSectionSchema = new mongoose_1.Schema({
    aboutTitle: {
        type: String,
        required: true,
    },
    aboutDescription: {
        type: String,
        required: true,
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
    weWorkWithTitle: {
        type: String,
        required: true,
    },
    weWorkWithDescription: {
        type: String,
        required: true,
    },
    clientTypes: {
        type: [clientTypeSchema],
        required: true,
        validate: {
            validator: function (types) {
                return types.length >= 1 && types.length <= 10;
            },
            message: 'Client types must be between 1 and 10',
        },
    },
    missionTitle: {
        type: String,
        required: true,
    },
    missionDescription: {
        type: String,
        required: true,
    },
    missionPillars: {
        type: [missionPillarSchema],
        required: true,
        validate: {
            validator: function (pillars) {
                return pillars.length >= 1 && pillars.length <= 10;
            },
            message: 'Mission pillars must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const AboutSectionModel = (0, mongoose_1.model)("AboutSection", aboutSectionSchema);
exports.default = AboutSectionModel;
