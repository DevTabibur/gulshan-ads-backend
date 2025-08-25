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
exports.generateUserId = exports.findLastUserId = void 0;
const users_model_1 = require("./users.model");
const findLastUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const lastUser = yield users_model_1.UserModel.findOne({}, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    console.log("lastUser", lastUser);
    // Since 'id' is not a property on the returned document, use '_id' or handle accordingly
    // If you want to use a custom 'id' field, ensure it exists in the schema and is populated
    // For now, fallback to '_id' as string if 'id' is not present
    // @ts-ignore
    return (_a = lastUser === null || lastUser === void 0 ? void 0 : lastUser.id) !== null && _a !== void 0 ? _a : (_b = lastUser === null || lastUser === void 0 ? void 0 : lastUser._id) === null || _b === void 0 ? void 0 : _b.toString();
});
exports.findLastUserId = findLastUserId;
const generateUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield (0, exports.findLastUserId)()) ||
        (0).toString().padStart(5, "0"); /// 00000
    console.log("currentId", currentId);
    // ** increment by 1
    const incrementedId = parseInt(currentId + 1)
        .toString()
        .padStart(5, "0");
    console.log("incrementedId", incrementedId);
    return incrementedId;
});
exports.generateUserId = generateUserId;
