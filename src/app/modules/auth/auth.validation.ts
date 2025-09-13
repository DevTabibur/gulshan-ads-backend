import { z } from "zod";

const adminLoginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "email is required",
    }),
    password: z.string({
      required_error: "password is required",
    }),
    
  }),
});

const registerUserZodSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: "First Name is required",
    }),
    lastName: z.string({
      required_error: "Last Name is required",
    }),
    email: z.string({
      required_error: "Valid Email  is required",
    }),
    companyName: z.string({
      required_error: "Company / Page Name  is required",
    }),
    whatsApp: z.string({
      required_error: "WhatsApp Number  is required",
    }),
    
    password: z.string({
      required_error: "Password  is required",
    }),

  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: "Old password  is required",
    }),
    newPassword: z.string({
      required_error: "New password  is required",
    }),
    confirmNewPassword: z.string({
      required_error: "New password  is required",
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: "Refresh Token is required",
    }),
  }),
});

const verifyOTPSchema = z.object({
  body: z.object({
    phoneNo: z.string({
      required_error: "Phone no is required",
    }),
    otp: z.string({
      required_error: "OTP is required",
    }),
  }),
});

const resendOTPSchema = z.object({
  body: z.object({
    phoneNo: z.string({
      required_error: "Phone no is required",
    }),
  }),
});

const logOutSchema = z.object({
  params: z.object({
    adminId: z.string({
      required_error: "Admin ID is required",
    }),
  }),
});

const resendPasswordSchema = z.object({
  body: z.object({
    phoneNo: z.string({
      required_error: "Validate Phone No is required",
    }),
    role: z.string({
      required_error: "Role is required",
    }),
    status: z.string({
      required_error: "Status is required",
    }),
  }),
});

export const AuthValidation = {
  adminLoginZodSchema,
  changePasswordZodSchema,
  registerUserZodSchema,
  verifyOTPSchema,
  refreshTokenZodSchema,
  logOutSchema,
  resendOTPSchema,
  resendPasswordSchema,
};