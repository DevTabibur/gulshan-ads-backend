import { z } from "zod";

const commissionTagSchema = z.object({
  text: z.string({
    required_error: "Commission tag text is required",
  }).min(1, "Commission tag text cannot be empty"),
  icon: z.string({
    required_error: "Commission tag icon is required",
  }).min(1, "Commission tag icon cannot be empty"),
});

const balanceCardSchema = z.object({
  title: z.string({
    required_error: "Balance card title is required",
  }).min(1, "Balance card title cannot be empty"),
  amount: z.string({
    required_error: "Balance amount is required",
  }).min(1, "Balance amount cannot be empty"),
  currency: z.string({
    required_error: "Currency is required",
  }).min(1, "Currency cannot be empty"),
  platformIcons: z.array(z.string()).min(1, "At least one platform icon is required").max(20, "Maximum 20 platform icons allowed"),
});

const paymentFeatureSchema = z.object({
  icon: z.string({
    required_error: "Payment feature icon is required",
  }).min(1, "Payment feature icon cannot be empty"),
  title: z.string({
    required_error: "Payment feature title is required",
  }).min(1, "Payment feature title cannot be empty"),
  subtitle: z.string({
    required_error: "Payment feature subtitle is required",
  }).min(1, "Payment feature subtitle cannot be empty"),
  balanceCard: balanceCardSchema,
  sectionTitle: z.string({
    required_error: "Payment section title is required",
  }).min(1, "Payment section title cannot be empty"),
  description: z.string({
    required_error: "Payment description is required",
  }).min(1, "Payment description cannot be empty"),
});

const tableDataSchema = z.object({
  month: z.string({
    required_error: "Month is required",
  }).min(1, "Month cannot be empty"),
  amount: z.string({
    required_error: "Amount is required",
  }).min(1, "Amount cannot be empty"),
  vat: z.string({
    required_error: "VAT is required",
  }).min(1, "VAT cannot be empty"),
  downloadIcon: z.string({
    required_error: "Download icon is required",
  }).min(1, "Download icon cannot be empty"),
});

const invoiceCardSchema = z.object({
  title: z.string({
    required_error: "Invoice card title is required",
  }).min(1, "Invoice card title cannot be empty"),
  requestButton: z.string({
    required_error: "Request button text is required",
  }).min(1, "Request button text cannot be empty"),
  tableData: tableDataSchema,
});

const paperworkFeatureSchema = z.object({
  invoiceCard: invoiceCardSchema,
  sectionTitle: z.string({
    required_error: "Paperwork section title is required",
  }).min(1, "Paperwork section title cannot be empty"),
  description: z.string({
    required_error: "Paperwork description is required",
  }).min(1, "Paperwork description cannot be empty"),
});

const createGulshanAdsMetaManagementSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    commissionTag: commissionTagSchema,
    paymentFeature: paymentFeatureSchema,
    paperworkFeature: paperworkFeatureSchema,
  }),
});

const updateGulshanAdsMetaManagementSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    commissionTag: commissionTagSchema.optional(),
    paymentFeature: paymentFeatureSchema.optional(),
    paperworkFeature: paperworkFeatureSchema.optional(),
  }),
});

const updateCommissionTagZodSchema = z.object({
  body: z.object({
    commissionTag: commissionTagSchema,
  }),
});

const updatePaymentFeatureZodSchema = z.object({
  body: z.object({
    paymentFeature: paymentFeatureSchema,
  }),
});

const updatePaperworkFeatureZodSchema = z.object({
  body: z.object({
    paperworkFeature: paperworkFeatureSchema,
  }),
});

export const GulshanAdsMetaManagementSectionValidation = {
  createGulshanAdsMetaManagementSectionZodSchema,
  updateGulshanAdsMetaManagementSectionZodSchema,
  updateCommissionTagZodSchema,
  updatePaymentFeatureZodSchema,
  updatePaperworkFeatureZodSchema,
};
