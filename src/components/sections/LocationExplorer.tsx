"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPinned, Navigation, Presentation, Route, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { siteContent } from "@/data/site-content";

const pointIcons: Record<string, LucideIcon[]> = {
  access: [Route, Navigation, MapPinned],
  context: [Route, MapPinned, Navigation],
  visit: [MapPinned, Presentation, Navigation],
};

export function LocationExplorer() {
  const [activeId, setActiveId] = useState<string>(siteContent.location.groups[0].id);
  const reduceMotion = useReducedMotion();
  const activeGroup = siteContent.location.groups.find((group) => group.id === activeId) ?? siteContent.location.groups[0];

  return (
    <div className="location-explorer">
      <div className="location-map">
        <ProjectMedia
          className="location-map__media"
          src="/images/location/nikoo-9-location-schematic.svg"
          alt="Schematic showing Nikoo Homes 9 near New Airport Road, Budigere Main Road and Bagalur"
          disclaimer="Verified-distance schematic - not to scale"
        />
        <div className="location-map__pin" aria-hidden="true"><span /></div>
        <div className="location-map__address">
          <span>Project address</span>
          <strong>{siteContent.location.address}</strong>
        </div>
      </div>

      <div className="location-information">
        <div className="location-tabs" role="tablist" aria-label="Location information categories">
          {siteContent.location.groups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={group.id === activeId}
              aria-controls="location-panel"
              className={group.id === activeId ? "is-active" : ""}
              onClick={() => setActiveId(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            id="location-panel"
            role="tabpanel"
            className="location-panel"
            key={activeGroup.id}
            initial={reduceMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="location-panel__eyebrow">{activeGroup.label}</p>
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
            <div className="location-points">
              {activeGroup.points.map((point, index) => {
                const Icon = pointIcons[activeGroup.id]?.[index] ?? MapPinned;
                return (
                  <article key={point.name}>
                    <span className="location-point-icon" aria-hidden="true">
                      <Icon size={15} strokeWidth={1.8} />
                    </span>
                    <div><strong>{point.name}</strong><span>{point.note}</span></div>
                    <b>{point.value}</b>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <LeadTrigger className="button button--primary location-cta" intent="Schedule a free project site visit">
          <span>Schedule site visit</span><ArrowUpRight size={15} aria-hidden="true" />
        </LeadTrigger>
      </div>
    </div>
  );
}
