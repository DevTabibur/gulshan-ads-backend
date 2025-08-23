import express from "express";
import { UserRouter } from "../modules/users/users.routes";
import { AuthRoute } from "../modules/auth/auth.routes";
import { TestimonialRoute } from "../modules/testimonials/testimonials.routes";
import { HeroSectionRoute } from "../modules/heroSection/heroSection.routes";
import { TrustSectionRoute } from "../modules/trustSection/trustSection.routes";
import { AdvertisingSectionRoute } from "../modules/advertisingSection/advertisingSection.routes";
import { MetaSectionRoute } from "../modules/metaSection/metaSection.routes";
import { TelegramSectionRoute } from "../modules/telegramSection/telegramSection.routes";
import { AboutSectionRoute } from "../modules/aboutSection/aboutSection.routes";
import { GettingStartedSectionRoute } from "../modules/gettingStartedSection/gettingStartedSection.routes";
import { AdvertisersHeroSectionRoute } from "../modules/advertisersHeroSection/advertisersHeroSection.routes";
import { WhyChooseUsSectionRoute } from "../modules/whyChooseUsSection/whyChooseUsSection.routes";
import { PricingSectionRoute } from "../modules/pricingSection/pricingSection.routes";
import { AdvertisersStorySectionRoute } from "../modules/advertisersStorySection/advertisersStorySection.routes";
import { AdvertisersGettingStartedSecRoute } from "../modules/advertisersGettingStartedSec/advertisersGettingStartedSec.routes";
import { AdvertisersCtaHeroSectionRoute } from "../modules/advertisersCtaHeroSection/advertisersCtaHeroSection.routes";
import { MetaHeroSectionRoute } from "../modules/metaHeroSection/metaHeroSection.routes";
import { GulshanAdsMetaManagementSectionRoute } from "../modules/gulshanAdsMetaManagementSection/gulshanAdsMetaManagementSection.routes";
import { CampaignLaunchManagementSectionRoute } from "../modules/campaignLaunchManagementSection/campaignLaunchManagementSection.routes";
import { HelperServicesSectionRoute } from "../modules/helperServicesSection/helperServicesSection.routes";
import { MetaPricingSectionRoute } from "../modules/metaPricingSection/metaPricingSection.routes";
import { MetaSuccessStoriesSectionRoute } from "../modules/metaSuccessStoriesSection/metaSuccessStoriesSection.routes";
import { FAQSectionRoute } from "../modules/faqSection/faqSection.routes";
import { MetaPartnershipSectionRoute } from "../modules/metaPartnershipSection/metaPartnershipSection.routes";
import { TikTokHeroSectionRoute } from "../modules/tikTokHeroSection/tikTokHeroSection.routes";
import { TikTokAudienceSectionRoute } from "../modules/tikTokAudienceSection/tikTokAudienceSection.routes";
import { TikTokVideoAdvertisingSectionRoute } from "../modules/tikTokVideoAdvertisingSection/tikTokVideoAdvertisingSection.routes";
import { PaymentAutomationSectionRoute } from "../modules/paymentAutomationSection/paymentAutomationSection.routes";
import { TikTokPartnerSectionRoute } from "../modules/tikTokPartnerSection/tikTokPartnerSection.routes";
import { TikTokClientSaysSectionRoute } from "../modules/tikTokClientSaysSection/tikTokClientSaysSection.routes";
import { SubscribeSectionRoute } from "../modules/subscribeSection/subscribeSection.routes";
import { SiteSettingsRoute } from "../modules/siteSettings/siteSettings.routes";

const router = express.Router();

const allRoutes = [
  {
    path: "/register",
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/testimonials',
    route: TestimonialRoute,
  },
  {
    path: '/hero-section',
    route: HeroSectionRoute,
  },
  {
    path: '/trust-section',
    route: TrustSectionRoute,
  },
  {
    path: '/advertising-section',
    route: AdvertisingSectionRoute,
  },
  {
    path: '/meta-section',
    route: MetaSectionRoute,
  },
  {
    path: '/telegram-section',
    route: TelegramSectionRoute,
  },
  {
    path: '/about-section',
    route: AboutSectionRoute,
  },
  {
    path: '/getting-started-section',
    route: GettingStartedSectionRoute,
  },
  {
    path: '/advertisers-hero-section',
    route: AdvertisersHeroSectionRoute,
  },
  {
    path: '/why-choose-us-section',
    route: WhyChooseUsSectionRoute,
  },
  {
    path: '/pricing-section',
    route: PricingSectionRoute,
  },
  {
    path: '/advertisers-story-section',
    route: AdvertisersStorySectionRoute,
  },
  {
    path: '/advertisers-getting-started-sec',
    route: AdvertisersGettingStartedSecRoute,
  },
  {
    path: '/advertisers-cta-hero-section',
    route: AdvertisersCtaHeroSectionRoute,
  },
  {
    path: '/meta-hero-section',
    route: MetaHeroSectionRoute,
  },
  {
    path: '/gulshan-ads-meta-management-section',
    route: GulshanAdsMetaManagementSectionRoute,
  },
  {
    path: '/campaign-launch-management-section',
    route: CampaignLaunchManagementSectionRoute,
  },
  {
    path: '/helper-services-section',
    route: HelperServicesSectionRoute,
  },
  {
    path: '/meta-pricing-section',
    route: MetaPricingSectionRoute,
  },
  {
    path: '/meta-success-stories-section',
    route: MetaSuccessStoriesSectionRoute,
  },
  {
    path: '/faq-section',
    route: FAQSectionRoute,
  },
  {
    path: '/meta-partnership-section',
    route: MetaPartnershipSectionRoute,
  },
  {
    path: '/tik-tok-hero-section',
    route: TikTokHeroSectionRoute,
  },
  {
    path: '/tik-tok-audience-section',
    route: TikTokAudienceSectionRoute,
  },
  {
    path: '/tik-tok-video-advertising-section',
    route: TikTokVideoAdvertisingSectionRoute,
  },
  {
    path: '/payment-automation-section',
    route: PaymentAutomationSectionRoute,
  },
  {
    path: '/tik-tok-partner-section',
    route: TikTokPartnerSectionRoute,
  },
  {
    path: '/tik-tok-client-says-section',
    route: TikTokClientSaysSectionRoute,
  },
  {
    path: '/subscribe-section',
    route: SubscribeSectionRoute,
  },
  {
    path: '/site-settings',
    route: SiteSettingsRoute,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
