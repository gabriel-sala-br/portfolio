import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = (props) => {
  const { section } = props;
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#019CC9]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#019CC9]">Gabriel Sala</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Web Developer
          </p>
        </div>
      </div>
      <Canvas
        // frameloop="demand"
        shadows
        // dpr={[1, 2]}
        camera={{ position: [0, 2, 10], fov: 15 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <ComputersCanvas section={section} />
      </Canvas>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};

export default Hero;
