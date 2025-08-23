import { Model, Schema, model } from "mongoose";
import { IMetaHeroSection } from "./metaHeroSection.interface";

type MetaHeroSectionModel = Model<IMetaHeroSection, object>;

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

const metaHeroSectionSchema = new Schema(
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
    statistics: {
      type: [statisticSchema],
      required: true,
      validate: {
        validator: function(stats: any[]) {
          return stats.length >= 1 && stats.length <= 10;
        },
        message: 'Statistics must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const MetaHeroSectionModel = model<IMetaHeroSection, MetaHeroSectionModel>("MetaHeroSection", metaHeroSectionSchema);
export default MetaHeroSectionModel;
