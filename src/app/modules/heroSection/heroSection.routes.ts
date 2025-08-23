import { Router } from 'express';
import { HeroSectionController } from './heroSection.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { HeroSectionValidation } from './heroSection.validation';

const router = Router();

/**
 * @api {post} /hero-section Create Hero Section
 * @apiName CreateHeroSection
 * @apiGroup HeroSection
 *
 * @apiParam {String} title Hero section title
 * @apiParam {String} subtitle Hero section subtitle
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created hero section data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(HeroSectionValidation.createHeroSectionZodSchema),
  HeroSectionController.createHeroSection,
);

/**
 * @api {get} /hero-section Get Hero Section
 * @apiName GetHeroSection
 * @apiGroup HeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Hero section data
 *
 * @apiError {Object} error Error message
 */
router.get('/', HeroSectionController.getHeroSection);

/**
 * @api {patch} /hero-section Update Hero Section
 * @apiName UpdateHeroSection
 * @apiGroup HeroSection
 *
 * @apiParam {String} [title] Hero section title
 * @apiParam {String} [subtitle] Hero section subtitle
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated hero section data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(HeroSectionValidation.updateHeroSectionZodSchema),
  HeroSectionController.updateHeroSection,
);

/**
 * @api {delete} /hero-section Delete Hero Section
 * @apiName DeleteHeroSection
 * @apiGroup HeroSection
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted hero section data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', HeroSectionController.deleteHeroSection);

export const HeroSectionRoute = router;
