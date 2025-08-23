import dotenv from "dotenv";
import path from "path";
/* This code is using the `dotenv` package to load environment variables from a `.env` file located in
the root directory of the project. process.cwd() means the root directory */
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export const NODE_ENV = {
  PROD: "production",
  DEV: "development",
} as const;

export const IS_MODE_PROD = process.env.NODE_ENV === "production";

export const config2 = {
  // allowed_origin_prod: "https://admin-garagepotti.vercel.app", // Production Frontend URL
  allowed_origin_dev: "http://localhost:3000", // Local Development Frontend URL
  port: process.env.PORT || 5000,
};

// export const IS_MODE_PROD = process.env.NODE_ENV === NODE_ENV.PROD;
export const IS_MODE_DEV = process.env.NODE_ENV === NODE_ENV.DEV;

export default {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  main_db_url: process.env.MAIN_DATABASE_URL,
  allowed_origin_prod: process.env.ALLOWED_ORIGIN_PROD,
  nodemailer_email: process.env.NODEMAILER_EMAIL,
  nodemailer_app_password: process.env.NODEMAILER_APP_PASS,
  allowed_origin_dev: process.env.ALLOWED_ORIGIN_DEV,
  mapbox_access_token: process.env.MAPBOX_ACCESS_TOKEN,
  database_string: process.env.DATABASE_STRING,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  jwt: {
    accessToken: process.env.ACCESS_TOKEN,
    accessToken_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
    refreshToken: process.env.REFRESH_TOKEN,
    refreshToken_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
  },
  ssl: {
    storeId: process.env.SSLCOMMERZ_STORE_ID,
    storePass: process.env.SSLCOMMERZ_STORE_PASS,
    paymentUrl: process.env.SSLCOMMERZ_PAYMENT_URL,
    validationUrl: process.env.SSLCOMMERZ_VALIDATION_URL,
  },
  sms_api_key: process.env.SMS_API_KEY,
  sms_api_sender_id: process.env.SMS_SENDER_ID,
  sms_api_url: process.env.SMS_API_URL,
  resetLink: process.env.RESET_PASS_UI_LINK,
};