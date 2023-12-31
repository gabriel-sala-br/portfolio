import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
  Avatar,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <Canvas
          shadows
          style={{ height: 500 }}
          camera={{ position: [0, 2, 5], fov: 40 }}
        >
          {/* <color attach="background" args={["#ececec"]} /> */}
          <OrbitControls />
          <Avatar />
          <ambientLight intensity={1} />
        </Canvas>

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
    </BrowserRouter>
  );
};

export default App;
