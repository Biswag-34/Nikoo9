import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { AmenitiesExplorer } from "./AmenitiesExplorer";

export function Amenities() {
  return (
    <section id="amenities" className="amenities-section section-shell">
      <Container>
        <div className="amenities-heading">
          <Reveal className="section-copy-block">
            <p className="eyebrow">Everyday amenities</p>
            <h2 className="section-title">Amenities for daily life.</h2>
            <p>
              Explore wellness, sport, family and landscape experiences through a focused visual module.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}><AmenitiesExplorer /></Reveal>
      </Container>
    </section>
  );
}
