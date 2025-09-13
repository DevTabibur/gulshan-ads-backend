"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const adminLoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "email is required",
        }),
        password: zod_1.z.string({
            required_error: "password is required",
        }),
    }),
});
const registerUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({
            required_error: "First Name is required",
        }),
        lastName: zod_1.z.string({
            required_error: "Last Name is required",
        }),
        email: zod_1.z.string({
            required_error: "Valid Email  is required",
        }),
        companyName: zod_1.z.string({
            required_error: "Company / Page Name  is required",
        }),
        whatsApp: zod_1.z.string({
            required_error: "WhatsApp Number  is required",
        }),
        password: zod_1.z.string({
            required_error: "Password  is required",
        }),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: "Old password  is required",
        }),
        newPassword: zod_1.z.string({
            required_error: "New password  is required",
        }),
        confirmNewPassword: zod_1.z.string({
            required_error: "New password  is required",
        }),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: "Refresh Token is required",
        }),
    }),
});
const verifyOTPSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNo: zod_1.z.string({
            required_error: "Phone no is required",
        }),
        otp: zod_1.z.string({
            required_error: "OTP is required",
        }),
    }),
});
const resendOTPSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNo: zod_1.z.string({
            required_error: "Phone no is required",
        }),
    }),
});
const logOutSchema = zod_1.z.object({
    params: zod_1.z.object({
        adminId: zod_1.z.string({
            required_error: "Admin ID is required",
        }),
    }),
});
const resendPasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNo: zod_1.z.string({
            required_error: "Validate Phone No is required",
        }),
        role: zod_1.z.string({
            required_error: "Role is required",
        }),
        status: zod_1.z.string({
            required_error: "Status is required",
        }),
    }),
});
exports.AuthValidation = {
    adminLoginZodSchema,
    changePasswordZodSchema,
    registerUserZodSchema,
    verifyOTPSchema,
    refreshTokenZodSchema,
    logOutSchema,
    resendOTPSchema,
    resendPasswordSchema,
};
