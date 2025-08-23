import { Model, Schema, model } from "mongoose";
import { IAdvertisersGettingStartedSec } from "./advertisersGettingStartedSec.interface";

type AdvertisersGettingStartedSecModel = Model<IAdvertisersGettingStartedSec, object>;

const processStepSchema = new Schema({
  stepNumber: {
    type: String,
    required: true,
  },
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
  duration: {
    type: String,
    required: true,
  },
});

const advertisersGettingStartedSecSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    steps: {
      type: [processStepSchema],
      required: true,
      validate: {
        validator: function(steps: any[]) {
          return steps.length >= 1 && steps.length <= 10;
        },
        message: 'Process steps must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const AdvertisersGettingStartedSecModel = model<IAdvertisersGettingStartedSec, AdvertisersGettingStartedSecModel>("AdvertisersGettingStartedSec", advertisersGettingStartedSecSchema);
export default AdvertisersGettingStartedSecModel;
