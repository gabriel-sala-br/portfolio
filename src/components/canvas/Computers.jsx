import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "./config";
import Avatar from "./Avatar";
import { Office } from "./Office";
import { OrbitControls } from "@react-three/drei";

const ComputersCanvas = (props) => {
  const { section } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, []);

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // const { viewport } = useThree();

  return (
    <>
      <ambientLight intensity={1} />
      {/* <Computers isMobile={isMobile} /> */}
      <motion.group
        position={[0, 2, 0]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <Office />
        <group
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        >
          <Avatar animation={section === 0 ? "Falling" : "Typing"} />
        </group>
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>

      {/* <Preload all /> */}
    </>
  );
};

export default ComputersCanvas;
