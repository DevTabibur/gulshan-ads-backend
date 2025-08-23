import { Model, Schema, model } from "mongoose";
import { ICampaignLaunchManagementSection } from "./campaignLaunchManagementSection.interface";

type CampaignLaunchManagementSectionModel = Model<ICampaignLaunchManagementSection, object>;

const spendFeatureSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  indicators: {
    type: [String],
    required: true,
    validate: {
      validator: function(indicators: string[]) {
        return indicators.length >= 1 && indicators.length <= 10;
      },
      message: 'Indicators must be between 1 and 10',
    },
  },
});

const progressIndicatorSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
    min: 1,
  },
  color: {
    type: String,
    required: true,
  },
});

const chatInterfaceSchema = new Schema({
  profileIcon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const managementCardSchema = new Schema({
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
  spendFeature: {
    type: spendFeatureSchema,
    required: false,
  },
  progressIndicator: {
    type: progressIndicatorSchema,
    required: false,
  },
  chatInterface: {
    type: chatInterfaceSchema,
    required: false,
  },
});

const campaignLaunchManagementSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    cards: {
      type: [managementCardSchema],
      required: true,
      validate: {
        validator: function(cards: any[]) {
          return cards.length >= 1 && cards.length <= 10;
        },
        message: 'Management cards must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const CampaignLaunchManagementSectionModel = model<ICampaignLaunchManagementSection, CampaignLaunchManagementSectionModel>("CampaignLaunchManagementSection", campaignLaunchManagementSectionSchema);
export default CampaignLaunchManagementSectionModel;
