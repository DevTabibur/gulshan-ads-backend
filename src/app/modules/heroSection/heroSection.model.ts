import { Model, Schema, model } from "mongoose";
import { IHeroSection } from "./heroSection.interface";

type HeroSectionModel = Model<IHeroSection, object>;

const heroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const HeroSectionModel = model<IHeroSection, HeroSectionModel>("HeroSection", heroSectionSchema);
export default HeroSectionModel;
