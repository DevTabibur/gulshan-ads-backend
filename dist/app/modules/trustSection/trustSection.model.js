"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const trustedCompanySchema = new mongoose_1.Schema({
    abbreviation: {
        type: String,
        required: true,
        maxlength: 10,
    },
    fullName: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
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
    color: {
        type: String,
        required: true,
    },
});
const featuredTestimonialSchema = new mongoose_1.Schema({
    quote: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    authorPosition: {
        type: String,
        required: true,
    },
    authorCompany: {
        type: String,
        required: true,
    },
    authorInitials: {
        type: String,
        required: true,
        maxlength: 5,
    },
});
const trustSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    trustedCompanies: {
        type: [trustedCompanySchema],
        required: true,
        validate: {
            validator: function (companies) {
                return companies.length >= 1 && companies.length <= 20;
            },
            message: 'Trusted companies must be between 1 and 20',
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
    featuredTestimonial: {
        type: featuredTestimonialSchema,
        required: true,
    },
}, {
    timestamps: true,
});
const TrustSectionModel = (0, mongoose_1.model)("TrustSection", trustSectionSchema);
exports.default = TrustSectionModel;
