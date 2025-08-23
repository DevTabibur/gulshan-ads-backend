import { Model, Schema, model } from "mongoose";
import { IMetaSuccessStoriesSection } from "./metaSuccessStoriesSection.interface";

type MetaSuccessStoriesSectionModel = Model<IMetaSuccessStoriesSection, object>;

const metricSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const testimonialCardSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  reviewerTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  testimonialText: {
    type: String,
    required: true,
  },
  metrics: {
    type: [metricSchema],
    required: true,
    validate: {
      validator: function(metrics: any[]) {
        return metrics.length >= 1 && metrics.length <= 10;
      },
      message: 'Metrics must be between 1 and 10',
    },
  },
});

const metaSuccessStoriesSectionSchema = new Schema(
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

const MetaSuccessStoriesSectionModel = model<IMetaSuccessStoriesSection, MetaSuccessStoriesSectionModel>("MetaSuccessStoriesSection", metaSuccessStoriesSectionSchema);
export default MetaSuccessStoriesSectionModel;
