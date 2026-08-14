import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  return (
    <section id="faq" className="faq-section section-shell">
      <Container>
        <div className="faq-layout">
          <Reveal className="faq-heading">
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="section-title">The important details, answered clearly.</h2>
            <p>Project information may evolve. Request the latest documents before making a purchase decision.</p>
          </Reveal>
          <Reveal delay={0.08}><FaqAccordion /></Reveal>
        </div>
      </Container>
    </section>
  );
}
