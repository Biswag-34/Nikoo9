"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/data/site-content";

export function LeadForm({ title = "Get the latest project details", compact = false }: { title?: string; compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Thank you</h2>
        <p>Demo submission validated successfully. Lead delivery will be connected before the website goes live.</p>
      </div>
    );
  }

  return (
    <form className={`lead-form ${compact ? "lead-form--compact" : ""}`} onSubmit={handleSubmit}>
      <div className="lead-form__heading">
        <p className="eyebrow">Priority project assistance</p>
        <h2 id={compact ? "lead-modal-title" : undefined}>{title}</h2>
        <p>Receive the current cost sheet, unit plans, availability and site-visit assistance.</p>
      </div>
      <label><span>Full name</span><input name="name" autoComplete="name" placeholder="Enter your name" required /></label>
      <label>
        <span>WhatsApp number</span>
        <span className="phone-field">
          <b>+91</b>
          <input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" pattern="[6-9][0-9]{9}" maxLength={10} placeholder="10-digit mobile number" aria-label="10-digit mobile number" required />
        </span>
      </label>
      <label>
        <span>Interested in</span>
        <select name="configuration" defaultValue="">
          <option value="" disabled>Select a configuration</option>
          {siteContent.configurations.map((configuration) => <option key={configuration} value={configuration}>{configuration}</option>)}
        </select>
      </label>
      <button className="button button--primary lead-form__submit" type="submit"><span>Send details on WhatsApp</span><span aria-hidden="true">↗</span></button>
    </form>
  );
}
