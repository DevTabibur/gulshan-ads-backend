"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GulshanAdsMetaManagementSectionValidation = void 0;
const zod_1 = require("zod");
const commissionTagSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Commission tag text is required",
    }).min(1, "Commission tag text cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Commission tag icon is required",
    }).min(1, "Commission tag icon cannot be empty"),
});
const balanceCardSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Balance card title is required",
    }).min(1, "Balance card title cannot be empty"),
    amount: zod_1.z.string({
        required_error: "Balance amount is required",
    }).min(1, "Balance amount cannot be empty"),
    currency: zod_1.z.string({
        required_error: "Currency is required",
    }).min(1, "Currency cannot be empty"),
    platformIcons: zod_1.z.array(zod_1.z.string()).min(1, "At least one platform icon is required").max(20, "Maximum 20 platform icons allowed"),
});
const paymentFeatureSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Payment feature icon is required",
    }).min(1, "Payment feature icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Payment feature title is required",
    }).min(1, "Payment feature title cannot be empty"),
    subtitle: zod_1.z.string({
        required_error: "Payment feature subtitle is required",
    }).min(1, "Payment feature subtitle cannot be empty"),
    balanceCard: balanceCardSchema,
    sectionTitle: zod_1.z.string({
        required_error: "Payment section title is required",
    }).min(1, "Payment section title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Payment description is required",
    }).min(1, "Payment description cannot be empty"),
});
const tableDataSchema = zod_1.z.object({
    month: zod_1.z.string({
        required_error: "Month is required",
    }).min(1, "Month cannot be empty"),
    amount: zod_1.z.string({
        required_error: "Amount is required",
    }).min(1, "Amount cannot be empty"),
    vat: zod_1.z.string({
        required_error: "VAT is required",
    }).min(1, "VAT cannot be empty"),
    downloadIcon: zod_1.z.string({
        required_error: "Download icon is required",
    }).min(1, "Download icon cannot be empty"),
});
const invoiceCardSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Invoice card title is required",
    }).min(1, "Invoice card title cannot be empty"),
    requestButton: zod_1.z.string({
        required_error: "Request button text is required",
    }).min(1, "Request button text cannot be empty"),
    tableData: tableDataSchema,
});
const paperworkFeatureSchema = zod_1.z.object({
    invoiceCard: invoiceCardSchema,
    sectionTitle: zod_1.z.string({
        required_error: "Paperwork section title is required",
    }).min(1, "Paperwork section title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Paperwork description is required",
    }).min(1, "Paperwork description cannot be empty"),
});
const createGulshanAdsMetaManagementSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        commissionTag: commissionTagSchema,
        paymentFeature: paymentFeatureSchema,
        paperworkFeature: paperworkFeatureSchema,
    }),
});
const updateGulshanAdsMetaManagementSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        commissionTag: commissionTagSchema.optional(),
        paymentFeature: paymentFeatureSchema.optional(),
        paperworkFeature: paperworkFeatureSchema.optional(),
    }),
});
const updateCommissionTagZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        commissionTag: commissionTagSchema,
    }),
});
const updatePaymentFeatureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        paymentFeature: paymentFeatureSchema,
    }),
});
const updatePaperworkFeatureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        paperworkFeature: paperworkFeatureSchema,
    }),
});
exports.GulshanAdsMetaManagementSectionValidation = {
    createGulshanAdsMetaManagementSectionZodSchema,
    updateGulshanAdsMetaManagementSectionZodSchema,
    updateCommissionTagZodSchema,
    updatePaymentFeatureZodSchema,
    updatePaperworkFeatureZodSchema,
};
