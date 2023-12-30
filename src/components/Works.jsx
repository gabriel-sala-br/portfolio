import React, { useState, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PAGE_SIZE = 3;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(projects.length / PAGE_SIZE);
  const firstProjectRef = useRef(null);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    firstProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      navigateToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPage) {
      navigateToPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const selectedProjects = projects.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div
        ref={firstProjectRef}
        className="mt-20 flex flex-col md:flex-row items-center justify-center relative"
      >
        <button
          onClick={handlePrevious}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 md:absolute md:left-0 mx-0 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          {`<`}
        </button>

        <div className="flex md:flex-nowrap flex-wrap gap-6">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 md:absolute md:right-0 mx-0 disabled:opacity-50"
          disabled={currentPage === maxPage}
        >
          {`>`}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
