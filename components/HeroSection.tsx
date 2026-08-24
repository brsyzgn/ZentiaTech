import { preload } from "react-dom";
import Hero from "./Hero";
import { HERO_VISUAL_SRC } from "@/lib/site-assets";

export default function HeroSection() {
  preload(HERO_VISUAL_SRC, { as: "image", fetchPriority: "high" });

  return <Hero />;
}
