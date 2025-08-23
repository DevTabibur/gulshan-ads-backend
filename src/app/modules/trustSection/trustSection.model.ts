import { Model, Schema, model } from "mongoose";
import { ITrustSection } from "./trustSection.interface";

type TrustSectionModel = Model<ITrustSection, object>;

const trustedCompanySchema = new Schema({
  abbreviation: {
    type: String,
    required: true,
    maxlength: 10,
  },
  fullName: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
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
  color: {
    type: String,
    required: true,
  },
});

const featuredTestimonialSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorPosition: {
    type: String,
    required: true,
  },
  authorCompany: {
    type: String,
    required: true,
  },
  authorInitials: {
    type: String,
    required: true,
    maxlength: 5,
  },
});

const trustSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    trustedCompanies: {
      type: [trustedCompanySchema],
      required: true,
      validate: {
        validator: function(companies: any[]) {
          return companies.length >= 1 && companies.length <= 20;
        },
        message: 'Trusted companies must be between 1 and 20',
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
    featuredTestimonial: {
      type: featuredTestimonialSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TrustSectionModel = model<ITrustSection, TrustSectionModel>("TrustSection", trustSectionSchema);
export default TrustSectionModel;
