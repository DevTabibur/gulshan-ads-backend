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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_model_1 = require("../users/users.model");
const sendEmail_1 = require("../../helpers/sendEmail");
//login user
const loginExistingUser = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = loginData;
    const isUserExist = yield users_model_1.UserModel.findOne({ email });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User is not found");
    }
    const isPasswordMatched = yield users_model_1.UserModel.isPasswordMatched(password, isUserExist.password);
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Password is incorrect");
    }
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId: isUserExist._id, userEmail: isUserExist.email }, config_1.default.jwt.accessToken, config_1.default.jwt.accessToken_expires_in);
    return { accessToken };
});
// If password is already set, compare it
// const isPasswordMatched = await comparePassword(email, password)
// if (!isPasswordMatched) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Password is not matched')
// }
// const { _id, email: userEmail } = isAdminExist
// const accessToken = jwtHelpers.createToken(
//     { _id: _id, userEmail, role: 'admin' },
//     config.jwt.accessToken as Secret,
//     config.jwt.accessToken_expires_in as string,
// )
// return { accessToken }
// // Generate access token after password verification
// const { _id, email: userEmail } = isUserExist
// const accessToken = jwtHelpers.createToken(
//   { _id: _id, userEmail, role: 'admin' },
//   config.jwt.accessToken as Secret,
//   config.jwt.accessToken_expires_in as string,
// )
// return { accessToken }
// }
const registerNewUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = userData;
    //! Validation for already loggedIn User can not register again
    const isUserExist = yield users_model_1.UserModel.findOne({ email });
    if (isUserExist) {
        throw new ApiError_1.default(http_status_1.default.FOUND, "This email is already taken, try another!");
    }
    // ! Generating unique user id
    const result = yield users_model_1.UserModel.create(userData);
    //! Let's give user secret token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId: result._id }, config_1.default.jwt.accessToken, config_1.default.jwt.accessToken_expires_in);
    return {
        accessToken,
    };
});
const refreshTokenService = (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(refreshToken, config_1.default.jwt.refreshToken);
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token');
    }
    // tumi delete hye gso  kintu tumar refresh token ase
    // checking deleted user's refresh token
    const isUserExist = yield users_model_1.UserModel.findById({ _id: verifiedToken === null || verifiedToken === void 0 ? void 0 : verifiedToken._id });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    //generate new token => errors is in here
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        _id: isUserExist._id,
    }, config_1.default.jwt.accessToken, config_1.default.jwt.accessToken_expires_in);
    return {
        accessToken: newAccessToken,
    };
});
// logout
const logOutUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.UserModel.findByIdAndUpdate(userId, { status: 'inactive' }, { new: true, select: '-password' });
    return result;
});
// forgot password
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // ! 1. check if user is existed on our db or not check it with email
    const userExists = yield users_model_1.UserModel.findOne({ email }, { name: 1, role: 1, email: 1 });
    if (!userExists) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User doesn't exist!");
    }
    const passwordResetToken = jwtHelpers_1.jwtHelpers.createResetToken({ id: userExists.id }, config_1.default.jwt.accessToken, '5m');
    const resetLink = config_1.default.resetLink + `email=${userExists === null || userExists === void 0 ? void 0 : userExists.email}&token=${passwordResetToken}`;
    yield (0, sendEmail_1.sendEmail)(userExists === null || userExists === void 0 ? void 0 : userExists.email, 'Reset Password Link', 'This link will expire within 5 minutes', `<div>
       <p>Hi, Your Reset Password Link: <a href="${resetLink}">Click Here</a></p>
       <p style="color: red;">This link will expire within 5 minutes</p>
       <p>Thank You</p>
    </div>
    `);
    return {
        message: 'Check your email!',
    };
});
// reset password
const resetPassword = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const userExists = yield users_model_1.UserModel.findOne({ email });
    if (!userExists) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User not found');
    }
    const isOTPVerified = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.accessToken);
    const hashedPassword = yield bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_round));
    yield users_model_1.UserModel.updateOne({ email: email }, {
        $set: {
            password: hashedPassword,
        },
    });
    // await userModel.updateOne({ email }, { hashedPassword })
});
const getMe = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_model_1.UserModel.findById(userId).select('-password');
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    return user;
});
exports.AuthService = {
    loginExistingUser,
    registerNewUser,
    refreshTokenService,
    resetPassword,
    forgotPassword,
    logOutUser,
    getMe
};
