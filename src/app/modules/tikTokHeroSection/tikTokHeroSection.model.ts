import { Model, Schema, model } from "mongoose";
import { ITikTokHeroSection } from "./tikTokHeroSection.interface";

type TikTokHeroSectionModel = Model<ITikTokHeroSection, object>;

const ctaButtonSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['primary', 'secondary'],
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
});

const statisticSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const profilePictureSchema = new Schema({
  initials: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const interactionsSchema = new Schema({
  likes: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  shares: {
    type: String,
    required: true,
  },
});

const phoneMockupSchema = new Schema({
  profilePicture: {
    type: profilePictureSchema,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  adCopy: {
    type: String,
    required: true,
  },
  interactions: {
    type: interactionsSchema,
    required: true,
  },
  learnMoreLink: {
    type: String,
    required: true,
  },
});

const decorativeElementsSchema = new Schema({
  lightningIcon: {
    type: String,
    required: true,
  },
  floatingHeartIcon: {
    type: String,
    required: true,
  },
});

const tikTokHeroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ctaButtons: {
      type: [ctaButtonSchema],
      required: true,
      validate: {
        validator: function(ctaButtons: any[]) {
          return ctaButtons.length >= 1 && ctaButtons.length <= 5;
        },
        message: 'CTA buttons must be between 1 and 5',
      },
    },
    statistics: {
      type: [statisticSchema],
      required: true,
      validate: {
        validator: function(statistics: any[]) {
          return statistics.length >= 1 && statistics.length <= 10;
        },
        message: 'Statistics must be between 1 and 10',
      },
    },
    phoneMockup: {
      type: phoneMockupSchema,
      required: true,
    },
    decorativeElements: {
      type: decorativeElementsSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TikTokHeroSectionModel = model<ITikTokHeroSection, TikTokHeroSectionModel>("TikTokHeroSection", tikTokHeroSectionSchema);
export default TikTokHeroSectionModel;
