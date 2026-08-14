import {
  BadgeCheck,
  Building2,
  Dumbbell,
  FileCheck2,
  Home,
  MapPinned,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

const uspIcons: LucideIcon[] = [Home, MapPinned, Building2, Dumbbell, BadgeCheck, FileCheck2];

export function WhyVision() {
  return (
    <section id="why-nikoo" className="why-vision section-shell">
      <Container>
        <Reveal className="why-vision__intro">
          <p className="eyebrow">Why Nikoo Homes 9</p>
          <h2 className="section-title">Why choose Nikoo Homes 9</h2>
          <p>
            Usable home choices, an airport-side corridor, neighbourhood-scale planning and
            daily-life amenities are presented in a quick, scannable way.
          </p>
        </Reveal>

        <div className="why-vision__proof-grid" aria-label="Project advantages">
          {siteContent.usps.map((usp, index) => {
            const Icon = uspIcons[index] ?? BadgeCheck;
            return (
              <Reveal className="why-vision__proof-card" delay={Math.min(index * 0.035, 0.14)} key={usp.number}>
                <span className="usp-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.8} /></span>
                <div>
                  <h3>{usp.title}</h3>
                  <p>{usp.description}</p>
                  <strong>{usp.proof}</strong>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
