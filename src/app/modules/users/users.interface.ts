export type IUser = {
  fullName: string
  email: string
  password: string;
  avatar?: string
  role?: string
  status?: "active" | "inactive"
  whatsApp: string
  companyName: string
  isVerified?: boolean
};
