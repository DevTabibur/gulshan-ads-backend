"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    excerpt: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'published',
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true,
    },
    featuredImage: {
        type: String,
        trim: true,
        required: true
    },
    tags: [{
            type: String,
            trim: true,
            required: true
        }],
    slug: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
}, {
    timestamps: true,
});
const BlogModel = (0, mongoose_1.model)("Blog", blogSchema);
exports.default = BlogModel;
