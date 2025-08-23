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
exports.TikTokClientSaysSectionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendSuccessResponse_1 = require("../../../shared/sendSuccessResponse");
const http_status_1 = __importDefault(require("http-status"));
const tikTokClientSaysSection_service_1 = require("./tikTokClientSaysSection.service");
// Create TikTok Client Says section
const createTikTokClientSaysSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.createTikTokClientSaysSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'TikTok Client Says section created successfully',
        data: result,
    });
}));
// Get TikTok Client Says section
const getTikTokClientSaysSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.getTikTokClientSaysSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Client Says section retrieved successfully',
        data: result,
    });
}));
// Update TikTok Client Says section
const updateTikTokClientSaysSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.updateTikTokClientSaysSection(req.body);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Client Says section updated successfully',
        data: result,
    });
}));
// Update testimonial cards only
const updateTestimonialCards = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.updateTestimonialCards(req.body.testimonialCards);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial cards updated successfully',
        data: result,
    });
}));
// Add a single testimonial card
const addTestimonialCard = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.addTestimonialCard(req.body.testimonialCard);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial card added successfully',
        data: result,
    });
}));
// Update a specific testimonial card by index
const updateTestimonialCardByIndex = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { index } = req.params;
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.updateTestimonialCardByIndex(parseInt(index), req.body.testimonialCard);
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial card updated successfully',
        data: result,
    });
}));
// Delete a specific testimonial card by index
const deleteTestimonialCardByIndex = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { index } = req.params;
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.deleteTestimonialCardByIndex(parseInt(index));
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'Testimonial card deleted successfully',
        data: result,
    });
}));
// Delete TikTok Client Says section
const deleteTikTokClientSaysSection = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tikTokClientSaysSection_service_1.TikTokClientSaysSectionService.deleteTikTokClientSaysSection();
    (0, sendSuccessResponse_1.sendSuccessResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: 'TikTok Client Says section deleted successfully',
        data: result,
    });
}));
exports.TikTokClientSaysSectionController = {
    createTikTokClientSaysSection,
    getTikTokClientSaysSection,
    updateTikTokClientSaysSection,
    updateTestimonialCards,
    addTestimonialCard,
    updateTestimonialCardByIndex,
    deleteTestimonialCardByIndex,
    deleteTikTokClientSaysSection,
};
