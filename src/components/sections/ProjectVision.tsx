import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { siteContent } from "@/data/site-content";

export function ProjectVision() {
  const { projectVision } = siteContent;
  return (
    <section id="project-vision" className="brand-story section-shell">
      <Container>
        <div className="brand-story__heading">
          <Reveal>
            <p className="eyebrow">{projectVision.eyebrow}</p>
            <h2 className="section-title">{projectVision.title}</h2>
          </Reveal>
          <Reveal delay={0.08}><p>{projectVision.description}</p></Reveal>
        </div>

        <div className="brand-story__feature">
          <Reveal className="brand-story__media-wrap" delay={0.1}>
            <ProjectMedia
              className="brand-story__media"
              src="/images/concept/project-lifestyle-concept.webp"
              alt="Conceptual landscaped community courtyard at dusk"
            />
          </Reveal>
          <Reveal className="brand-story__facts" delay={0.16}>
            {projectVision.facts.map((fact) => <article key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></article>)}
          </Reveal>
        </div>

        <div className="brand-principles">
          {projectVision.principles.map((principle, index) => (
            <Reveal className="brand-principle" delay={index * 0.06} key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="brand-story__cta" delay={0.1}>
          <div><p className="eyebrow">Discover Nikoo 9</p><h3>See how the complete project comes together around the way you want to live.</h3></div>
          <LeadTrigger className="button button--primary" intent="Get complete Nikoo Homes 9 project details">
            <span>Get project details</span><span aria-hidden="true">↗</span>
          </LeadTrigger>
        </Reveal>
      </Container>
    </section>
  );
}
