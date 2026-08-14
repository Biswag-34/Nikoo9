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
            <h2 className="section-title">At the centre of North Bengaluru’s next working geography.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Located at Huvinayakanahalli on KIADB Hardware Park Main Road, the project is positioned
              within the Aerospace Park micro-market. Only currently listed access distances are shown.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}><LocationExplorer /></Reveal>
      </Container>
    </section>
  );
}
