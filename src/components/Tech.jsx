import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const ITEMS_PER_PAGE = 6; // Exibir 6 itens por vez

const Tech = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(technologies.length / ITEMS_PER_PAGE);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Calcular o índice do primeiro e último item na página atual
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = technologies.slice(
    firstItemIndex,
    firstItemIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-10">
      <h2 className={`${styles.sectionHeadText}`}>Tech.</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4">
        <button className="slider-btn left" onClick={previousPage}>
          &lt;
        </button>
        <div className="flex md:flex-row flex-col gap-10 justify-center">
          {currentItems.map((technology) => (
            <div className="w-28 h-28 text-center" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p>{technology.name}</p>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
