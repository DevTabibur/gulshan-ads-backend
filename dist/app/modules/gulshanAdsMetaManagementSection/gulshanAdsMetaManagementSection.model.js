"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commissionTagSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});
const balanceCardSchema = new mongoose_1.Schema({
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
            validator: function (icons) {
                return icons.length >= 1 && icons.length <= 20;
            },
            message: 'Platform icons must be between 1 and 20',
        },
    },
});
const paymentFeatureSchema = new mongoose_1.Schema({
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
const tableDataSchema = new mongoose_1.Schema({
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
const invoiceCardSchema = new mongoose_1.Schema({
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
const paperworkFeatureSchema = new mongoose_1.Schema({
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
const gulshanAdsMetaManagementSectionSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const GulshanAdsMetaManagementSectionModel = (0, mongoose_1.model)("GulshanAdsMetaManagementSection", gulshanAdsMetaManagementSectionSchema);
exports.default = GulshanAdsMetaManagementSectionModel;
