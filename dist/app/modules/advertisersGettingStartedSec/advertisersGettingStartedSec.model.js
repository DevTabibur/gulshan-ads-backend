"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const processStepSchema = new mongoose_1.Schema({
    stepNumber: {
        type: String,
        required: true,
    },
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
    duration: {
        type: String,
        required: true,
    },
});
const advertisersGettingStartedSecSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    steps: {
        type: [processStepSchema],
        required: true,
        validate: {
            validator: function (steps) {
                return steps.length >= 1 && steps.length <= 10;
            },
            message: 'Process steps must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const AdvertisersGettingStartedSecModel = (0, mongoose_1.model)("AdvertisersGettingStartedSec", advertisersGettingStartedSecSchema);
exports.default = AdvertisersGettingStartedSecModel;
