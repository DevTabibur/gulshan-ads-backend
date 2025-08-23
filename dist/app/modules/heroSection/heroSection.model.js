"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const heroSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const HeroSectionModel = (0, mongoose_1.model)("HeroSection", heroSectionSchema);
exports.default = HeroSectionModel;
