"use client";
import React from "react";
import AboutPage from "../about/AboutPage";
import HomeSection from "./HomeSection";
import ContactSection from "../contact/ContactSection";
import ProjectSection from "../projects/ProjectSection";
import SkillSection from "../skills/SkillSection";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutPage />
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
    </>
  );
}
