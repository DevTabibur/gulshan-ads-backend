import { Model, Schema, model } from "mongoose";
import { IBlogCategory } from "./blogCategory.interface";

type BlogCategoryModel = Model<IBlogCategory, object>;

const blogCategorySchema = new Schema(
    {
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
    },
    {
        timestamps: true,
    },
);

const BlogCategoryModel = model<IBlogCategory, BlogCategoryModel>("BlogCategory", blogCategorySchema);
export default BlogCategoryModel;
