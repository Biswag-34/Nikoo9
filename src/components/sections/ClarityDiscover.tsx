import { ArrowUpRight } from "lucide-react";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export function ClarityDiscover() {
  return (
    <section id="clarity" className="clarity-discover section-shell">
      <Container className="clarity-discover__layout">
        <Reveal className="clarity-discover__copy">
          <p className="eyebrow">Explore with clarity</p>
          <h2 className="section-title">Get price, plans and guidance.</h2>
          <p>
            Get the latest cost sheet, configuration availability, floor-plan support and
            a guided overview of Nikoo Homes 9.
          </p>
        </Reveal>

        <Reveal className="clarity-discover__cta" delay={0.08}>
          <p>Project information pack</p>
          <LeadTrigger className="button button--primary" intent="Get the Nikoo Homes 9 project information pack">
            <span>Request project pack</span><ArrowUpRight size={15} aria-hidden="true" />
          </LeadTrigger>
        </Reveal>
      </Container>
    </section>
  );
}
