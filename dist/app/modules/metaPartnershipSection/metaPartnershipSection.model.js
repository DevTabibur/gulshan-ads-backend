"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logoSchema = new mongoose_1.Schema({
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
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
    subtitle: {
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
const metaPartnershipSectionSchema = new mongoose_1.Schema({
    leftLogo: {
        type: logoSchema,
        required: true,
    },
    rightLogo: {
        type: logoSchema,
        required: true,
    },
    title: {
        type: String,
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
const MetaPartnershipSectionModel = (0, mongoose_1.model)("MetaPartnershipSection", metaPartnershipSectionSchema);
exports.default = MetaPartnershipSectionModel;
