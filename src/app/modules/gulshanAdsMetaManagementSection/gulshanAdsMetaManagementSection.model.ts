import { Model, Schema, model } from "mongoose";
import { IGulshanAdsMetaManagementSection } from "./gulshanAdsMetaManagementSection.interface";

type GulshanAdsMetaManagementSectionModel = Model<IGulshanAdsMetaManagementSection, object>;

const commissionTagSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const balanceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  platformIcons: {
    type: [String],
    required: true,
    validate: {
      validator: function(icons: string[]) {
        return icons.length >= 1 && icons.length <= 20;
      },
      message: 'Platform icons must be between 1 and 20',
    },
  },
});

const paymentFeatureSchema = new Schema({
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
  balanceCard: {
    type: balanceCardSchema,
    required: true,
  },
  sectionTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const tableDataSchema = new Schema({
  month: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  vat: {
    type: String,
    required: true,
  },
  downloadIcon: {
    type: String,
    required: true,
  },
});

const invoiceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  requestButton: {
    type: String,
    required: true,
  },
  tableData: {
    type: tableDataSchema,
    required: true,
  },
});

const paperworkFeatureSchema = new Schema({
  invoiceCard: {
    type: invoiceCardSchema,
    required: true,
  },
  sectionTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const gulshanAdsMetaManagementSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    commissionTag: {
      type: commissionTagSchema,
      required: true,
    },
    paymentFeature: {
      type: paymentFeatureSchema,
      required: true,
    },
    paperworkFeature: {
      type: paperworkFeatureSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const GulshanAdsMetaManagementSectionModel = model<IGulshanAdsMetaManagementSection, GulshanAdsMetaManagementSectionModel>("GulshanAdsMetaManagementSection", gulshanAdsMetaManagementSectionSchema);
export default GulshanAdsMetaManagementSectionModel;
