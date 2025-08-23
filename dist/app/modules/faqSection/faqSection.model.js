"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const faqItemSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});
const faqSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    faqItems: {
        type: [faqItemSchema],
        required: true,
        validate: {
            validator: function (faqItems) {
                return faqItems.length >= 1 && faqItems.length <= 50;
            },
            message: 'FAQ items must be between 1 and 50',
        },
    },
}, {
    timestamps: true,
});
const FAQSectionModel = (0, mongoose_1.model)("FAQSection", faqSectionSchema);
exports.default = FAQSectionModel;
