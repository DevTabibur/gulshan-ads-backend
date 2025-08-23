"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("../modules/users/users.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const testimonials_routes_1 = require("../modules/testimonials/testimonials.routes");
const heroSection_routes_1 = require("../modules/heroSection/heroSection.routes");
const trustSection_routes_1 = require("../modules/trustSection/trustSection.routes");
const advertisingSection_routes_1 = require("../modules/advertisingSection/advertisingSection.routes");
const metaSection_routes_1 = require("../modules/metaSection/metaSection.routes");
const telegramSection_routes_1 = require("../modules/telegramSection/telegramSection.routes");
const aboutSection_routes_1 = require("../modules/aboutSection/aboutSection.routes");
const gettingStartedSection_routes_1 = require("../modules/gettingStartedSection/gettingStartedSection.routes");
const advertisersHeroSection_routes_1 = require("../modules/advertisersHeroSection/advertisersHeroSection.routes");
const whyChooseUsSection_routes_1 = require("../modules/whyChooseUsSection/whyChooseUsSection.routes");
const pricingSection_routes_1 = require("../modules/pricingSection/pricingSection.routes");
const advertisersStorySection_routes_1 = require("../modules/advertisersStorySection/advertisersStorySection.routes");
const advertisersGettingStartedSec_routes_1 = require("../modules/advertisersGettingStartedSec/advertisersGettingStartedSec.routes");
const advertisersCtaHeroSection_routes_1 = require("../modules/advertisersCtaHeroSection/advertisersCtaHeroSection.routes");
const metaHeroSection_routes_1 = require("../modules/metaHeroSection/metaHeroSection.routes");
const gulshanAdsMetaManagementSection_routes_1 = require("../modules/gulshanAdsMetaManagementSection/gulshanAdsMetaManagementSection.routes");
const campaignLaunchManagementSection_routes_1 = require("../modules/campaignLaunchManagementSection/campaignLaunchManagementSection.routes");
const helperServicesSection_routes_1 = require("../modules/helperServicesSection/helperServicesSection.routes");
const metaPricingSection_routes_1 = require("../modules/metaPricingSection/metaPricingSection.routes");
const metaSuccessStoriesSection_routes_1 = require("../modules/metaSuccessStoriesSection/metaSuccessStoriesSection.routes");
const faqSection_routes_1 = require("../modules/faqSection/faqSection.routes");
const metaPartnershipSection_routes_1 = require("../modules/metaPartnershipSection/metaPartnershipSection.routes");
const tikTokHeroSection_routes_1 = require("../modules/tikTokHeroSection/tikTokHeroSection.routes");
const tikTokAudienceSection_routes_1 = require("../modules/tikTokAudienceSection/tikTokAudienceSection.routes");
const tikTokVideoAdvertisingSection_routes_1 = require("../modules/tikTokVideoAdvertisingSection/tikTokVideoAdvertisingSection.routes");
const paymentAutomationSection_routes_1 = require("../modules/paymentAutomationSection/paymentAutomationSection.routes");
const tikTokPartnerSection_routes_1 = require("../modules/tikTokPartnerSection/tikTokPartnerSection.routes");
const tikTokClientSaysSection_routes_1 = require("../modules/tikTokClientSaysSection/tikTokClientSaysSection.routes");
const subscribeSection_routes_1 = require("../modules/subscribeSection/subscribeSection.routes");
const siteSettings_routes_1 = require("../modules/siteSettings/siteSettings.routes");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: "/register",
        route: users_routes_1.UserRouter,
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRoute,
    },
    {
        path: '/testimonials',
        route: testimonials_routes_1.TestimonialRoute,
    },
    {
        path: '/hero-section',
        route: heroSection_routes_1.HeroSectionRoute,
    },
    {
        path: '/trust-section',
        route: trustSection_routes_1.TrustSectionRoute,
    },
    {
        path: '/advertising-section',
        route: advertisingSection_routes_1.AdvertisingSectionRoute,
    },
    {
        path: '/meta-section',
        route: metaSection_routes_1.MetaSectionRoute,
    },
    {
        path: '/telegram-section',
        route: telegramSection_routes_1.TelegramSectionRoute,
    },
    {
        path: '/about-section',
        route: aboutSection_routes_1.AboutSectionRoute,
    },
    {
        path: '/getting-started-section',
        route: gettingStartedSection_routes_1.GettingStartedSectionRoute,
    },
    {
        path: '/advertisers-hero-section',
        route: advertisersHeroSection_routes_1.AdvertisersHeroSectionRoute,
    },
    {
        path: '/why-choose-us-section',
        route: whyChooseUsSection_routes_1.WhyChooseUsSectionRoute,
    },
    {
        path: '/pricing-section',
        route: pricingSection_routes_1.PricingSectionRoute,
    },
    {
        path: '/advertisers-story-section',
        route: advertisersStorySection_routes_1.AdvertisersStorySectionRoute,
    },
    {
        path: '/advertisers-getting-started-sec',
        route: advertisersGettingStartedSec_routes_1.AdvertisersGettingStartedSecRoute,
    },
    {
        path: '/advertisers-cta-hero-section',
        route: advertisersCtaHeroSection_routes_1.AdvertisersCtaHeroSectionRoute,
    },
    {
        path: '/meta-hero-section',
        route: metaHeroSection_routes_1.MetaHeroSectionRoute,
    },
    {
        path: '/gulshan-ads-meta-management-section',
        route: gulshanAdsMetaManagementSection_routes_1.GulshanAdsMetaManagementSectionRoute,
    },
    {
        path: '/campaign-launch-management-section',
        route: campaignLaunchManagementSection_routes_1.CampaignLaunchManagementSectionRoute,
    },
    {
        path: '/helper-services-section',
        route: helperServicesSection_routes_1.HelperServicesSectionRoute,
    },
    {
        path: '/meta-pricing-section',
        route: metaPricingSection_routes_1.MetaPricingSectionRoute,
    },
    {
        path: '/meta-success-stories-section',
        route: metaSuccessStoriesSection_routes_1.MetaSuccessStoriesSectionRoute,
    },
    {
        path: '/faq-section',
        route: faqSection_routes_1.FAQSectionRoute,
    },
    {
        path: '/meta-partnership-section',
        route: metaPartnershipSection_routes_1.MetaPartnershipSectionRoute,
    },
    {
        path: '/tik-tok-hero-section',
        route: tikTokHeroSection_routes_1.TikTokHeroSectionRoute,
    },
    {
        path: '/tik-tok-audience-section',
        route: tikTokAudienceSection_routes_1.TikTokAudienceSectionRoute,
    },
    {
        path: '/tik-tok-video-advertising-section',
        route: tikTokVideoAdvertisingSection_routes_1.TikTokVideoAdvertisingSectionRoute,
    },
    {
        path: '/payment-automation-section',
        route: paymentAutomationSection_routes_1.PaymentAutomationSectionRoute,
    },
    {
        path: '/tik-tok-partner-section',
        route: tikTokPartnerSection_routes_1.TikTokPartnerSectionRoute,
    },
    {
        path: '/tik-tok-client-says-section',
        route: tikTokClientSaysSection_routes_1.TikTokClientSaysSectionRoute,
    },
    {
        path: '/subscribe-section',
        route: subscribeSection_routes_1.SubscribeSectionRoute,
    },
    {
        path: '/site-settings',
        route: siteSettings_routes_1.SiteSettingsRoute,
    },
];
allRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
