import { preload } from "react-dom";
import Hero from "./Hero";

const HERO_POSTER = "/videos/hero-poster.png";
const HERO_VIDEO = "/videos/Z.mp4";

export default function HeroSection() {
  preload(HERO_POSTER, { as: "image", fetchPriority: "high" });
  preload(HERO_VIDEO, { as: "video", fetchPriority: "high" });

  return <Hero />;
}
