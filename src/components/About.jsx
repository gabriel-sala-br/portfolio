import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As an experienced React Developer/ Frontend Developer with a decade of
        expertise, I am committed about leveraging my skills to contribute
        significantly to a front-end development team. My background in React
        and React Native positions me as an ideal candidate for roles requiring
        these skills. My longstanding interest in technology and problem-solving
        has sharpened my abilities in JavaScript, allowing me to excel in
        creating user interfaces that are not only visually appealing but also
        highly functional. This skill enhances the overall performance of the
        apps I work on. In a professional setting, I am enthusiastic about
        collaborating with team members to ideate and develop user interface
        concepts that truly meet user requirements. My keen ability to
        understand user interaction with web apps aids me in designing and
        implementing effective UI components using React. Coding in JavaScript
        and resolving emerging issues is something I particularly enjoy, along
        with ensuring that our front-end designs align with innovative UI
        concepts. I am always on the lookout for methods to improve front-end
        efficiency and am skilled at updating applications and meticulously
        tracking changes. With an IT Management degree under my belt, my
        experience as a React.js Developer is complemented by a strong knowledge
        of JavaScript, CSS, HTML, and essential React tools like Webpack, and
        Redux. My experience also extends to user interface design and using
        testing tools such as Jest. I am adept at tackling challenging problems
        and proficient in managing projects. I am excited about the opportunity
        to bring my skills and enthusiasm to a new team. I am eager to
        contribute to enhancing app quality and elevating user experiences. I am
        looking forward to engaging in discussions about how I can be a valuable
        addition to a team and contribute to our shared success.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
