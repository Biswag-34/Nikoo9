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
            <h2 className="section-title">Choose your home format.</h2>
            <p>
              Compare available configurations, listed areas and floor-plan actions in one compact view.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}><ResidenceExplorer /></Reveal>
      </Container>
    </section>
  );
}
