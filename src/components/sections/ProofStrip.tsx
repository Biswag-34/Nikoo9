import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function ProofStrip() {
  return (
    <section className="proof-section" aria-label="Project at a glance">
      <Container>
        <Reveal className="proof-strip">
          {siteContent.proofStats.map((stat) => (
            <article className="proof-stat" key={stat.label}>
              <p><strong>{stat.value}</strong><span>{stat.suffix}</span></p>
              <h2>{stat.label}</h2>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
