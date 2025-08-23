import { Model, Schema, model } from "mongoose";
import { IAdvertisersStorySection } from "./advertisersStorySection.interface";

type AdvertisersStorySectionModel = Model<IAdvertisersStorySection, object>;

const testimonialCardSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  testimonialText: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerTitle: {
    type: String,
    required: true,
  },
  impactMetric: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
});

const advertisersStorySectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    testimonials: {
      type: [testimonialCardSchema],
      required: true,
      validate: {
        validator: function(testimonials: any[]) {
          return testimonials.length >= 1 && testimonials.length <= 20;
        },
        message: 'Testimonials must be between 1 and 20',
      },
    },
  },
  {
    timestamps: true,
  },
);

const AdvertisersStorySectionModel = model<IAdvertisersStorySection, AdvertisersStorySectionModel>("AdvertisersStorySection", advertisersStorySectionSchema);
export default AdvertisersStorySectionModel;
