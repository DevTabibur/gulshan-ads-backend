"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelpers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload, secret, expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: expireTime,
    });
};
// ! send this token with mail to user to change the password / forgot password
const createResetToken = (payload, secret, expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn: expireTime,
    });
};
const verifyToken = (token, secret) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
// const regenerateToken = async (
//   refreshToken: string,
//   accessSecret: Secret,
//   refreshSecret: Secret,
// ) => {
//   const { _id } = verifyToken(refreshToken, refreshSecret)
//   const newToken = createToken({ _id }, accessSecret)
//   return newToken
// }
exports.jwtHelpers = {
    createToken,
    createResetToken,
    verifyToken,
};
