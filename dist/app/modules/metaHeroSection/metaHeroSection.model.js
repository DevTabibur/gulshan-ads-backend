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
const statisticSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
const metaHeroSectionSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const MetaHeroSectionModel = (0, mongoose_1.model)("MetaHeroSection", metaHeroSectionSchema);
exports.default = MetaHeroSectionModel;
