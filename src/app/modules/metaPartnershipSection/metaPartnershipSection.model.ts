import { Model, Schema, model } from "mongoose";
import { IMetaPartnershipSection } from "./metaPartnershipSection.interface";

type MetaPartnershipSectionModel = Model<IMetaPartnershipSection, object>;

const logoSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const featureCardSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});

const ctaButtonSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const metaPartnershipSectionSchema = new Schema(
  {
    leftLogo: {
      type: logoSchema,
      required: true,
    },
    rightLogo: {
      type: logoSchema,
      required: true,
    },
    title: {
      type: String,
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

const MetaPartnershipSectionModel = model<IMetaPartnershipSection, MetaPartnershipSectionModel>("MetaPartnershipSection", metaPartnershipSectionSchema);
export default MetaPartnershipSectionModel;
