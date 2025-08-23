"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialCardSchema = new mongoose_1.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    testimonialText: {
        type: String,
        required: true,
    },
    reviewerName: {
        type: String,
        required: true,
    },
    reviewerTitle: {
        type: String,
        required: true,
    },
    impactMetric: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
    },
});
const advertisersStorySectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    testimonials: {
        type: [testimonialCardSchema],
        required: true,
        validate: {
            validator: function (testimonials) {
                return testimonials.length >= 1 && testimonials.length <= 20;
            },
            message: 'Testimonials must be between 1 and 20',
        },
    },
}, {
    timestamps: true,
});
const AdvertisersStorySectionModel = (0, mongoose_1.model)("AdvertisersStorySection", advertisersStorySectionSchema);
exports.default = AdvertisersStorySectionModel;
