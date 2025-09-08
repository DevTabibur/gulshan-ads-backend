"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pricingFeatureSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
});
const pricingPlanSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    features: {
        type: [pricingFeatureSchema],
        required: true,
        validate: {
            validator: function (features) {
                return features.length >= 1 && features.length <= 20;
            },
            message: 'Features must be between 1 and 20',
        },
    },
    ctaText: {
        type: String,
        required: true,
    },
    ctaLink: {
        type: String,
        required: true,
    },
    isPopular: {
        type: Boolean,
        default: false,
    },
    popularTag: {
        type: String,
        required: false,
    },
});
const pricingSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    plans: {
        type: [pricingPlanSchema],
        required: true,
        validate: {
            validator: function (plans) {
                return plans.length >= 1 && plans.length <= 10;
            },
            message: 'Pricing plans must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const PricingSectionModel = (0, mongoose_1.model)("PricingSection", pricingSectionSchema);
exports.default = PricingSectionModel;
