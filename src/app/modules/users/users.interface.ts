export type IUser = {
  firstName: string
  lastName: string
  email: string
  password: string;
  avatar?: string
  role?: string
  status?: "active" | "inactive"
};
