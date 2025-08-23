import { Model, Schema, model } from "mongoose";
import { ITikTokClientSaysSection } from "./tikTokClientSaysSection.interface";

type TikTokClientSaysSectionModel = Model<ITikTokClientSaysSection, object>;

const companyInfoSchema = new Schema({
  initialsIcon: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const clientInfoSchema = new Schema({
  initialsIcon: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientTitle: {
    type: String,
    required: true,
  },
});

const testimonialCardSchema = new Schema({
  companyInfo: {
    type: companyInfoSchema,
    required: true,
  },
  testimonialText: {
    type: String,
    required: true,
  },
  clientInfo: {
    type: clientInfoSchema,
    required: true,
  },
});

const tikTokClientSaysSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    testimonialCards: {
      type: [testimonialCardSchema],
      required: true,
      validate: {
        validator: function(testimonialCards: any[]) {
          return testimonialCards.length >= 1 && testimonialCards.length <= 20;
        },
        message: 'Testimonial cards must be between 1 and 20',
      },
    },
  },
  {
    timestamps: true,
  },
);

const TikTokClientSaysSectionModel = model<ITikTokClientSaysSection, TikTokClientSaysSectionModel>("TikTokClientSaysSection", tikTokClientSaysSectionSchema);
export default TikTokClientSaysSectionModel;
