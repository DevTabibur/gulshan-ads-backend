"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subscribeSectionSchema = new mongoose_1.Schema({
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
    emailPlaceholder: {
        type: String,
        required: true,
    },
    subscribeButtonText: {
        type: String,
        required: true,
    },
    legalDisclaimer: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const SubscribeSectionModel = (0, mongoose_1.model)("SubscribeSection", subscribeSectionSchema);
exports.default = SubscribeSectionModel;
