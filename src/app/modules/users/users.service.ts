import config from "../../../config";
import { IUser } from "./users.interface";
import { UserModel } from "./users.model";
import { generateUserId } from "./users.utils";

const createUser = async (user: IUser): Promise<IUser | null> => {
  // ** auto generated incremental id
  const id = await generateUserId();

  user.id = id as string;

  // ** default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await UserModel.create(user);
  if (!createdUser) {
    throw new Error("Failed to create user");
  }
  return createdUser;
};

export const UserServices = {
  createUser,
};
