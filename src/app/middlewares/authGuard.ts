import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import ApiError from "../../errors/ApiError";
import config from "../../config";
import { jwtHelpers } from "../helpers/jwtHelpers";

// const authGuard =
//   (...requiredRoles: string[]) =>
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       //get authorization token
//       const token = req.headers.authorization;
//       if (!token) {
//         throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
//       }

      
//       // verify token
//       let verifiedUser = null;

//       verifiedUser = jwtHelpers.verifyToken(
//         token,
//         config.jwt.accessToken as Secret,
//       );

//       req.user = verifiedUser; // role  , userid // ! this is giving error => the solution is in interfaces > index.d.ts file

//       // role diye guard korar jnno
//       if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
//         throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
//       }
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };

// export default authGuard;




const authGuard =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers.authorization;
      if (!header) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      // Bearer টোকেন হলে split, নাহলে raw টোকেন ব্যবহার
      const token = header.startsWith("Bearer ")
        ? header.split(" ")[1]
        : header;

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.accessToken as Secret
      );

      // ডিবাগ দেখতে চাইলে:
      // console.log("decoded user =>", verifiedUser);

      // টাইপড এক্সটেনশন থাকলে ভালো, না থাকলে any/unknown
      (req as any).user = verifiedUser;

      if (
        requiredRoles.length &&
        (!verifiedUser?.role || !requiredRoles.includes(verifiedUser.role))
      ) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
export default authGuard;
