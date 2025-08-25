"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    slug: {
        type: String,
        trim: true, unique: true, required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
}, {
    timestamps: true,
});
const BlogCategoryModel = (0, mongoose_1.model)("BlogCategory", blogCategorySchema);
exports.default = BlogCategoryModel;
