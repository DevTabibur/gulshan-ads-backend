"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const users_constant_1 = require("./users.constant");
const users_model_1 = require("./users.model");
const getAllCarOwner = (filters, paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOption;
    const skip = (Number(page) - 1) * Number(limit);
    const andConditions = [];
    if (filters.searchTerm) {
        andConditions.push({
            $or: users_constant_1.CAR_OWNER_FILTER_FIELDS.map(field => ({
                [field]: { $regex: filters.searchTerm, $options: 'i' },
            })),
        });
    }
    users_constant_1.CAR_OWNER_FILTER_FIELDS.forEach(field => {
        if (filters[field]) {
            andConditions.push({
                [field]: filters[field],
            });
        }
    });
    // Only car owners
    andConditions.push({ role: 'car_owner' });
    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield users_model_1.UserModel.find(whereCondition)
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(Number(limit));
    const total = yield users_model_1.UserModel.countDocuments(whereCondition);
    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: result,
    };
});
const getAllMechanic = (filters, paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationOption;
    const skip = (Number(page) - 1) * Number(limit);
    const andConditions = [];
    if (filters.searchTerm) {
        andConditions.push({
            $or: users_constant_1.MECHANIC_FILTER_FIELDS.map(field => ({
                [field]: { $regex: filters.searchTerm, $options: 'i' },
            })),
        });
    }
    users_constant_1.MECHANIC_FILTER_FIELDS.forEach(field => {
        if (filters[field]) {
            andConditions.push({
                [field]: filters[field],
            });
        }
    });
    // Only mechanics
    andConditions.push({ role: 'mechanic' });
    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield users_model_1.UserModel.find(whereCondition)
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(Number(limit));
    const total = yield users_model_1.UserModel.countDocuments(whereCondition);
    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: result,
    };
});
const updateProfile = (userId, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield users_model_1.UserModel.findByIdAndUpdate(userId, updateInfo, { new: true });
    return updatedUser;
});
const getSingleUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_model_1.UserModel.findById(userId);
    return user;
});
const onboardUserFromWeb = (mechanicData) => __awaiter(void 0, void 0, void 0, function* () {
    // Assume mechanicData contains all required fields
    const newUser = yield users_model_1.UserModel.create(Object.assign(Object.assign({}, mechanicData), { role: 'mechanic' }));
    return newUser;
});
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield users_model_1.UserModel.findByIdAndDelete(userId);
    return deletedUser;
});
exports.UserServices = {
    getAllCarOwner,
    getAllMechanic,
    updateProfile,
    getSingleUserById,
    onboardUserFromWeb,
    deleteUserById,
};
