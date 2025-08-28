import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'

import { sendSuccessResponse } from '../../../shared/sendSuccessResponse'
import httpStatus from 'http-status'
import { AuthService } from './auth.service'
import { IRefreshTokenResponse } from './auth.interface'
import config from '../../../config'
import ApiError from '../../../errors/ApiError'

// login user
const loginExistingUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginExistingUser(req.body)

  const { accessToken } = result

  //! we do not need send again refresh token, bcs it's already there for 365 days
  const cookieOptions = {
    httpOnly: true,
    secure: false,
  }

  // console.log('accessToken', accessToken)

  res.cookie('refreshToken', accessToken, cookieOptions)

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Login successfully',
    data: { accessToken },
  })
})

const registerNewUser = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, ...rest } = await AuthService.registerNewUser(req.body);

  const cookieOptions = {
    httpOnly: true,
    // secure: false,
    secure: config?.env === "production",
  };

  res.cookie("refreshToken", accessToken, cookieOptions);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: "Registered successfully",
    data: { accessToken, ...rest },
  });
})

// const verifyOTP = catchAsync(async (req: Request, res: Response) => {
//   const { refreshToken, ...rest } = await AuthService.verifyOTP(req.body)
//   const cookieOptions = {
//     httpOnly: true,
//     secure: true, // this should be true on production
//     // secure: config?.env === "production",
//   }
//   res.cookie('refreshToken', refreshToken, cookieOptions)
//   sendSuccessResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'OTP Verified!',
//     data: { ...rest },
//   })
// })

// const resendOTP = catchAsync(async (req: Request, res: Response) => {
//   const result = await AuthService.resendOTP(req.body)
//   sendSuccessResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'OTP Send!',
//     data: result,
//   })
// })

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies
  const result = await AuthService.refreshTokenService(refreshToken)

  sendSuccessResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Refresh Token geenrated successfully!',
    data: result,
  })
})

// logout
const logOutUser = catchAsync(async (req: Request, res: Response) => {
  const userId =
    (req.user && ((req.user as any).userId || (req.user as any).id || (req.user as any)._id)) ||
    null;

  if (!userId) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not authenticated or token not decoded")
  }

  const result = await AuthService.logOutUser(userId)
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Log out successful',
    data: result,
  })
})

// forgot password
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body
  const result = await AuthService.forgotPassword(email)

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'Check your email!',
  })
})

// reset password
const resetPassword = catchAsync(async (req: Request, res: Response) => {
  // const token = req.headers.authorization
  const token = req.body.token
  const data = await AuthService.resetPassword(req.body, token as string)

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: data,
    message: 'Account recovered',
  })
})

const getMe = catchAsync(async (req: Request, res: Response) => {

  const userId =
    (req.user && ((req.user as any).userId || (req.user as any).id || (req.user as any)._id)) ||
    null;

  if (!userId) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not authenticated or token not decoded")
  }

  const userData = await AuthService.getMe(userId);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: userData,
    message: 'User data fetched successfully',
  });
});


export const AuthController = {
  loginExistingUser,
  registerNewUser,
  refreshToken,
  logOutUser,
  forgotPassword,
  resetPassword,
  getMe
}