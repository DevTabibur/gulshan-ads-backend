"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const benefitCardSchema = new mongoose_1.Schema({
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
    iconColor: {
        type: String,
        required: true,
    },
});
const whyChooseUsSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    benefits: {
        type: [benefitCardSchema],
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
const WhyChooseUsSectionModel = (0, mongoose_1.model)("WhyChooseUsSection", whyChooseUsSectionSchema);
exports.default = WhyChooseUsSectionModel;
