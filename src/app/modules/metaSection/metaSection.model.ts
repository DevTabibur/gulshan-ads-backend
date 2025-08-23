import { Model, Schema, model } from "mongoose";
import { IMetaSection } from "./metaSection.interface";

type MetaSectionModel = Model<IMetaSection, object>;

const platformIconSchema = new Schema({
  platform: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const featureButtonSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const serviceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: true,
  },
});

const performanceStatisticSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const metaSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    platformIcons: {
      type: [platformIconSchema],
      required: true,
      validate: {
        validator: function(icons: any[]) {
          return icons.length >= 1 && icons.length <= 10;
        },
        message: 'Platform icons must be between 1 and 10',
      },
    },
    featureButtons: {
      type: [featureButtonSchema],
      required: true,
      validate: {
        validator: function(buttons: any[]) {
          return buttons.length >= 1 && buttons.length <= 10;
        },
        message: 'Feature buttons must be between 1 and 10',
      },
    },
    serviceCards: {
      type: [serviceCardSchema],
      required: true,
      validate: {
        validator: function(cards: any[]) {
          return cards.length >= 1 && cards.length <= 10;
        },
        message: 'Service cards must be between 1 and 10',
      },
    },
    performanceTitle: {
      type: String,
      required: true,
    },
    performanceSubtitle: {
      type: String,
      required: true,
    },
    performanceStatistics: {
      type: [performanceStatisticSchema],
      required: true,
      validate: {
        validator: function(stats: any[]) {
          return stats.length >= 1 && stats.length <= 10;
        },
        message: 'Performance statistics must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const MetaSectionModel = model<IMetaSection, MetaSectionModel>("MetaSection", metaSectionSchema);
export default MetaSectionModel;
