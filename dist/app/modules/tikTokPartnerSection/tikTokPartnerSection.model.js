"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const partnershipLogosSchema = new mongoose_1.Schema({
    leftLogoIcon: {
        type: String,
        required: true,
    },
    rightLogoIcon: {
        type: String,
        required: true,
    },
    separatorIcon: {
        type: String,
        required: true,
    },
});
const featureCardSchema = new mongoose_1.Schema({
    cardTitle: {
        type: String,
        required: true,
    },
    cardSubtitle: {
        type: String,
        required: true,
    },
});
const ctaButtonSchema = new mongoose_1.Schema({
    ctaButtonText: {
        type: String,
        required: true,
    },
    ctaButtonLink: {
        type: String,
        required: false,
    },
});
const tikTokPartnerSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    partnershipLogos: {
        type: partnershipLogosSchema,
        required: true,
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
    ctaButton: {
        type: ctaButtonSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const TikTokPartnerSectionModel = (0, mongoose_1.model)("TikTokPartnerSection", tikTokPartnerSectionSchema);
exports.default = TikTokPartnerSectionModel;
