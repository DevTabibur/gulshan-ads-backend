import MetaHeroSection from './metaHeroSection.model';

class MetaHeroSectionServiceClass {
  // Create or update the meta hero section
  async createMetaHeroSection(payload: any) {
    // Only one meta hero section should exist, so upsert
    const existing = await MetaHeroSection.findOne();
    if (existing) {
      Object.assign(existing, payload);
      await existing.save();
      return existing;
    }
    const created = await MetaHeroSection.create(payload);
    return created;
  }

  // Get the meta hero section
  async getMetaHeroSection() {
    const result = await MetaHeroSection.findOne();
    return result;
  }

  // Update the meta hero section
  async updateMetaHeroSection(payload: any) {
    const updated = await MetaHeroSection.findOneAndUpdate(
      {},
      payload,
      { new: true, upsert: true }
    );
    return updated;
  }

  // Update only the CTA buttons
  async updateCTAButtons(ctaButtons: any) {
    const updated = await MetaHeroSection.findOneAndUpdate(
      {},
      { ctaButtons },
      { new: true, upsert: true }
    );
    return updated;
  }

  // Update only the statistics
  async updateStatistics(statistics: any) {
    const updated = await MetaHeroSection.findOneAndUpdate(
      {},
      { statistics },
      { new: true, upsert: true }
    );
    return updated;
  }

  // Delete the meta hero section
  async deleteMetaHeroSection() {
    const deleted = await MetaHeroSection.findOneAndDelete({});
    return deleted;
  }

  // Reset the meta hero section to default values
  async resetMetaHeroSection(defaultValues: any) {
    // Remove existing section
    await MetaHeroSection.deleteMany({});
    // Create new with default values
    const created = await MetaHeroSection.create(defaultValues);
    return created;
  }
}

const MetaHeroSectionService = new MetaHeroSectionServiceClass();
export default MetaHeroSectionService;
