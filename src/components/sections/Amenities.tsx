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
            <h2 className="section-title">Designed for movement, pause and belonging.</h2>
            <p>
              Browse the amenity experience as a tight editorial module: visual mood on the left,
              category controls and the selected lifestyle story on the right.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}><AmenitiesExplorer /></Reveal>
      </Container>
    </section>
  );
}
