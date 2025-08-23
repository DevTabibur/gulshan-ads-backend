import { Model, Schema, model } from "mongoose";
import { IFAQSection } from "./faqSection.interface";

type FAQSectionModel = Model<IFAQSection, object>;

const faqItemSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const faqSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    faqItems: {
      type: [faqItemSchema],
      required: true,
      validate: {
        validator: function(faqItems: any[]) {
          return faqItems.length >= 1 && faqItems.length <= 50;
        },
        message: 'FAQ items must be between 1 and 50',
      },
    },
  },
  {
    timestamps: true,
  },
);

const FAQSectionModel = model<IFAQSection, FAQSectionModel>("FAQSection", faqSectionSchema);
export default FAQSectionModel;
