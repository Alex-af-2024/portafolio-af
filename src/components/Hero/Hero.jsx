import "./Hero.css";

export default function Hero({ content }) {
  return (
    <section id="hero" className="fade-in hero">
      <h1 className="hero-name">{content.name}</h1>
      <h2 className="hero-headline">{content.headline}</h2>
      <p className="hero-description">{content.heroText}</p>
    </section>
  );
}
