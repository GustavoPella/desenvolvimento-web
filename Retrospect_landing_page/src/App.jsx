// src/main.jsx

import { useState, useEffect } from "react";
import "./styles/global";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Challenges from "./components/Challenges";
import Vip from "./components/Vip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GLOBAL_CSS } from "./styles/global";
import { sans } from "../src/styles/global";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ ...sans, background: "#070c07", color: "#f0f0e8", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <Navbar
        scrolled={scrolled}
        onMenuOpen={() => setMenuOpen(true)}
        onScrollTo={scrollToSection}
      />

      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onScrollTo={scrollToSection}
      />

      <Hero onScrollTo={scrollToSection} />

      <Carousel />
      <Features />
      <Challenges />
      <Vip />
      <Contact />
      <Footer />
    </div>
  );
}