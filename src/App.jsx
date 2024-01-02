import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { framerMotionConfig } from "./components/canvas/config";
import { Leva, useControls } from "leva";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <BrowserRouter>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />

            <Hero section={section} />
          </div>

          <About />
          <Experience />
          <Tech />

          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </MotionConfig>
      <Leva hidden />
    </BrowserRouter>
  );
};

export default App;
