"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Leaf, Trophy, UsersRound, Waves, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { siteContent } from "@/data/site-content";

const amenityImages: Record<string, string> = {
  wellness: "/images/concept/amenity-wellness-concept.webp",
  sport: "/images/concept/amenity-sport-concept.webp",
  family: "/images/concept/amenity-family-concept.webp",
  landscape: "/images/concept/amenity-landscape-concept.webp",
};

const amenityIcons: Record<string, LucideIcon> = {
  wellness: Waves,
  sport: Trophy,
  family: UsersRound,
  landscape: Leaf,
};

export function AmenitiesExplorer() {
  const [activeId, setActiveId] = useState<string>(siteContent.amenityGroups[0].id);
  const reduceMotion = useReducedMotion();
  const activeGroup = siteContent.amenityGroups.find((group) => group.id === activeId) ?? siteContent.amenityGroups[0];

  return (
    <div className="amenities-explorer">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          id="amenity-panel"
          role="tabpanel"
          className="amenity-panel"
          key={activeGroup.id}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="amenity-panel__visual">
            <ProjectMedia
              className="amenity-panel__media"
              src={amenityImages[activeGroup.id]}
              alt={`Conceptual ${activeGroup.label.toLowerCase()} amenity setting`}
            />
            <span>{activeGroup.label} collection</span>
          </div>

          <div className="amenity-panel__content">
            <div className="amenity-tabs" role="tablist" aria-label="Amenity categories">
              {siteContent.amenityGroups.map((group) => {
                const Icon = amenityIcons[group.id] ?? Leaf;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={group.id === activeId}
                    aria-controls="amenity-panel"
                    className={group.id === activeId ? "is-active" : ""}
                    onClick={() => setActiveId(group.id)}
                  >
                    <Icon size={15} strokeWidth={1.8} aria-hidden="true" />{group.label}
                  </button>
                );
              })}
            </div>
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
            <ul>
              {activeGroup.amenities.map((amenity) => {
                const Icon = amenityIcons[activeGroup.id] ?? Leaf;
                return (
                  <li key={amenity}>
                    <span aria-hidden="true"><Icon size={15} strokeWidth={1.8} /></span>
                    {amenity}
                  </li>
                );
              })}
            </ul>
            <LeadTrigger className="amenity-text-cta" intent="Get complete amenity details">
              <span>Request amenity details</span><ArrowUpRight size={15} aria-hidden="true" />
            </LeadTrigger>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
