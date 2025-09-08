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
exports.SubscribeSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const subscribeSection_model_1 = __importDefault(require("./subscribeSection.model"));
// Create Subscribe section (only one instance allowed)
const createSubscribeSection = (subscribeSectionData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if Subscribe section already exists
    const existingSubscribeSection = yield subscribeSection_model_1.default.findOne();
    if (existingSubscribeSection) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, 'Subscribe section already exists. You can only update it.');
    }
    const result = yield subscribeSection_model_1.default.create(subscribeSectionData);
    return result;
});
// Get Subscribe section (only one instance)
const getSubscribeSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subscribeSection_model_1.default.findOne();
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Subscribe section not found');
    }
    return result;
});
// Update Subscribe section
const updateSubscribeSection = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subscribeSection_model_1.default.findOneAndUpdate({}, updateData, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Subscribe section not found');
    }
    return result;
});
// Delete Subscribe section
const deleteSubscribeSection = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield subscribeSection_model_1.default.findOneAndDelete({});
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Subscribe section not found');
    }
    return result;
});
exports.SubscribeSectionService = {
    createSubscribeSection,
    getSubscribeSection,
    updateSubscribeSection,
    deleteSubscribeSection,
};
