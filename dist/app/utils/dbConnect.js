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
const config_1 = __importDefault(require("../../config"));
const logger_1 = require("../../shared/logger");
const URI = config_1.default.main_db_url;
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!URI) {
            console.log("Database String is not found");
        }
        yield mongoose_1.default.connect(URI);
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
