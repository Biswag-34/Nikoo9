"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { siteContent } from "@/data/site-content";

export function ResidenceExplorer() {
  const [activeId, setActiveId] = useState<string>(siteContent.residences[0].id);
  const reduceMotion = useReducedMotion();
  const activeResidence = siteContent.residences.find((residence) => residence.id === activeId) ?? siteContent.residences[0];

  return (
    <div className="residence-explorer">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          id="residence-panel"
          role="tabpanel"
          className="residence-panel"
          key={activeResidence.id}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <PlaceholderMedia className="residence-panel__media" label={`${activeResidence.name} floor plan · Coming soon`} ratio="4 / 3" />

          <div className="residence-panel__content">
            <div className="residence-tabs" role="tablist" aria-label="Choose a home configuration">
              {siteContent.residences.map((residence) => {
                const active = residence.id === activeId;
                return (
                  <button
                    key={residence.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="residence-panel"
                    className={active ? "is-active" : ""}
                    onClick={() => setActiveId(residence.id)}
                  >
                    {residence.name}
                  </button>
                );
              })}
            </div>
            <h3>{activeResidence.name}</h3>
            <p className="residence-panel__description">{activeResidence.description}</p>

            <dl className="residence-area-list">
              <div><dt>Built-up area</dt><dd>{activeResidence.builtUp}</dd></div>
              <div><dt>Carpet area</dt><dd>{activeResidence.carpet}</dd></div>
            </dl>

            <LeadTrigger className="button button--primary" intent={`Get ${activeResidence.name} floor plan`}>
              <span>Get this floor plan</span><span aria-hidden="true">↗</span>
            </LeadTrigger>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
