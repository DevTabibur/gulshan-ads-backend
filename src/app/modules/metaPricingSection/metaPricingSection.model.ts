import { Model, Schema, model } from "mongoose";
import { IMetaPricingSection } from "./metaPricingSection.interface";

type MetaPricingSectionModel = Model<IMetaPricingSection, object>;

const pricingFeatureSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const pricingPlanSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  minimumSpend: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [pricingFeatureSchema],
    required: true,
    validate: {
      validator: function(features: any[]) {
        return features.length >= 1 && features.length <= 20;
      },
      message: 'Features must be between 1 and 20',
    },
  },
  ctaText: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  popularTag: {
    type: String,
    required: false,
  },
});

const metaPricingSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    plans: {
      type: [pricingPlanSchema],
      required: true,
      validate: {
        validator: function(plans: any[]) {
          return plans.length >= 1 && plans.length <= 10;
        },
        message: 'Pricing plans must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const MetaPricingSectionModel = model<IMetaPricingSection, MetaPricingSectionModel>("MetaPricingSection", metaPricingSectionSchema);
export default MetaPricingSectionModel;
