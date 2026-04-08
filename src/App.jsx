import React from "react";
import { GradientGlow } from "./components/GradientGlow.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Footer } from "./sections/Footer.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Skills } from "./sections/Skills.jsx";

function App() {
  return (
    <div className="min-h-dvh">
      <GradientGlow />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
