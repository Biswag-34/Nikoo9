"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import { LeadTrigger } from "@/components/forms/LeadCaptureProvider";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="brand-mark" href="#overview" aria-label="Nikoo Homes 9 home">
          <span className="nikoo-wordmark"><strong>nikoo</strong><b>9</b><small>homes</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <LeadTrigger className="button button--primary button--small header-cta" intent="Get the latest price sheet">
          <span>Get price sheet</span><ArrowUpRight size={14} aria-hidden="true" />
        </LeadTrigger>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </Container>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Container>{siteContent.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
