import { Router } from 'express'
import { AuthController } from './auth.controller'
import zodValidateRequest from '../../middlewares/zodValidateRequest'
import { AuthValidation } from './auth.validation'
import authGuard from '../../middlewares/authGuard'
import { USER_ROLE_ENUM } from '../users/users.constant'

const router = Router()

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
router.post(
    '/login',
    zodValidateRequest(AuthValidation.adminLoginZodSchema),
    AuthController.loginExistingUser,
)

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
router.post(
    '/register',
    zodValidateRequest(AuthValidation.registerUserZodSchema),
    AuthController.registerNewUser,
)



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
router.post(
    '/refresh-token',
    zodValidateRequest(AuthValidation.refreshTokenZodSchema),
    AuthController.refreshToken,
)

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
router.post(
    '/logout',
    authGuard(),
    AuthController.logOutUser,
)

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
router.post('/forgot-password', AuthController.forgotPassword)

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
router.post(
    '/reset-password',
    // zodValidateRequest(AuthValidation.resendPasswordSchema),
    AuthController.resetPassword,
)


router.get("/get-me", authGuard(), AuthController.getMe)

export const AuthRoute = router