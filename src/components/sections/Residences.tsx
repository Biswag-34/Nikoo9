import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ResidenceExplorer } from "./ResidenceExplorer";

export function Residences() {
  return (
    <section id="residences" className="residences-section section-shell">
      <Container>
        <div className="residences-heading">
          <Reveal className="section-copy-block">
            <p className="eyebrow">The residences</p>
            <h2 className="section-title">A home for every chapter of life.</h2>
            <p>
              Compare the available home formats in one compact view. Choose a configuration to see
              the listed areas, plan status and enquiry action without losing the floor-plan context.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}><ResidenceExplorer /></Reveal>
      </Container>
    </section>
  );
}
