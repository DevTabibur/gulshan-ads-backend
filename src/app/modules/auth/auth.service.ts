import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import {
    ILoginUser,
    IRefreshTokenResponse,
    IUserResponse,
} from './auth.interface'
import { jwtHelpers } from '../../helpers/jwtHelpers'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { UserModel } from '../users/users.model'
import { sendEmail } from '../../helpers/sendEmail'
import { comparePassword } from '../../helpers/comparePassword'
import { IUser } from '../users/users.interface'


//login user
const loginExistingUser = async (
    loginData: ILoginUser,
): Promise<any> => {
    const { email, password } = loginData;
    const isUserExist = await UserModel.findOne({ email });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User is not found");
    }

    const isPasswordMatched = await UserModel.isPasswordMatched(
        password,
        isUserExist.password,
    );

    if (!isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
    }

    const accessToken = jwtHelpers.createToken(
        { userId: isUserExist._id, userEmail: isUserExist.email },
        config.jwt.accessToken as Secret,
        config.jwt.accessToken_expires_in as string,
    );

    return { accessToken };
}

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

const registerNewUser = async (userData: IUser): Promise<IUserResponse | any> => {
    const { email } = userData;

    //! Validation for already loggedIn User can not register again
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
        throw new ApiError(
            httpStatus.FOUND,
            "This email is already taken, try another!",
        );
    }

    // ! Generating unique user id

    const result = await UserModel.create(userData);

    //! Let's give user secret token
    const accessToken = jwtHelpers.createToken(
        { userId: result._id },
        config.jwt.accessToken as Secret,
        config.jwt.accessToken_expires_in as string,
    );

    return {
        accessToken,
    };

}


const refreshTokenService = async (
    refreshToken: string,
): Promise<IRefreshTokenResponse> => {
    let verifiedToken = null
    try {
        verifiedToken = jwtHelpers.verifyToken(
            refreshToken,
            config.jwt.refreshToken as Secret,
        )
    } catch (error) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
    }
    // tumi delete hye gso  kintu tumar refresh token ase
    // checking deleted user's refresh token
    const isUserExist = await UserModel.findById({ _id: verifiedToken?._id })
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
    }

    //generate new token => errors is in here
    const newAccessToken = jwtHelpers.createToken(
        {
            _id: isUserExist._id,
        },
        config.jwt.accessToken as Secret,
        config.jwt.accessToken_expires_in as string,
    )

    return {
        accessToken: newAccessToken,
    }
}

// logout
const logOutUser = async (userId: string) => {
    const result = await UserModel.findByIdAndUpdate(
        userId,
        { status: 'inactive' },
        { new: true, select: '-password' }, // Exclude the password field
    )
    return result
}

// forgot password
const forgotPassword = async (email: string) => {
    // ! 1. check if user is existed on our db or not check it with email
    const userExists = await UserModel.findOne(
        { email },
        { name: 1, role: 1, email: 1 },
    )
    if (!userExists) {
        throw new ApiError(httpStatus.BAD_REQUEST, "User doesn't exist!")
    }

    const passwordResetToken = jwtHelpers.createResetToken(
        { id: userExists.id },
        config.jwt.accessToken as string,
        '5m',
    )

    const resetLink: string =
        config.resetLink + `email=${userExists?.email}&token=${passwordResetToken}`

    await sendEmail(
        userExists?.email as string,
        'Reset Password Link',
        'This link will expire within 5 minutes',
        `<div>
       <p>Hi, Your Reset Password Link: <a href="${resetLink}">Click Here</a></p>
       <p style="color: red;">This link will expire within 5 minutes</p>
       <p>Thank You</p>
    </div>
    `,
    )
    return {
        message: 'Check your email!',
    }
}

// reset password

const resetPassword = async (
    payload: {
        email: string
        password: string
    },
    token: string,
) => {
    const { email, password } = payload

    const userExists = await UserModel.findOne({ email })
    if (!userExists) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'User not found')
    }

    const isOTPVerified = jwtHelpers.verifyToken(
        token,
        config.jwt.accessToken as string,
    )

    const hashedPassword = await bcrypt.hash(
        password,
        Number(config.bcrypt_salt_round),
    )
    await UserModel.updateOne(
        { email: email },
        {
            $set: {
                password: hashedPassword,
            },
        },
    )

    // await userModel.updateOne({ email }, { hashedPassword })
}


const getMe = async (userId: string) => {
    const user = await UserModel.findById(userId).select('-password');
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    return user;
};


export const AuthService = {
    loginExistingUser,
    registerNewUser,
    refreshTokenService,
    resetPassword,
    forgotPassword,
    logOutUser,
    getMe
}