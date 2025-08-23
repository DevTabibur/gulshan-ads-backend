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
exports.AdvertisersGettingStartedSecController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const advertisersGettingStartedSec_service_1 = require("./advertisersGettingStartedSec.service");
// Create advertisers getting started section
const createAdvertisersGettingStartedSec = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Advertisers getting started section created successfully',
        data: result,
    });
}));
// Get advertisers getting started section
const getAdvertisersGettingStartedSec = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers getting started section retrieved successfully',
        data: result,
    });
}));
// Update advertisers getting started section
const updateAdvertisersGettingStartedSec = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.updateAdvertisersGettingStartedSec(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers getting started section updated successfully',
        data: result,
    });
}));
// Update steps only
const updateSteps = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.updateSteps(req.body.steps);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Process steps updated successfully',
        data: result,
    });
}));
// Delete advertisers getting started section
const deleteAdvertisersGettingStartedSec = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield advertisersGettingStartedSec_service_1.AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Advertisers getting started section deleted successfully',
        data: result,
    });
}));
exports.AdvertisersGettingStartedSecController = {
    createAdvertisersGettingStartedSec,
    getAdvertisersGettingStartedSec,
    updateAdvertisersGettingStartedSec,
    updateSteps,
    deleteAdvertisersGettingStartedSec,
};
