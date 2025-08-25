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
const metaHeroSection_model_1 = __importDefault(require("./metaHeroSection.model"));
class MetaHeroSectionServiceClass {
    // Create or update the meta hero section
    createMetaHeroSection(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            // Only one meta hero section should exist, so upsert
            const existing = yield metaHeroSection_model_1.default.findOne();
            if (existing) {
                Object.assign(existing, payload);
                yield existing.save();
                return existing;
            }
            const created = yield metaHeroSection_model_1.default.create(payload);
            return created;
        });
    }
    // Get the meta hero section
    getMetaHeroSection() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield metaHeroSection_model_1.default.findOne();
            return result;
        });
    }
    // Update the meta hero section
    updateMetaHeroSection(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield metaHeroSection_model_1.default.findOneAndUpdate({}, payload, { new: true, upsert: true });
            return updated;
        });
    }
    // Update only the CTA buttons
    updateCTAButtons(ctaButtons) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield metaHeroSection_model_1.default.findOneAndUpdate({}, { ctaButtons }, { new: true, upsert: true });
            return updated;
        });
    }
    // Update only the statistics
    updateStatistics(statistics) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield metaHeroSection_model_1.default.findOneAndUpdate({}, { statistics }, { new: true, upsert: true });
            return updated;
        });
    }
    // Delete the meta hero section
    deleteMetaHeroSection() {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield metaHeroSection_model_1.default.findOneAndDelete({});
            return deleted;
        });
    }
    // Reset the meta hero section to default values
    resetMetaHeroSection(defaultValues) {
        return __awaiter(this, void 0, void 0, function* () {
            // Remove existing section
            yield metaHeroSection_model_1.default.deleteMany({});
            // Create new with default values
            const created = yield metaHeroSection_model_1.default.create(defaultValues);
            return created;
        });
    }
}
const MetaHeroSectionService = new MetaHeroSectionServiceClass();
exports.default = MetaHeroSectionService;
