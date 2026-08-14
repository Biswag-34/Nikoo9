import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function ProjectUsps() {
  return (
    <section id="why-nikoo" className="usp-section section-shell">
      <Container>
        <div className="usp-heading">
          <Reveal>
            <p className="eyebrow">Why Nikoo Homes 9</p>
            <h2 className="section-title">Designed around more ways of living.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="usp-heading__copy">
              The proposition is not a single headline feature. It is the combination of home choice,
              neighbourhood scale, an employment-led location and everyday community infrastructure.
            </p>
          </Reveal>
        </div>

        <div className="usp-grid" aria-label="Project advantages">
          {siteContent.usps.map((usp, index) => (
            <Reveal className="usp-card" delay={Math.min(index * 0.055, 0.22)} key={usp.number}>
              <div className="usp-card__top">
                <span className="usp-card__number">{usp.number}</span>
                <span className="usp-card__line" aria-hidden="true" />
              </div>
              <h3>{usp.title}</h3>
              <p>{usp.description}</p>
              <strong>{usp.proof}</strong>
            </Reveal>
          ))}
        </div>

        <Reveal className="usp-cta" delay={0.1}>
          <div>
            <p className="eyebrow">Explore with clarity</p>
            <h3>Get the current price sheet and available unit mix.</h3>
          </div>
          <LeadTrigger className="button button--primary" intent="Get the latest price sheet">
            <span>Request project details</span><span aria-hidden="true">↗</span>
          </LeadTrigger>
        </Reveal>
      </Container>
    </section>
  );
}
