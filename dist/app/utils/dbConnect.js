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
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("../../shared/logger");
const config_1 = __importDefault(require("../../config"));
const URI = config_1.default.main_db_url;
console.log("URI", URI);
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!URI) {
            console.log("Database String is not found");
        }
        // await mongoose.connect(URI as string);
        yield mongoose_1.default.connect(URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if MongoDB is unreachable
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            connectTimeoutMS: 10000, // Timeout for initial connection
        });
        // console.log(`🛢 LOCAL Database is connected`)
        logger_1.logger.info(`🛢 Database is connected successfully 🛢`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        // console.log(`database error`, error.message)
        logger_1.errorlogger.error("Failed to connect database", error);
    }
});
exports.default = dbConnect;
