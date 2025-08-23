import { Model, Schema, model } from "mongoose";
import { IPricingSection } from "./pricingSection.interface";

type PricingSectionModel = Model<IPricingSection, object>;

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
  price: {
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
  ctaLink: {
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

const pricingSectionSchema = new Schema(
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

const PricingSectionModel = model<IPricingSection, PricingSectionModel>("PricingSection", pricingSectionSchema);
export default PricingSectionModel;
