import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { siteContent } from "@/data/site-content";

export function PlanKit() {
  const { planKit } = siteContent;
  return (
    <section id="plan-kit" className="plan-kit section-shell">
      <Container>
        <div className="plan-kit__heading">
          <Reveal>
            <p className="eyebrow">{planKit.eyebrow}</p>
            <h2 className="section-title">{planKit.title}</h2>
          </Reveal>
          <Reveal delay={0.08}><p>{planKit.description}</p></Reveal>
        </div>

        <div className="plan-kit__visual-grid">
          <Reveal className="plan-kit__media-wrap" delay={0.1}>
            <PlaceholderMedia className="plan-kit__media" label="Approved master plan · Coming soon" ratio="16 / 10" />
            <span className="plan-kit__media-label">Master plan · Coming soon</span>
          </Reveal>
          <Reveal className="plan-kit__facts" delay={0.16}>
            {planKit.facts.map((fact) => <article key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></article>)}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
