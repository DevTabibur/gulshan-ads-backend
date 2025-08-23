"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const benefitTagSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        enum: ['orange', 'green', 'blue'],
        required: true,
    },
});
const featureCardSchema = new mongoose_1.Schema({
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
});
const ctaButtonSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const paymentAutomationSectionSchema = new mongoose_1.Schema({
    mainTitle: {
        type: String,
        required: true,
    },
    highlightedText: {
        type: String,
        required: true,
    },
    benefitTags: {
        type: [benefitTagSchema],
        required: true,
        validate: {
            validator: function (benefitTags) {
                return benefitTags.length >= 1 && benefitTags.length <= 10;
            },
            message: 'Benefit tags must be between 1 and 10',
        },
    },
    featureCards: {
        type: [featureCardSchema],
        required: true,
        validate: {
            validator: function (featureCards) {
                return featureCards.length >= 1 && featureCards.length <= 10;
            },
            message: 'Feature cards must be between 1 and 10',
        },
    },
    financialCalloutText: {
        type: String,
        required: true,
    },
    ctaButton: {
        type: ctaButtonSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const PaymentAutomationSectionModel = (0, mongoose_1.model)("PaymentAutomationSection", paymentAutomationSectionSchema);
exports.default = PaymentAutomationSectionModel;
