import { Model, Schema, model } from "mongoose";
import { IAdvertisersCtaHeroSection } from "./advertisersCtaHeroSection.interface";

type AdvertisersCtaHeroSectionModel = Model<IAdvertisersCtaHeroSection, object>;

const ctaButtonSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    enum: ['primary', 'secondary'],
    required: true,
  },
});

const benefitSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const advertisersCtaHeroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    ctaButtons: {
      type: [ctaButtonSchema],
      required: true,
      validate: {
        validator: function(buttons: any[]) {
          return buttons.length >= 1 && buttons.length <= 5;
        },
        message: 'CTA buttons must be between 1 and 5',
      },
    },
    benefits: {
      type: [benefitSchema],
      required: true,
      validate: {
        validator: function(benefits: any[]) {
          return benefits.length >= 1 && benefits.length <= 10;
        },
        message: 'Benefits must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const AdvertisersCtaHeroSectionModel = model<IAdvertisersCtaHeroSection, AdvertisersCtaHeroSectionModel>("AdvertisersCtaHeroSection", advertisersCtaHeroSectionSchema);
export default AdvertisersCtaHeroSectionModel;
