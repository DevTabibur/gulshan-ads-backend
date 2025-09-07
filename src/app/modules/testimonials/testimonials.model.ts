import { Model, Schema, model } from "mongoose";
import { ITestimonial } from "./testimonials.interface";

type TestimonialModel = Model<ITestimonial, object>;

const testimonialSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

const TestimonialModel = model<ITestimonial, TestimonialModel>("Testimonial", testimonialSchema);
export default TestimonialModel
