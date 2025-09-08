"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeSectionRoute = void 0;
const express_1 = require("express");
const subscribeSection_controller_1 = require("./subscribeSection.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const subscribeSection_validation_1 = require("./subscribeSection.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /subscribe-section Create Subscribe Section
 * @apiName CreateSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiParam {String} icon Icon identifier or URL
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle text
 * @apiParam {String} emailPlaceholder Email input placeholder text
 * @apiParam {String} subscribeButtonText Subscribe button text
 * @apiParam {String} legalDisclaimer Legal disclaimer text
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(subscribeSection_validation_1.SubscribeSectionValidation.createSubscribeSectionZodSchema), subscribeSection_controller_1.SubscribeSectionController.createSubscribeSection);
/**
 * @api {get} /subscribe-section Get Subscribe Section
 * @apiName GetSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', subscribeSection_controller_1.SubscribeSectionController.getSubscribeSection);
/**
 * @api {patch} /subscribe-section Update Subscribe Section
 * @apiName UpdateSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiParam {String} [icon] Icon identifier or URL
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle text
 * @apiParam {String} [emailPlaceholder] Email input placeholder text
 * @apiParam {String} [subscribeButtonText] Subscribe button text
 * @apiParam {String} [legalDisclaimer] Legal disclaimer text
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(subscribeSection_validation_1.SubscribeSectionValidation.updateSubscribeSectionZodSchema), subscribeSection_controller_1.SubscribeSectionController.updateSubscribeSection);
/**
 * @api {delete} /subscribe-section Delete Subscribe Section
 * @apiName DeleteSubscribeSection
 * @apiGroup SubscribeSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted Subscribe section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', subscribeSection_controller_1.SubscribeSectionController.deleteSubscribeSection);
exports.SubscribeSectionRoute = router;
