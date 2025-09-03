"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const auth_service_1 = require("./auth.service");
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// login user
const loginExistingUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthService.loginExistingUser(req.body);
    const { accessToken } = result;
    //! we do not need send again refresh token, bcs it's already there for 365 days
    const cookieOptions = {
        httpOnly: true,
        secure: false,
    };
    // console.log('accessToken', accessToken)
    res.cookie('refreshToken', accessToken, cookieOptions);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Login successfully',
        data: { accessToken },
    });
}));
const registerNewUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = yield auth_service_1.AuthService.registerNewUser(req.body), { accessToken } = _a, rest = __rest(_a, ["accessToken"]);
    const cookieOptions = {
        httpOnly: true,
        // secure: false,
        secure: (config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.env) === "production",
    };
    res.cookie("refreshToken", accessToken, cookieOptions);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Registered successfully",
        data: Object.assign({ accessToken }, rest),
    });
}));
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
const refreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_service_1.AuthService.refreshTokenService(refreshToken);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Refresh Token geenrated successfully!',
        data: result,
    });
}));
// logout
const logOutUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = (req.user && (req.user.userId || req.user.id || req.user._id)) ||
        null;
    if (!userId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User not authenticated or token not decoded");
    }
    const result = yield auth_service_1.AuthService.logOutUser(userId);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Log out successful',
        data: result,
    });
}));
// forgot password
const forgotPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const result = yield auth_service_1.AuthService.forgotPassword(email);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: result,
        message: 'Check your email!',
    });
}));
// reset password
const resetPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const token = req.headers.authorization
    const token = req.body.token;
    const data = yield auth_service_1.AuthService.resetPassword(req.body, token);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: data,
        message: 'Account recovered',
    });
}));
const getMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = (req.user && (req.user.userId || req.user.id || req.user._id)) ||
        null;
    if (!userId) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "User not authenticated or token not decoded");
    }
    const userData = yield auth_service_1.AuthService.getMe(userId);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: userData,
        message: 'User data fetched successfully',
    });
}));
exports.AuthController = {
    loginExistingUser,
    registerNewUser,
    refreshToken,
    logOutUser,
    forgotPassword,
    resetPassword,
    getMe
};
