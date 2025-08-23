import { Model, Schema, model } from "mongoose";
import { ITikTokPartnerSection } from "./tikTokPartnerSection.interface";

type TikTokPartnerSectionModel = Model<ITikTokPartnerSection, object>;

const partnershipLogosSchema = new Schema({
  leftLogoIcon: {
    type: String,
    required: true,
  },
  rightLogoIcon: {
    type: String,
    required: true,
  },
  separatorIcon: {
    type: String,
    required: true,
  },
});

const featureCardSchema = new Schema({
  cardTitle: {
    type: String,
    required: true,
  },
  cardSubtitle: {
    type: String,
    required: true,
  },
});

const ctaButtonSchema = new Schema({
  ctaButtonText: {
    type: String,
    required: true,
  },
  ctaButtonLink: {
    type: String,
    required: false,
  },
});

const tikTokPartnerSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    partnershipLogos: {
      type: partnershipLogosSchema,
      required: true,
    },
    featureCards: {
      type: [featureCardSchema],
      required: true,
      validate: {
        validator: function(featureCards: any[]) {
          return featureCards.length >= 1 && featureCards.length <= 10;
        },
        message: 'Feature cards must be between 1 and 10',
      },
    },
    ctaButton: {
      type: ctaButtonSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TikTokPartnerSectionModel = model<ITikTokPartnerSection, TikTokPartnerSectionModel>("TikTokPartnerSection", tikTokPartnerSectionSchema);
export default TikTokPartnerSectionModel;
