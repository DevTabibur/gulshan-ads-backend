import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: any,
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

// ! send this token with mail to user to change the password / forgot password
const createResetToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: any,
): string => {
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
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

export const jwtHelpers = {
  createToken,
  createResetToken,
  verifyToken,
};