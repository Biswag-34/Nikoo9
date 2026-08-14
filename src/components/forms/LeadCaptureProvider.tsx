"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LeadForm } from "./LeadForm";

type LeadContextValue = {
  openLeadForm: (intent?: string) => void;
  closeLeadForm: () => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState("Get latest price sheet");

  const openLeadForm = (nextIntent = "Get latest price sheet") => {
    setIntent(nextIntent);
    setIsOpen(true);
  };
  const closeLeadForm = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <LeadContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div className="lead-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
            <button className="lead-modal__backdrop" aria-label="Close enquiry form" onClick={closeLeadForm} />
            <motion.div className="lead-modal__sheet" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              <button className="lead-modal__close" onClick={closeLeadForm} aria-label="Close enquiry form" autoFocus>×</button>
              <LeadForm title={intent} compact />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LeadContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadContext);
  if (!context) throw new Error("useLeadCapture must be used inside LeadCaptureProvider");
  return context;
}

export function LeadTrigger({ children, intent, className = "" }: { children: ReactNode; intent?: string; className?: string }) {
  const { openLeadForm } = useLeadCapture();
  return <button type="button" className={className} onClick={() => openLeadForm(intent)}>{children}</button>;
}
