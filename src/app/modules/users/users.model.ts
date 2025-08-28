import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";
import bcrypt from "bcryptjs";
import config from "../../../config";



type UserModel = Model<IUser> & {
  isUserExist(userId: string): Promise<boolean>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
};

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String
    },
    role: {
      type: String
    },
    status: {
      type: String,
      default: "active"
    }
  },
  {
    timestamps: true,
  }
);



//! Hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hashedPassword = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt_round),
      );
      this.password = hashedPassword;
    }
    next();
  } catch (error: any) {
    next(error);
  }
});

//! Check if user exists
userSchema.statics.isUserExist = async function (
  userId: string,
): Promise<boolean> {
  const user = await this.findOne({ userId });
  return !!user;
};

//! Check if the password is matched
userSchema.statics.isPasswordMatched = function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(givenPassword, savedPassword);
};

export const UserModel = model<IUser, UserModel>("User", userSchema);
