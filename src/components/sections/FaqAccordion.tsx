"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { siteContent } from "@/data/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  return (
    <div className="faq-list">
      {siteContent.faqs.map((faq, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index}`;
        return (
          <article className={`faq-item ${open ? "is-open" : ""}`} key={faq.question}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={answerId} onClick={() => setOpenIndex(open ? null : index)}>
                <span>{faq.question}</span><b aria-hidden="true">{open ? "−" : "+"}</b>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={answerId}
                  className="faq-answer"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
