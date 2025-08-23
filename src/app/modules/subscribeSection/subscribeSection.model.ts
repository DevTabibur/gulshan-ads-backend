import { Model, Schema, model } from "mongoose";
import { ISubscribeSection } from "./subscribeSection.interface";

type SubscribeSectionModel = Model<ISubscribeSection, object>;

const subscribeSectionSchema = new Schema(
  {
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
    emailPlaceholder: {
      type: String,
      required: true,
    },
    subscribeButtonText: {
      type: String,
      required: true,
    },
    legalDisclaimer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const SubscribeSectionModel = model<ISubscribeSection, SubscribeSectionModel>("SubscribeSection", subscribeSectionSchema);
export default SubscribeSectionModel;
