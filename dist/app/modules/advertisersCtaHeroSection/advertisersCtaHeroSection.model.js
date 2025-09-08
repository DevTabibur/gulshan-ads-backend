"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ctaButtonSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        enum: ['primary', 'secondary'],
        required: true,
    },
});
const benefitSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
});
const advertisersCtaHeroSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
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
    benefits: {
        type: [benefitSchema],
        required: true,
        validate: {
            validator: function (benefits) {
                return benefits.length >= 1 && benefits.length <= 10;
            },
            message: 'Benefits must be between 1 and 10',
        },
    },
}, {
    timestamps: true,
});
const AdvertisersCtaHeroSectionModel = (0, mongoose_1.model)("AdvertisersCtaHeroSection", advertisersCtaHeroSectionSchema);
exports.default = AdvertisersCtaHeroSectionModel;
