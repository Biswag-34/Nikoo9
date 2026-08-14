import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { LocationExplorer } from "./LocationExplorer";

export function Location() {
  return (
    <section id="location" className="location-section section-shell">
      <Container>
        <div className="location-heading">
          <Reveal>
            <p className="eyebrow">The location</p>
            <h2 className="section-title">Connected to North Bengaluru.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              The Huvinayakanahalli address places the project within the Aerospace Park micro-market.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}><LocationExplorer /></Reveal>
      </Container>
    </section>
  );
}
