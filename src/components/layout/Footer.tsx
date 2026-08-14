import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <a className="footer-wordmark" href="#overview" aria-label="Nikoo Homes 9 home"><strong>nikoo</strong><b>9</b><small>homes</small></a>
          <nav aria-label="Footer navigation">
            {siteContent.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            <a href="#faq">FAQ</a>
          </nav>
        </div>
        <div className="footer-rera"><span>RERA Registration</span><strong>Coming Soon</strong></div>
        <p className="footer-disclaimer">
          This website is intended for project-information and enquiry purposes. Plans, areas, specifications,
          amenities, pricing, inventory, images and timelines are indicative and may change. Please verify all
          information against current project and regulatory documents before making a booking decision.
        </p>
        <div className="footer-bottom">
          <span>Copyright 2026 Nikoo Homes 9</span>
          <a href="#overview">Back to top <ArrowUp size={13} aria-hidden="true" /></a>
        </div>
      </Container>
    </footer>
  );
}
