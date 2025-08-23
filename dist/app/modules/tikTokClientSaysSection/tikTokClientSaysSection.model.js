"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const companyInfoSchema = new mongoose_1.Schema({
    initialsIcon: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
});
const clientInfoSchema = new mongoose_1.Schema({
    initialsIcon: {
        type: String,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    clientTitle: {
        type: String,
        required: true,
    },
});
const testimonialCardSchema = new mongoose_1.Schema({
    companyInfo: {
        type: companyInfoSchema,
        required: true,
    },
    testimonialText: {
        type: String,
        required: true,
    },
    clientInfo: {
        type: clientInfoSchema,
        required: true,
    },
});
const tikTokClientSaysSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    testimonialCards: {
        type: [testimonialCardSchema],
        required: true,
        validate: {
            validator: function (testimonialCards) {
                return testimonialCards.length >= 1 && testimonialCards.length <= 20;
            },
            message: 'Testimonial cards must be between 1 and 20',
        },
    },
}, {
    timestamps: true,
});
const TikTokClientSaysSectionModel = (0, mongoose_1.model)("TikTokClientSaysSection", tikTokClientSaysSectionSchema);
exports.default = TikTokClientSaysSectionModel;
