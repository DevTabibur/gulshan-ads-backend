"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersGettingStartedSecRoute = void 0;
const express_1 = require("express");
const advertisersGettingStartedSec_controller_1 = require("./advertisersGettingStartedSec.controller");
const zodValidateRequest_1 = __importDefault(require("../../middlewares/zodValidateRequest"));
const advertisersGettingStartedSec_validation_1 = require("./advertisersGettingStartedSec.validation");
const router = (0, express_1.Router)();
/**
 * @api {post} /advertisers-getting-started-sec Create Advertisers Getting Started Section
 * @apiName CreateAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {String} title Main title
 * @apiParam {String} subtitle Subtitle/description
 * @apiParam {Array} steps Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.post('/', (0, zodValidateRequest_1.default)(advertisersGettingStartedSec_validation_1.AdvertisersGettingStartedSecValidation.createAdvertisersGettingStartedSecZodSchema), advertisersGettingStartedSec_controller_1.AdvertisersGettingStartedSecController.createAdvertisersGettingStartedSec);
/**
 * @api {get} /advertisers-getting-started-sec Get Advertisers Getting Started Section
 * @apiName GetAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', advertisersGettingStartedSec_controller_1.AdvertisersGettingStartedSecController.getAdvertisersGettingStartedSec);
/**
 * @api {patch} /advertisers-getting-started-sec Update Advertisers Getting Started Section
 * @apiName UpdateAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {String} [title] Main title
 * @apiParam {String} [subtitle] Subtitle/description
 * @apiParam {Array} [steps] Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/', (0, zodValidateRequest_1.default)(advertisersGettingStartedSec_validation_1.AdvertisersGettingStartedSecValidation.updateAdvertisersGettingStartedSecZodSchema), advertisersGettingStartedSec_controller_1.AdvertisersGettingStartedSecController.updateAdvertisersGettingStartedSec);
/**
 * @api {patch} /advertisers-getting-started-sec/steps Update Process Steps
 * @apiName UpdateSteps
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiParam {Array} steps Array of process steps
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.patch('/steps', (0, zodValidateRequest_1.default)(advertisersGettingStartedSec_validation_1.AdvertisersGettingStartedSecValidation.updateStepsZodSchema), advertisersGettingStartedSec_controller_1.AdvertisersGettingStartedSecController.updateSteps);
/**
 * @api {delete} /advertisers-getting-started-sec Delete Advertisers Getting Started Section
 * @apiName DeleteAdvertisersGettingStartedSec
 * @apiGroup AdvertisersGettingStartedSec
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted advertisers getting started section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', advertisersGettingStartedSec_controller_1.AdvertisersGettingStartedSecController.deleteAdvertisersGettingStartedSec);
exports.AdvertisersGettingStartedSecRoute = router;
