"use client";

import { useLeadCapture } from "@/components/forms/LeadCaptureProvider";

export function MobileCtaBar() {
  const { openLeadForm } = useLeadCapture();
  return (
    <div className="mobile-cta" aria-label="Quick project actions">
      <button type="button" onClick={() => openLeadForm("Book a free site visit")}>Book site visit</button>
      <button type="button" onClick={() => openLeadForm("Get the latest price sheet")}>Get price sheet</button>
    </div>
  );
}
