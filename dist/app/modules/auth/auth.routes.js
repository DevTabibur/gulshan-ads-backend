"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const auth_validation_1 = require("./auth.validation");
const authGuard_1 = __importDefault(require("../../middlewares/authGuard"));
const router = (0, express_1.Router)();
/**
 * @api {post} /auth/login Login Existing Admin  ==> This API is only for WEB for ADMIN
 * @apiName LoginExistingUser
 * @apiGroup Auth
 *
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 *
 * @apiSuccess {String} accessToken New access token for the user
 * @apiSuccess {String} refreshToken Refresh token to maintain session
 * @apiSuccess {String} userId The user's unique ID
 *
 * @apiError {Object} error Error message, e.g., "Invalid email or password"
 */
router.post('/login', (0, zodValidateRequest_1.default)(auth_validation_1.AuthValidation.adminLoginZodSchema), auth_controller_1.AuthController.loginExistingUser);
/**
 * @api {post} /auth/register Register New User
 * @apiName RegisterNewUser
 * @apiGroup Auth
 *
 * @apiParam {String} username User's username
 * @apiParam {String} email User's email address
 * @apiParam {String} password User's password
 *
 * @apiSuccess {String} message Registration success message
 * @apiSuccess {String} userId The new user's ID
 *
 * @apiError {Object} error Error message
 */
router.post('/register', (0, zodValidateRequest_1.default)(auth_validation_1.AuthValidation.registerUserZodSchema), auth_controller_1.AuthController.registerNewUser);
/**
 * @api {post} /auth/refresh-token Refresh Access Token using Refresh Token
 * @apiName RefreshToken
 * @apiGroup Auth
 *
 * @apiParam {String} refreshToken Refresh token obtained during login
 *
 * @apiSuccess {String} accessToken New access token
 * @apiError {Object} error Error message
 */
router.post('/refresh-token', (0, zodValidateRequest_1.default)(auth_validation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.AuthController.refreshToken);
/**
 * @api {post} /auth/logout Log Out User
 * @apiName LogOutUser
 * @apiGroup Auth
 *
 * @apiParam {String} adminId The admin's unique ID
 *
 * @apiSuccess {String} message Logout success message
 * @apiError {Object} error Error message
 */
router.post('/logout', (0, authGuard_1.default)(), auth_controller_1.AuthController.logOutUser);
/**
 * @api {post} /auth/forgot-password Forgot Password
 * @apiName ForgotPassword
 * @apiGroup Auth
 *
 * @apiParam {String} email User's email address
 *
 * @apiSuccess {String} message Instructions to reset the password have been sent.
 * @apiError {Object} error Error message
 */
router.post('/forgot-password', auth_controller_1.AuthController.forgotPassword);
/**
 * @api {post} /auth/reset-password Reset Password
 * @apiName ResetPassword
 * @apiGroup Auth
 *
 * @apiParam {String} email User's email address
 * @apiParam {String} password New password
 * @apiParam {String} token Reset password token
 *
 * @apiSuccess {String} message Password reset successfully
 * @apiError {Object} error Error message
 */
router.post('/reset-password', 
// zodValidateRequest(AuthValidation.resendPasswordSchema),
auth_controller_1.AuthController.resetPassword);
router.get("/get-me", (0, authGuard_1.default)(), auth_controller_1.AuthController.getMe);
exports.AuthRoute = router;
