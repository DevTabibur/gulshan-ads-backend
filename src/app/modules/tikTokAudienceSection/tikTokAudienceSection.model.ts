import { Model, Schema, model } from "mongoose";
import { ITikTokAudienceSection } from "./tikTokAudienceSection.interface";

type TikTokAudienceSectionModel = Model<ITikTokAudienceSection, object>;

const statisticSchema = new Schema({
  percentage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: ['green', 'blue'],
    required: true,
  },
});

const advertisingBenefitSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const profileSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  username: {
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

const testimonialCardSchema = new Schema({
  profile: {
    type: profileSchema,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  testimonialText: {
    type: String,
    required: true,
  },
  interactions: {
    type: interactionsSchema,
    required: true,
  },
});

const tikTokAudienceSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
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
    advertisingBenefit: {
      type: advertisingBenefitSchema,
      required: true,
    },
    testimonialCard: {
      type: testimonialCardSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TikTokAudienceSectionModel = model<ITikTokAudienceSection, TikTokAudienceSectionModel>("TikTokAudienceSection", tikTokAudienceSectionSchema);
export default TikTokAudienceSectionModel;
