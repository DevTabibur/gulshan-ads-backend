import { Model, Schema, model } from "mongoose";
import { IPaymentAutomationSection } from "./paymentAutomationSection.interface";

type PaymentAutomationSectionModel = Model<IPaymentAutomationSection, object>;

const benefitTagSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: ['orange', 'green', 'blue'],
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
  description: {
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

const paymentAutomationSectionSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true,
    },
    highlightedText: {
      type: String,
      required: true,
    },
    benefitTags: {
      type: [benefitTagSchema],
      required: true,
      validate: {
        validator: function(benefitTags: any[]) {
          return benefitTags.length >= 1 && benefitTags.length <= 10;
        },
        message: 'Benefit tags must be between 1 and 10',
      },
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
    financialCalloutText: {
      type: String,
      required: true,
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

const PaymentAutomationSectionModel = model<IPaymentAutomationSection, PaymentAutomationSectionModel>("PaymentAutomationSection", paymentAutomationSectionSchema);
export default PaymentAutomationSectionModel;
