"use client";

import { useMemo, useState } from "react";

const asset = (path: string) => `/assets/${path}`;

const apartments = [
  {
    name: "Studio",
    cardDesktop: asset("desktop/apartment-cards/01-studio-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/01-studio-900x560.png"),
    feature: asset("desktop/apartment-feature/01-studio-900x1300.png"),
  },
  {
    name: "1 Bed",
    cardDesktop: asset("desktop/apartment-cards/02-1-bed-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/02-1-bed-900x560.png"),
    feature: asset("desktop/apartment-feature/02-1-bed-900x1300.png"),
  },
  {
    name: "1 Bed + Study",
    cardDesktop: asset("desktop/apartment-cards/03-1-bed-study-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/03-1-bed-study-900x560.png"),
    feature: asset("desktop/apartment-feature/03-1-bed-study-900x1300.png"),
  },
  {
    name: "2 Bed",
    cardDesktop: asset("desktop/apartment-cards/04-2-bed-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/04-2-bed-900x560.png"),
    feature: asset("desktop/apartment-feature/04-2-bed-900x1300.png"),
  },
  {
    name: "2 Bed + Study",
    cardDesktop: asset("desktop/apartment-cards/05-2-bed-study-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/05-2-bed-study-900x560.png"),
    feature: asset("desktop/apartment-feature/05-2-bed-study-900x1300.png"),
  },
  {
    name: "3 Bed",
    cardDesktop: asset("desktop/apartment-cards/06-3-bed-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/06-3-bed-900x560.png"),
    feature: asset("desktop/apartment-feature/06-3-bed-900x1300.png"),
  },
  {
    name: "3 Bed + Study",
    cardDesktop: asset("desktop/apartment-cards/07-3-bed-study-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/07-3-bed-study-900x560.png"),
    feature: asset("desktop/apartment-feature/07-3-bed-study-900x1300.png"),
  },
  {
    name: "3 Bed Loft",
    cardDesktop: asset("desktop/apartment-cards/08-3-bed-loft-900x360.png"),
    cardMobile: asset("mobile/apartment-cards/08-3-bed-loft-900x560.png"),
    feature: asset("desktop/apartment-feature/08-3-bed-loft-900x1300.png"),
  },
];

const amenityCategories = ["All", "Wellness", "Leisure", "Sports", "Community"] as const;

type AmenityCategory = (typeof amenityCategories)[number];
type AmenityIcon = "pool" | "clubhouse" | "garden" | "play" | "gym" | "track" | "court" | "lounge";

const amenities: Array<{
  name: string;
  category: Exclude<AmenityCategory, "All">;
  icon: AmenityIcon;
  image: string;
}> = [
  {
    name: "Swimming Pool",
    category: "Wellness",
    icon: "pool",
    image: asset("desktop/amenities/01-swimming-pool-1600x900.png"),
  },
  {
    name: "Botanical Clubhouse",
    category: "Community",
    icon: "clubhouse",
    image: asset("desktop/amenities/02-botanical-clubhouse-1200x900.png"),
  },
  {
    name: "Landscape Gardens",
    category: "Leisure",
    icon: "garden",
    image: asset("desktop/amenities/03-landscape-garden-1200x900.png"),
  },
  {
    name: "Kids' Play Area",
    category: "Community",
    icon: "play",
    image: asset("desktop/amenities/04-kids-play-area-1200x900.png"),
  },
  {
    name: "Gymnasium",
    category: "Wellness",
    icon: "gym",
    image: asset("desktop/amenities/02-botanical-clubhouse-1200x900.png"),
  },
  {
    name: "Jogging Track",
    category: "Sports",
    icon: "track",
    image: asset("desktop/amenities/03-landscape-garden-1200x900.png"),
  },
  {
    name: "Multi-use Court",
    category: "Sports",
    icon: "court",
    image: asset("desktop/amenities/04-kids-play-area-1200x900.png"),
  },
  {
    name: "Outdoor Lounges",
    category: "Leisure",
    icon: "lounge",
    image: asset("desktop/amenities/01-swimming-pool-1600x900.png"),
  },
];

function AmenityIconGraphic({ type }: { type: AmenityIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (type === "pool") {
    return (
      <svg {...common}>
        <path d="M4 15c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
        <path d="M4 19c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
        <path d="M8 12V5a3 3 0 0 1 6 0" />
        <path d="M8 8h8" />
      </svg>
    );
  }

  if (type === "clubhouse") {
    return (
      <svg {...common}>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M8 20v-7h8v7" />
        <path d="M10 9h4" />
      </svg>
    );
  }

  if (type === "garden") {
    return (
      <svg {...common}>
        <path d="M12 20V9" />
        <path d="M12 10c-4 0-6-2-6-6 4 0 6 2 6 6Z" />
        <path d="M12 13c4 0 6-2 6-6-4 0-6 2-6 6Z" />
        <path d="M6 20h12" />
      </svg>
    );
  }

  if (type === "play") {
    return (
      <svg {...common}>
        <path d="M5 20 12 4l7 16" />
        <path d="M8 13h8" />
        <path d="M10 13v4a2 2 0 0 0 4 0v-4" />
      </svg>
    );
  }

  if (type === "gym") {
    return (
      <svg {...common}>
        <path d="M4 9v6" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M20 9v6" />
        <path d="M4 12h16" />
      </svg>
    );
  }

  if (type === "track") {
    return (
      <svg {...common}>
        <path d="M17 5a5 5 0 0 1 0 10H8a3 3 0 0 0 0 6h8" />
        <path d="M15 9h2" />
        <path d="M6 18h2" />
      </svg>
    );
  }

  if (type === "court") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M12 5v14" />
        <path d="M4 12h16" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 14h14" />
      <path d="M7 14v4" />
      <path d="M17 14v4" />
      <path d="M8 14V9a4 4 0 0 1 8 0v5" />
      <path d="M6 18h12" />
    </svg>
  );
}

export function ConfigurationsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = apartments[selectedIndex];

  return (
    <section id="configurations" className="config-section wrapper">
      <div className="section-heading">
        <p>Homes that fit your life</p>
        <h1>Choose what feels right.</h1>
      </div>
      <div className="config-layout">
        <div className="feature-home-frame" aria-live="polite">
          <img
            key={selected.name}
            className="feature-home"
            src={selected.feature}
            alt={`${selected.name} apartment interior feature`}
          />
        </div>
        <div className="apartment-grid" aria-label="Apartment configurations">
          {apartments.map((home, index) => (
            <button
              className="apartment-card"
              data-selected={index === selectedIndex ? "true" : undefined}
              type="button"
              key={home.name}
              onPointerDown={() => setSelectedIndex(index)}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={index === selectedIndex}
            >
              <picture>
                <source media="(max-width: 720px)" srcSet={home.cardMobile} />
                <img src={home.cardDesktop} alt={`${home.name} configuration`} />
              </picture>
            </button>
          ))}
        </div>
      </div>
      <a className="outline-button" href="#register">
        Explore configurations <span aria-hidden="true">›</span>
      </a>
    </section>
  );
}

export function AmenitiesSection() {
  const [activeCategory, setActiveCategory] = useState<AmenityCategory>("All");
  const filteredAmenities = useMemo(
    () =>
      activeCategory === "All"
        ? amenities
        : amenities.filter((amenity) => amenity.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="amenities" className="amenities-section wrapper">
      <div className="amenity-copy">
        <p>Homes-style amenities</p>
        <h1>Everyday feels like a getaway.</h1>
        <div className="filter-pills" aria-label="Amenity filters">
          {amenityCategories.map((category) => (
            <button
              className={category === activeCategory ? "active" : ""}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={category === activeCategory}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="amenity-content" key={`amenities-${activeCategory}`}>
        <div className="amenity-strip">
          {filteredAmenities.map((amenity) => (
            <article key={amenity.name}>
              <span className="amenity-icon" aria-hidden="true">
                <AmenityIconGraphic type={amenity.icon} />
              </span>
              <strong>{amenity.name}</strong>
            </article>
          ))}
        </div>

        <div className="amenity-gallery">
          {filteredAmenities.slice(0, 4).map((amenity, index) => (
            <article className={index === 0 ? "amenity-photo feature" : "amenity-photo"} key={amenity.name}>
              <img src={amenity.image} alt={amenity.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}