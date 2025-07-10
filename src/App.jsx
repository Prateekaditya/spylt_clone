import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./section/HeroSection";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./section/MessageSection";
import Flavour from "./section/Flavour";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <Flavour />
          <div className="h-dvh border-2 bg-yellow-400"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
