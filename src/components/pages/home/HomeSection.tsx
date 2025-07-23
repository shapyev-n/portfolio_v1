"use client";

import React from "react";
import scss from "./HomeSection.module.scss";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";

const url = "/";
const url_contact = "#contacts";

export default function HomeSection() {
  const activeSection = useActiveSection(["contacts"]);

  return (
    <div className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <h3>Hi, my name is</h3>
          <div>
            <h1>Nuridin Shapyev</h1>
            <h2>FRONT-END Developer</h2>
          </div>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products in
            <Link href={url}>Kyrgyzstan</Link>.
          </p>
            <button>
          <a
            href={url_contact}
            className={`${scss.link} ${
              activeSection === "contacts" ? scss.active : ""
            }`}
          >
              contact
          </a>
              </button>
        </div>
      </div>
    </div>
  );
}
