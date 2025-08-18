import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";

import Navbar from "../components/Navbar";
import HomeSection from "../components/sections/HomeSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectSection from "../components/sections/ProjectSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HomeSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
