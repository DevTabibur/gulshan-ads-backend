"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    authorImage: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    companyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["published", "pending", "archived"],
        default: "published",
    },
}, {
    timestamps: true,
});
const TestimonialModel = (0, mongoose_1.model)("Testimonial", testimonialSchema);
exports.default = TestimonialModel;
