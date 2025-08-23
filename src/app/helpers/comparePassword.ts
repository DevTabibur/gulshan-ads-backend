import bcrypt from 'bcryptjs'
import { UserModel } from '../modules/users/users.model'

// export const comparePassword = async (
//   loginEmail: string,
//   givenPassword: string,
// ): Promise<boolean> => {
//   const user = await UserModel.findOne({ email: loginEmail });
//   const hashedPassword = user?.email;
//   if (!user || !user?.password) {
//     return false;
//   }
//   const isPasswordMatch = await bcrypt.compare(
//     givenPassword,
//     hashedPassword as string,
//   );
//   return isPasswordMatch;
// };

// new code

export const comparePassword = async (
    loginEmail: string,
    givenPassword: string,
): Promise<boolean> => {
    const user = await UserModel.findOne({ email: loginEmail })
    if (!user || !user.password) {
        return false
    }

    const isPasswordMatch = await bcrypt.compare(givenPassword, user.password)
    return isPasswordMatch
}
