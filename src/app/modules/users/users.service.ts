import { IPaginationOption } from '../../../interfaces/sharedInterface'
import { paginationFields } from '../../../constants/shared.constant'
import { CAR_OWNER_FILTER_FIELDS, MECHANIC_FILTER_FIELDS } from './users.constant'
import { UserModel } from './users.model'

const getAllCarOwner = async (
  filters: Record<string, any>,
  paginationOption: IPaginationOption
) => {
  const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOption

  const skip = (Number(page) - 1) * Number(limit)
  const andConditions: any[] = []

  if (filters.searchTerm) {
    andConditions.push({
      $or: CAR_OWNER_FILTER_FIELDS.map(field => ({
        [field]: { $regex: filters.searchTerm, $options: 'i' },
      })),
    })
  }

  CAR_OWNER_FILTER_FIELDS.forEach(field => {
    if (filters[field]) {
      andConditions.push({
        [field]: filters[field],
      })
    }
  })

  // Only car owners
  andConditions.push({ role: 'car_owner' })

  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await UserModel.find(whereCondition)
    .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
    .skip(skip)
    .limit(Number(limit))

  const total = await UserModel.countDocuments(whereCondition)

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
    data: result,
  }
}

const getAllMechanic = async (
  filters: Record<string, any>,
  paginationOption: IPaginationOption
) => {
  const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOption

  const skip = (Number(page) - 1) * Number(limit)
  const andConditions: any[] = []

  if (filters.searchTerm) {
    andConditions.push({
      $or: MECHANIC_FILTER_FIELDS.map(field => ({
        [field]: { $regex: filters.searchTerm, $options: 'i' },
      })),
    })
  }

  MECHANIC_FILTER_FIELDS.forEach(field => {
    if (filters[field]) {
      andConditions.push({
        [field]: filters[field],
      })
    }
  })

  // Only mechanics
  andConditions.push({ role: 'mechanic' })

  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await UserModel.find(whereCondition)
    .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
    .skip(skip)
    .limit(Number(limit))

  const total = await UserModel.countDocuments(whereCondition)

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
    data: result,
  }
}

const updateProfile = async (userId: string, updateInfo: Record<string, any>) => {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, updateInfo, { new: true })
  return updatedUser
}

const getSingleUserById = async (userId: string) => {
  const user = await UserModel.findById(userId)
  return user
}

const onboardUserFromWeb = async (mechanicData: Record<string, any>) => {
  // Assume mechanicData contains all required fields
  const newUser = await UserModel.create({ ...mechanicData, role: 'mechanic' })
  return newUser
}

const deleteUserById = async (userId: string) => {
  const deletedUser = await UserModel.findByIdAndDelete(userId)
  return deletedUser
}

export const UserServices = {
  getAllCarOwner,
  getAllMechanic,
  updateProfile,
  getSingleUserById,
  onboardUserFromWeb,
  deleteUserById,
}
