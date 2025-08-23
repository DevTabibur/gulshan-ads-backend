import { Model, Schema, model } from "mongoose";
import { ITikTokVideoAdvertisingSection } from "./tikTokVideoAdvertisingSection.interface";

type TikTokVideoAdvertisingSectionModel = Model<ITikTokVideoAdvertisingSection, object>;

const advertisingOptionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const budgetInfoSchema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const profileInfoSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const interactionInfoSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
});

const phoneMockupSchema = new Schema({
  profileInfo: {
    type: profileInfoSchema,
    required: true,
  },
  interactionInfo: {
    type: interactionInfoSchema,
    required: true,
  },
  adCopy: {
    type: String,
    required: true,
  },
});

const engagementStatisticSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const tikTokVideoAdvertisingSectionSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    advertisingOptions: {
      type: [advertisingOptionSchema],
      required: true,
      validate: {
        validator: function(advertisingOptions: any[]) {
          return advertisingOptions.length >= 1 && advertisingOptions.length <= 10;
        },
        message: 'Advertising options must be between 1 and 10',
      },
    },
    budgetInfo: {
      type: budgetInfoSchema,
      required: true,
    },
    phoneMockup: {
      type: phoneMockupSchema,
      required: true,
    },
    engagementStatistic: {
      type: engagementStatisticSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TikTokVideoAdvertisingSectionModel = model<ITikTokVideoAdvertisingSection, TikTokVideoAdvertisingSectionModel>("TikTokVideoAdvertisingSection", tikTokVideoAdvertisingSectionSchema);
export default TikTokVideoAdvertisingSectionModel;
