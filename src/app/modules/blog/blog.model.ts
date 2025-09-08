import { Model, Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

type BlogModel = Model<IBlog, object>;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
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
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  },
);

const BlogModel = model<IBlog, BlogModel>("Blog", blogSchema);
export default BlogModel;
