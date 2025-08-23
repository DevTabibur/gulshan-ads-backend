import { Router } from 'express';
import { SiteSettingsController } from './siteSettings.controller';
import zodValidateRequest from '../../middlewares/zodValidateRequest';
import { SiteSettingsValidation } from './siteSettings.validation';

const router = Router();

/**
 * @api {post} /site-settings Create Site Settings
 * @apiName CreateSiteSettings
 * @apiGroup SiteSettings
 *
 * @apiParam {String} siteName Site name
 * @apiParam {String} siteTagline Site tagline
 * @apiParam {String} logo Logo URL
 * @apiParam {String} [logoDark] Dark mode logo URL
 * @apiParam {Object} contactInfo Contact information
 * @apiParam {Object} socialMedia Social media links
 * @apiParam {Object} seoSettings SEO settings
 * @apiParam {Object} footerSettings Footer settings
 * @apiParam {String} primaryColor Primary color
 * @apiParam {String} secondaryColor Secondary color
 * @apiParam {String} currency Currency
 * @apiParam {String} timezone Timezone
 * @apiParam {String} language Language
 * @apiParam {String} businessName Business name
 * @apiParam {String} businessDescription Business description
 * @apiParam {String} businessType Business type
 * @apiParam {Number} foundedYear Founded year
 * @apiParam {String} privacyPolicyUrl Privacy policy URL
 * @apiParam {String} termsOfServiceUrl Terms of service URL
 * @apiParam {String} cookiePolicyUrl Cookie policy URL
 * @apiParam {String} [googleAnalyticsId] Google Analytics ID
 * @apiParam {String} [facebookPixelId] Facebook Pixel ID
 * @apiParam {String} [tiktokPixelId] TikTok Pixel ID
 * @apiParam {Boolean} [enableNewsletter] Enable newsletter
 * @apiParam {Boolean} [enableContactForm] Enable contact form
 * @apiParam {Boolean} [enableBlog] Enable blog
 * @apiParam {Boolean} [enableTestimonials] Enable testimonials
 * @apiParam {Boolean} [maintenanceMode] Maintenance mode
 * @apiParam {String} [maintenanceMessage] Maintenance message
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Created Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.post(
  '/',
  zodValidateRequest(SiteSettingsValidation.createSiteSettingsZodSchema),
  SiteSettingsController.createSiteSettings,
);

/**
 * @api {get} /site-settings Get Site Settings
 * @apiName GetSiteSettings
 * @apiGroup SiteSettings
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.get('/', SiteSettingsController.getSiteSettings);

/**
 * @api {patch} /site-settings Update Site Settings
 * @apiName UpdateSiteSettings
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [siteName] Site name
 * @apiParam {String} [siteTagline] Site tagline
 * @apiParam {String} [logo] Logo URL
 * @apiParam {String} [logoDark] Dark mode logo URL
 * @apiParam {Object} [contactInfo] Contact information
 * @apiParam {Object} [socialMedia] Social media links
 * @apiParam {Object} [seoSettings] SEO settings
 * @apiParam {Object} [footerSettings] Footer settings
 * @apiParam {String} [primaryColor] Primary color
 * @apiParam {String} [secondaryColor] Secondary color
 * @apiParam {String} [currency] Currency
 * @apiParam {String} [timezone] Timezone
 * @apiParam {String} [language] Language
 * @apiParam {String} [businessName] Business name
 * @apiParam {String} [businessDescription] Business description
 * @apiParam {String} [businessType] Business type
 * @apiParam {Number} [foundedYear] Founded year
 * @apiParam {String} [privacyPolicyUrl] Privacy policy URL
 * @apiParam {String} [termsOfServiceUrl] Terms of service URL
 * @apiParam {String} [cookiePolicyUrl] Cookie policy URL
 * @apiParam {String} [googleAnalyticsId] Google Analytics ID
 * @apiParam {String} [facebookPixelId] Facebook Pixel ID
 * @apiParam {String} [tiktokPixelId] TikTok Pixel ID
 * @apiParam {Boolean} [enableNewsletter] Enable newsletter
 * @apiParam {Boolean} [enableContactForm] Enable contact form
 * @apiParam {Boolean} [enableBlog] Enable blog
 * @apiParam {Boolean} [enableTestimonials] Enable testimonials
 * @apiParam {Boolean} [maintenanceMode] Maintenance mode
 * @apiParam {String} [maintenanceMessage] Maintenance message
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/',
  zodValidateRequest(SiteSettingsValidation.updateSiteSettingsZodSchema),
  SiteSettingsController.updateSiteSettings,
);

/**
 * @api {patch} /site-settings/basic-info Update Basic Site Info
 * @apiName UpdateBasicSiteInfo
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [siteName] Site name
 * @apiParam {String} [siteTagline] Site tagline
 * @apiParam {String} [logo] Logo URL
 * @apiParam {String} [logoDark] Dark mode logo URL
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/basic-info',
  zodValidateRequest(SiteSettingsValidation.updateBasicSiteInfoZodSchema),
  SiteSettingsController.updateBasicSiteInfo,
);

/**
 * @api {patch} /site-settings/contact-info Update Contact Information
 * @apiName UpdateContactInfo
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [email] Email address
 * @apiParam {String} [phone] Phone number
 * @apiParam {String} [address] Address
 * @apiParam {String} [workingHours] Working hours
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/contact-info',
  zodValidateRequest(SiteSettingsValidation.updateContactInfoZodSchema),
  SiteSettingsController.updateContactInfo,
);

/**
 * @api {patch} /site-settings/social-media Update Social Media Links
 * @apiName UpdateSocialMedia
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [facebook] Facebook URL
 * @apiParam {String} [twitter] Twitter URL
 * @apiParam {String} [instagram] Instagram URL
 * @apiParam {String} [linkedin] LinkedIn URL
 * @apiParam {String} [youtube] YouTube URL
 * @apiParam {String} [tiktok] TikTok URL
 * @apiParam {String} [telegram] Telegram URL
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/social-media',
  zodValidateRequest(SiteSettingsValidation.updateSocialMediaZodSchema),
  SiteSettingsController.updateSocialMedia,
);

/**
 * @api {patch} /site-settings/seo Update SEO Settings
 * @apiName UpdateSeoSettings
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [metaTitle] Meta title
 * @apiParam {String} [metaDescription] Meta description
 * @apiParam {String} [keywords] Keywords
 * @apiParam {String} [ogImage] OG image URL
 * @apiParam {String} [favicon] Favicon URL
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/seo',
  zodValidateRequest(SiteSettingsValidation.updateSeoSettingsZodSchema),
  SiteSettingsController.updateSeoSettings,
);

/**
 * @api {patch} /site-settings/footer Update Footer Settings
 * @apiName UpdateFooterSettings
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [copyrightText] Copyright text
 * @apiParam {String} [footerDescription] Footer description
 * @apiParam {Array} [footerLinks] Footer links array
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/footer',
  zodValidateRequest(SiteSettingsValidation.updateFooterSettingsZodSchema),
  SiteSettingsController.updateFooterSettings,
);

/**
 * @api {patch} /site-settings/business-info Update Business Information
 * @apiName UpdateBusinessInfo
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [businessName] Business name
 * @apiParam {String} [businessDescription] Business description
 * @apiParam {String} [businessType] Business type
 * @apiParam {Number} [foundedYear] Founded year
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/business-info',
  zodValidateRequest(SiteSettingsValidation.updateBusinessInfoZodSchema),
  SiteSettingsController.updateBusinessInfo,
);

/**
 * @api {patch} /site-settings/legal-info Update Legal Information
 * @apiName UpdateLegalInfo
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [privacyPolicyUrl] Privacy policy URL
 * @apiParam {String} [termsOfServiceUrl] Terms of service URL
 * @apiParam {String} [cookiePolicyUrl] Cookie policy URL
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/legal-info',
  zodValidateRequest(SiteSettingsValidation.updateLegalInfoZodSchema),
  SiteSettingsController.updateLegalInfo,
);

/**
 * @api {patch} /site-settings/analytics Update Analytics & Tracking
 * @apiName UpdateAnalytics
 * @apiGroup SiteSettings
 *
 * @apiParam {String} [googleAnalyticsId] Google Analytics ID
 * @apiParam {String} [facebookPixelId] Facebook Pixel ID
 * @apiParam {String} [tiktokPixelId] TikTok Pixel ID
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/analytics',
  zodValidateRequest(SiteSettingsValidation.updateAnalyticsZodSchema),
  SiteSettingsController.updateAnalytics,
);

/**
 * @api {patch} /site-settings/feature-flags Update Feature Flags
 * @apiName UpdateFeatureFlags
 * @apiGroup SiteSettings
 *
 * @apiParam {Boolean} [enableNewsletter] Enable newsletter
 * @apiParam {Boolean} [enableContactForm] Enable contact form
 * @apiParam {Boolean} [enableBlog] Enable blog
 * @apiParam {Boolean} [enableTestimonials] Enable testimonials
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/feature-flags',
  zodValidateRequest(SiteSettingsValidation.updateFeatureFlagsZodSchema),
  SiteSettingsController.updateFeatureFlags,
);

/**
 * @api {patch} /site-settings/maintenance Update Maintenance Mode
 * @apiName UpdateMaintenanceMode
 * @apiGroup SiteSettings
 *
 * @apiParam {Boolean} [maintenanceMode] Maintenance mode
 * @apiParam {String} [maintenanceMessage] Maintenance message
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Updated Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.patch(
  '/maintenance',
  zodValidateRequest(SiteSettingsValidation.updateMaintenanceModeZodSchema),
  SiteSettingsController.updateMaintenanceMode,
);

/**
 * @api {delete} /site-settings Delete Site Settings
 * @apiName DeleteSiteSettings
 * @apiGroup SiteSettings
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Object} data Deleted Site Settings data
 *
 * @apiError {Object} error Error message
 */
router.delete('/', SiteSettingsController.deleteSiteSettings);

export const SiteSettingsRoute = router;
