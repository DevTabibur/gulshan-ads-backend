import { Model, Schema, model } from "mongoose";
import { IHelperServicesSection } from "./helperServicesSection.interface";

type HelperServicesSectionModel = Model<IHelperServicesSection, object>;

const serviceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
});

const helperServicesSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    recommendedLabel: {
      type: String,
      required: true,
    },
    recommendedCount: {
      type: Number,
      required: true,
      min: 0,
    },
    currentlyUsedLabel: {
      type: String,
      required: true,
    },
    currentlyUsedCount: {
      type: Number,
      required: true,
      min: 0,
    },
    services: {
      type: [serviceCardSchema],
      required: true,
      validate: {
        validator: function(services: any[]) {
          return services.length >= 1 && services.length <= 20;
        },
        message: 'Services must be between 1 and 20',
      },
    },
  },
  {
    timestamps: true,
  },
);

const HelperServicesSectionModel = model<IHelperServicesSection, HelperServicesSectionModel>("HelperServicesSection", helperServicesSectionSchema);
export default HelperServicesSectionModel;
