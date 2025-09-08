"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokClientSaysSectionRoute = void 0;
const express_1 = require("express");
const tikTokClientSaysSection_controller_1 = require("./tikTokClientSaysSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const tikTokClientSaysSection_validation_1 = require("./tikTokClientSaysSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /tik-tok-client-says-section Create TikTok Client Says Section
 * @apiName CreateTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle text
 * @apiParam {Array} testimonialCards Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(tikTokClientSaysSection_validation_1.TikTokClientSaysSectionValidation.createTikTokClientSaysSectionZodSchema), tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.createTikTokClientSaysSection);
/**
 * @api {get} /tik-tok-client-says-section Get TikTok Client Says Section
 * @apiName GetTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.getTikTokClientSaysSection);
/**
 * @api {patch} /tik-tok-client-says-section Update TikTok Client Says Section
 * @apiName UpdateTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle text
 * @apiParam {Array} [testimonialCards] Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(tikTokClientSaysSection_validation_1.TikTokClientSaysSectionValidation.updateTikTokClientSaysSectionZodSchema), tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.updateTikTokClientSaysSection);
/**
 * @api {patch} /tik-tok-client-says-section/testimonial-cards Update Testimonial Cards
 * @apiName UpdateTestimonialCards
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Array} testimonialCards Array of testimonial cards
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonial-cards', (0, zodValidateRequest_1.default)(tikTokClientSaysSection_validation_1.TikTokClientSaysSectionValidation.updateTestimonialCardsZodSchema), tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.updateTestimonialCards);
/**
 * @api {post} /tik-tok-client-says-section/add-testimonial-card Add Testimonial Card
 * @apiName AddTestimonialCard
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.post('/add-testimonial-card', (0, zodValidateRequest_1.default)(tikTokClientSaysSection_validation_1.TikTokClientSaysSectionValidation.addTestimonialCardZodSchema), tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.addTestimonialCard);
/**
 * @api {patch} /tik-tok-client-says-section/testimonial-card/:index Update Testimonial Card by Index
 * @apiName UpdateTestimonialCardByIndex
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Number} index Testimonial card index
 * @apiParam {Object} testimonialCard Testimonial card object
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/testimonial-card/:index', (0, zodValidateRequest_1.default)(tikTokClientSaysSection_validation_1.TikTokClientSaysSectionValidation.updateTestimonialCardByIndexZodSchema), tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.updateTestimonialCardByIndex);
/**
 * @api {delete} /tik-tok-client-says-section/testimonial-card/:index Delete Testimonial Card by Index
 * @apiName DeleteTestimonialCardByIndex
 * @apiGroup TikTokClientSaysSection
 *
 * @apiParam {Number} index Testimonial card index
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/testimonial-card/:index', tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.deleteTestimonialCardByIndex);
/**
 * @api {delete} /tik-tok-client-says-section Delete TikTok Client Says Section
 * @apiName DeleteTikTokClientSaysSection
 * @apiGroup TikTokClientSaysSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted TikTok Client Says section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', tikTokClientSaysSection_controller_1.TikTokClientSaysSectionController.deleteTikTokClientSaysSection);
exports.TikTokClientSaysSectionRoute = router;
