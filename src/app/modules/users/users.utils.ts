import { UserModel } from "./users.model";

export const findLastUserId = async () => {
  const lastUser = await UserModel.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  console.log("lastUser", lastUser);
  return lastUser?.id;
};
export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, "0"); /// 00000
  console.log("currentId", currentId);
  // ** increment by 1
  const incrementedId = parseInt(currentId + 1)
    .toString()
    .padStart(5, "0");
  console.log("incrementedId", incrementedId);
  return incrementedId;
};
