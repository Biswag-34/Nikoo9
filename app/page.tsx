import type { Metadata } from "next";
import { AmenitiesSection, ConfigurationsSection } from "./interactive-sections";

const asset = (path: string) => `/assets/${path}`;

const uspCards = [
  {
    topic: "Where Opportunity Takes Off",
    text: "Live close to North Bengaluru’s emerging Aerospace and Hardware Park corridor, with New Airport Road approximately 200 metres away for convenient regional connectivity.",
    image: asset("desktop/usp/life-better/01-opportunity-corridor.png"),
  },
  {
    topic: "A Home for Every Chapter",
    text: "From efficient studios to spacious family apartments and distinctive lofts, choose from 8 thoughtfully planned home configurations designed around different stages of life.",
    image: asset("desktop/usp/life-better/02-home-for-every-chapter.png"),
  },
  {
    topic: "More Room for Life",
    text: "Spread across approximately 15 acres with only 8 residential towers, Nikoo 9 is planned to offer landscaped surroundings, comfortable movement and a greater sense of openness.",
    image: asset("desktop/usp/life-better/03-more-room-for-life.png"),
  },
  {
    topic: "Every Day Feels More Complete",
    text: "Discover 40+ lifestyle experiences spanning fitness, sports, leisure, wellness and community—bringing more ways to relax, connect and enjoy life within the campus.",
    image: asset("desktop/usp/life-better/04-everyday-complete.png"),
  },
  {
    topic: "The Nikoo Life, Within Reach",
    text: "Become part of Nikoo’s community-first lifestyle, with homes currently starting from approximately ₹62 lakh* and options suited to different aspirations and budgets.",
    image: asset("desktop/usp/life-better/05-nikoo-life-within-reach.png"),
  },
];

const apartmentOptions = [
  "Studio",
  "1 Bed",
  "1 Bed + Study",
  "2 Bed",
  "2 Bed + Study",
  "3 Bed",
  "3 Bed + Study",
  "3 Bed Loft",
];

const locationItems = [
  ["KIADB Aerospace SEZ", "1 min drive", "✈"],
  ["SAP Labs KIADB", "1 min drive", "▦"],
  ["Shell India KIADB", "3 min drive", "◉"],
  ["Kempegowda International Airport", "20 min drive", "✈"],
];

const mobileLocationItems = [
  ["RGA Tech Park", "5 min drive", "▣"],
  ["Wipro SEZ", "10 min drive", "⌘"],
  ["Outer Ring Road", "12 min drive", "═"],
  ["Bellandur", "15 min drive", "◆"],
  ["Sarjapur Road", "15 min drive", "↗"],
];

const faqs = [
  "What is the EOI window?",
  "When will the project launch?",
  "What are the payment options?",
  "Is RERA registered?",
];

export const metadata: Metadata = {
  title: "Nikoo Homes 9 | Expression of Interest",
  description:
    "Register your interest for Nikoo Homes 9, a new side of city living with resort-style amenities and thoughtful apartment configurations.",
};

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Nikoo Homes home">
      <span>nikoo</span>
      <small>Homes</small>
    </a>
  );
}

function FooterLogo() {
  return (
    <a className="footer-logo" href="#top" aria-label="Nikoo Homes home">
      <img src="/nikoo-homes-logo-red-2023.png" alt="Nikoo Homes" />
    </a>
  );
}

function EnquiryForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "enquiry-form compact" : "enquiry-form"}>
      {!compact && (
        <div className="form-heading">
          <h2>Be among the first.</h2>
          <p>Submit your details to get EOI priority.</p>
        </div>
      )}
      <label>
        <span>Full name</span>
        <input type="text" name="name" placeholder="Full name" />
      </label>
      <label>
        <span>Mobile number</span>
        <input type="tel" name="phone" placeholder="Mobile number" />
      </label>
      <label>
        <span>Email address</span>
        <input type="email" name="email" placeholder={compact ? "Email" : "Email address"} />
      </label>
      <label>
        <span>Preferred configuration</span>
        <select name="configuration" defaultValue="">
          <option value="" disabled>
            Preferred configuration
          </option>
          {apartmentOptions.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <button type="button">{compact ? "Register Now" : "Register EOI"}</button>
      <p className="privacy">
        <span aria-hidden="true">◇</span> Your data is secure and will not be shared.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <section className="hero" aria-label="Nikoo Homes 9">
        <div className="hero-nav">
          <Logo />
          <nav aria-label="Primary navigation">
            <a href="#overview">Project Overview</a>
            <a href="#configurations">Configurations</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#faqs">FAQs</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-menu-panel" role="navigation" aria-label="Mobile navigation">
              <div className="mobile-menu-brand">
                <Logo />
                <span>Menu</span>
              </div>
              <a href="#overview">Project Overview</a>
              <a href="#configurations">Configurations</a>
              <a href="#amenities">Amenities</a>
              <a href="#location">Location</a>
              <a href="#faqs">FAQs</a>
              <a className="mobile-menu-cta" href="#register">Register EOI</a>
            </div>
          </details>
        </div>

        <picture>
          <source
            media="(max-width: 720px)"
            srcSet={asset("mobile/hero/nikoo9-hero-mobile-new.png")}
          />
          <img
            className="hero-image"
            src={asset("desktop/hero/nikoo9-hero-desktop-new.png")}
            alt="Nikoo Homes 9 high-rise residences with headline and project highlights"
          />
        </picture>

        <div className="hero-card" aria-label="Register interest">
          <EnquiryForm />
        </div>
      </section>

      <section className="mobile-lead" aria-label="Mobile enquiry form">
        <div className="mobile-form-card">
          <EnquiryForm />
        </div>
      </section>

      <section id="overview" className="usp-section wrapper" aria-labelledby="usp-heading">
        <div className="usp-heading">
          <h1 id="usp-heading">Why Life Feels Better at Nikoo 9</h1>
          <p>
            Thoughtfully planned homes, meaningful experiences and a well-connected North Bengaluru
            address—brought together in one vibrant community.
          </p>
        </div>
        <div className="usp-cards">
          {uspCards.map((card, index) => (
            <article className="usp-card" key={card.topic}>
              <div className="usp-image">
                <img src={card.image} alt={card.topic} />
              </div>
              <div className="usp-card-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{card.topic}</h2>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConfigurationsSection />
      <AmenitiesSection />

      <section id="location" className="location-section wrapper">
        <div>
          <div className="section-heading">
            <p>Right in the heart of convenience</p>
            <h1>Connected to everything that matters.</h1>
          </div>
          <div className="map-card" aria-label="Nikoo Homes 9 location map">
            <div className="road road-one" />
            <div className="road road-two" />
            <div className="road road-three" />
            <div className="lake" />
            <div className="pin">
              <strong>nikoo</strong>
              <span>9</span>
            </div>
            <span className="map-label label-one">Sarjapur Road</span>
            <span className="map-label label-two">RGA Tech Park</span>
            <span className="map-label label-three">Bellandur</span>
          </div>
        </div>
        <div className="location-list">
          {locationItems.map(([place, time, icon]) => (
            <article key={place}>
              <span className="location-icon" aria-hidden="true">{icon}</span>
              <strong>{place}</strong>
              <em>{time}</em>
            </article>
          ))}
          <div className="mobile-location-extra">
            {mobileLocationItems.map(([place, time, icon]) => (
              <article key={place}>
                <span className="location-icon" aria-hidden="true">{icon}</span>
                <strong>{place}</strong>
                <em>{time}</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="faq-section wrapper">
        <div className="section-heading">
          <p>FAQs</p>
          <h1>
            <span className="desktop-only">Before you ask.</span>
            <span className="mobile-only">Everything you want to know.</span>
          </h1>
        </div>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <details key={question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{question}</strong>
                <i aria-hidden="true">⌄</i>
              </summary>
              <p>
                Registering keeps you updated and gives you priority access to launch
                information, availability, and next-step guidance from the Nikoo Homes team.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="register" className="final-cta wrapper">
        <div className="final-cta-copy">
          <h1>Your new side of city living awaits.</h1>
          <p>Register EOI and get priority access.</p>
        </div>
        <div className="final-cta-form">
          <EnquiryForm compact />
          <p className="cta-privacy">◇ Secure. Private. Yours.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main wrapper">
          <div className="footer-brand">
            <FooterLogo />
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#overview">Project Overview</a>
            <a href="#configurations">Configurations</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#faqs">FAQs</a>
            <a href="#register">Register EOI</a>
          </nav>
        </div>
        <div className="footer-bottom wrapper">
          <span>RERA: Registration awaited</span>
          <span>© 2025 Nikoo Homes. All rights reserved.</span>
        </div>
      </footer>

      <aside className="sticky-register" aria-label="Sticky register bar">
        <Logo />
        <strong>EOI window open. Register now!</strong>
        <a href="#register">Register EOI <span aria-hidden="true">›</span></a>
      </aside>
    </main>
  );
}