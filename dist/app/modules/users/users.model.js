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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../../config"));
const userSchema = new mongoose_1.Schema({
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
    },
    whatsApp: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                // Accepts numbers with optional +, 10-15 digits
                return /^\+?\d{10,15}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid WhatsApp number!`
        }
    },
    companyName: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
//! Hash the password before saving
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (this.isModified("password")) {
                const hashedPassword = yield bcryptjs_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_round));
                this.password = hashedPassword;
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
//! Check if user exists
userSchema.statics.isUserExist = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findOne({ userId });
        return !!user;
    });
};
//! Check if the password is matched
userSchema.statics.isPasswordMatched = function (givenPassword, savedPassword) {
    return bcryptjs_1.default.compare(givenPassword, savedPassword);
};
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
