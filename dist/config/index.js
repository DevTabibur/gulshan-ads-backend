"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  local_database_url: process.env.LOCAL_DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
  jwt: {
    accessToken: process.env.ACCESS_TOKEN,
    accessToken_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
    refreshToken: process.env.REFRESH_TOKEN,
    refreshToken_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
  },
};
