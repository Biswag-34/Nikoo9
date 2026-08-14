import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function FinalConversion() {
  return (
    <section className="final-conversion section-shell">
      <Container className="final-conversion__layout">
        <Reveal className="final-conversion__copy">
          <p className="eyebrow">Project brochure</p>
          <h2>Get plans and pricing.</h2>
          <p>
            Register once to request the brochure, current plans, pricing, availability and site-visit assistance.
          </p>
          <ul>
            {siteContent.planKit.brochureIncludes.map((item) => (
              <li key={item}><span aria-hidden="true"><CheckCircle2 size={15} strokeWidth={1.9} /></span>{item}</li>
            ))}
          </ul>
          <div className="final-conversion__proof">
            <span>Project details</span>
            <span>Floor plans</span>
            <span>Site-visit assistance</span>
          </div>
        </Reveal>
        <Reveal className="final-conversion__form" delay={0.1}>
          <LeadForm title="Enquire about Nikoo Homes 9" />
        </Reveal>
      </Container>
    </section>
  );
}
