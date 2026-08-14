import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="final-cta section-shell">
      <Container className="final-cta__layout">
        <Reveal className="final-cta__content">
          <p className="eyebrow">Take the next step</p>
          <h2>Your Nikoo 9 journey can begin with one clear conversation.</h2>
          <p>Request current plans, pricing and availability, or arrange a project visit through the enquiry form.</p>
          <div className="final-cta__proof">
            <span>Project details</span><span>Floor plans</span><span>Site-visit assistance</span>
          </div>
        </Reveal>
        <Reveal className="final-cta__form" delay={0.1}><LeadForm title="Enquire about Nikoo Homes 9" /></Reveal>
      </Container>
    </section>
  );
}
