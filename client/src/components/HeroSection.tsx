import { personalInfo, images } from "@/config/siteConfig";

export default function HeroSection() {
  return (
    <section className="scenic-hero" aria-label="A personal motto">
      <img
        className="scenic-hero-image"
        src={images.heroBackground}
        width="5548"
        height="2065"
        alt="A mountain valley with forested slopes and snow-covered peaks"
        fetchPriority="high"
      />
      <div className="scenic-hero-shade" aria-hidden="true" />
      <blockquote className="scenic-hero-quote">
        <p>{personalInfo.heroQuote}</p>
        <cite>{personalInfo.heroAttribution}</cite>
      </blockquote>
    </section>
  );
}
