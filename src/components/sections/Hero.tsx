import { LeadForm } from "@/components/forms/LeadForm";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function Hero() {
  const { hero } = siteContent;
  return (
    <section id="overview" className="hero">
      <div className="hero__media-wrap">
        <picture className="hero__media">
          <source media="(max-width: 47.99rem)" srcSet="/images/concept/hero-mobile-concept.webp" />
          <img
            src="/images/concept/hero-desktop-concept.webp"
            alt="Conceptual view of a contemporary landscaped residential community"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <span className="hero__image-note">Conceptual artistic impression</span>
        <div className="hero__media-overlay" aria-hidden="true" />
      </div>
      <Container className="hero__layout">
        <div className="hero__content">
          <p className="eyebrow hero-animate hero-delay-1">{hero.eyebrow}</p>
          <h1 className="hero__title hero-animate hero-delay-2">{hero.title}</h1>
          <p className="hero__description hero-animate hero-delay-3">{hero.description}</p>
          <div className="hero__facts hero-animate hero-delay-4" aria-label="Project highlights">
            {hero.facts.map((fact) => <div className="hero-fact" key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
          </div>
          <div className="hero__actions hero-animate hero-delay-5">
            <LeadTrigger className="button button--primary" intent="Get the latest price sheet"><span>{hero.primaryCta}</span><span aria-hidden="true">↗</span></LeadTrigger>
            <LeadTrigger className="button button--glass" intent="Book a free site visit"><span>{hero.secondaryCta}</span><span aria-hidden="true">→</span></LeadTrigger>
          </div>
          <p className="hero__reassurance hero-animate hero-delay-5">{hero.reassurance}</p>
          <p className="hero__price-note">{hero.priceNote}</p>
        </div>
        <aside className="hero__form-card" aria-label="Project enquiry form"><LeadForm /></aside>
      </Container>
    </section>
  );
}
