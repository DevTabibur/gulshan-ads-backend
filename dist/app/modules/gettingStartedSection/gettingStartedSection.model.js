"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const stepSchema = new mongoose_1.Schema({
    number: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    title: {
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
    iconColor: {
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
    action: {
        type: String,
        required: true,
    },
});
const gettingStartedSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    steps: {
        type: [stepSchema],
        required: true,
        validate: {
            validator: function (steps) {
                return steps.length >= 1 && steps.length <= 10;
            },
            message: 'Steps must be between 1 and 10',
        },
    },
    ctaTitle: {
        type: String,
        required: true,
    },
    ctaDescription: {
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
}, {
    timestamps: true,
});
const GettingStartedSectionModel = (0, mongoose_1.model)("GettingStartedSection", gettingStartedSectionSchema);
exports.default = GettingStartedSectionModel;
