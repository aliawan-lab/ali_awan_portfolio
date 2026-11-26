"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import type { GeoLocation } from "@/components/ui/LeafletMap";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
});

type SiteCategory = "Career & Academic" | "Research" | "Field Visits";

type Site = {
  name: string;
  lat: number;
  lng: number;
  category: SiteCategory;
  desc: string;
};

const locations: Site[] = [
  // ---------------- Career & Academic (7) ----------------
  {
    name: "PMAS-Arid Agriculture University, Rawalpindi",
    lat: 33.6458,
    lng: 73.0828,
    category: "Career & Academic",
    desc: "BS Forestry (2015 - 2019)",
  },
  {
    name: "NUST, Islamabad",
    lat: 33.6426,
    lng: 72.9917,
    category: "Career & Academic",
    desc: "MS Remote Sensing & GIS · Research Assistant, IGIS NUST (2020 - 2022)",
  },
  {
    name: "Galaxy Space, Beijing, China",
    lat: 39.984,
    lng: 116.31,
    category: "Career & Academic",
    desc: "Synthetic Aperture Radar Analysis and AI Applications",
  },
  {
    name: "PropSure Digital Solution, Islamabad",
    lat: 33.6785,
    lng: 73.014,
    category: "Career & Academic",
    desc: "Assistant GIS Analyst (Urban Planner) (3 Sep 2020 - 10 Jul 2021)",
  },
  {
    name: "Government of Pakistan (MOD), Rawalpindi",
    lat: 33.596,
    lng: 73.052,
    category: "Career & Academic",
    desc: "Senior GIS Analyst (1 Aug 2021 - 20 Apr 2024)",
  },
  {
    name: "Leaf Global Environmental Services, Jeddah, Saudi Arabia",
    lat: 21.5433,
    lng: 39.1728,
    category: "Career & Academic",
    desc: "GIS Analyst (15 Jun 2024 - 31 Aug 2026)",
  },
  {
    name: "Hanmi Global MENA, Riyadh, Saudi Arabia",
    lat: 24.7114,
    lng: 46.6744,
    category: "Career & Academic",
    desc: "GIS-CAD Specialist (1 Oct 2026 - Present)",
  },

  // ---------------- Research (2) ----------------
  {
    name: "Abbottabad Division",
    lat: 34.1688,
    lng: 73.2215,
    category: "Research",
    desc: "Modeling Deforestation Trends",
  },
  {
    name: "Lahore Division",
    lat: 31.5204,
    lng: 74.3587,
    category: "Research",
    desc: "PM10 & PM2.5 Impact on Population",
  },

  // ---------------- Field Visits (5) ----------------
  {
    name: "Murree Forest Academy",
    lat: 33.907,
    lng: 73.3943,
    category: "Field Visits",
    desc: "Forest Evaluation, Identify 3D Trees",
  },
  {
    name: "Naran Forest",
    lat: 34.9055,
    lng: 73.6507,
    category: "Field Visits",
    desc: "Forest Inventory, Management Practices, Density Measurement",
  },
  {
    name: "Changa Manga Forest, Kasur, Punjab",
    lat: 31.087,
    lng: 73.973,
    category: "Field Visits",
    desc: "Nursery Management, Tree Identification, Lab Testing",
  },
  {
    name: "Nathiagali",
    lat: 34.0714,
    lng: 73.382,
    category: "Field Visits",
    desc: "Forest Fire Assessment, Linear Plantation BTP Survey",
  },
  {
    name: "Hunza Valley",
    lat: 36.3167,
    lng: 74.65,
    category: "Field Visits",
    desc: "Extinct Species Identification, Soil Condition Monitoring",
  },
];

const CATEGORIES: ("All Sites" | SiteCategory)[] = [
  "All Sites",
  "Career & Academic",
  "Research",
  "Field Visits",
];

const Locations = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "All Sites" | SiteCategory
  >("All Sites");

  const filteredLocations = useMemo(() => {
    if (selectedCategory === "All Sites") return locations;
    return locations.filter((loc) => loc.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div id="locations" className="py-20 w-full">
      <h1 className="heading">
         <span className="text-purple">Contributions Across Geographies</span>
      </h1>
      <p className="text-center text-white-200 text-sm md:text-base mt-3 max-w-2xl mx-auto">
        An interactive topographic map showcasing contribution locations across Borders,
         spanning my professional, academic, research and field experiences.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
        {CATEGORIES.map((category) => {
          const count =
            category === "All Sites"
              ? locations.length
              : locations.filter((l) => l.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                isActive
                  ? "bg-purple text-slate-950 border-purple shadow-md shadow-purple/25"
                  : "bg-black-200/70 text-white-200 border-white/[0.1] hover:border-white/[0.3] hover:text-white"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <LeafletMap locations={filteredLocations as unknown as GeoLocation[]} />
      </div>
    </div>
  );
};

export default Locations;
