import { IUser } from "../users/users.interface";

export type IRefreshTokenResponse = {
    accessToken: string;
};

export interface IUserResponse {
    accessToken?: string;
    refreshToken?: string;
    message?: string;
    data?: Partial<IUser>;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export type IChangePassword = {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

// For jwt payload-------------
export interface IJwtPayload {
    _id: string;
}