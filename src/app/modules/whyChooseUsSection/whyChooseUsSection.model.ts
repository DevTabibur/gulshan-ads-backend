import { Model, Schema, model } from "mongoose";
import { IWhyChooseUsSection } from "./whyChooseUsSection.interface";

type WhyChooseUsSectionModel = Model<IWhyChooseUsSection, object>;

const benefitCardSchema = new Schema({
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
  iconColor: {
    type: String,
    required: true,
  },
});

const whyChooseUsSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    benefits: {
      type: [benefitCardSchema],
      required: true,
      validate: {
        validator: function(benefits: any[]) {
          return benefits.length >= 1 && benefits.length <= 10;
        },
        message: 'Benefits must be between 1 and 10',
      },
    },
  },
  {
    timestamps: true,
  },
);

const WhyChooseUsSectionModel = model<IWhyChooseUsSection, WhyChooseUsSectionModel>("WhyChooseUsSection", whyChooseUsSectionSchema);
export default WhyChooseUsSectionModel;
