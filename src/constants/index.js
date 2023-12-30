import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  reduxSaga,
  bootstrap,
  tailwind,
  materialUI,
  php,
  nodejs,
  mongodb,
  mysql,
  git,
  githubtech,
  figma,
  docker,
  storybook,
  lenovo,
  freelance,
  ibm,
  bluecore,
  carrent,
  jobit,
  tripguide,
  threejs,
  jest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Redux Saga",
    icon: reduxSaga,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialUI,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubtech,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "November 2019 - Present",
    points: [
      "I worked as a freelancer for 4 years on various projects in both web and mobile applications, primarily using React and React Native.",
      "I was responsible for developing application interfaces, ensuring enhanced usability and aesthetics.",
      "I actively participated in integration projects between major telecommunications companies in Brazil and worked on creating institutional websites focused on small businesses. This experience provided me with a solid understanding of the diverse business needs, as well as the ability to create efficient and attractive digital solutions.",
      "Collaborated with cross-functional teams on integration projects for major Brazilian telecommunications companies, ensuring seamless connectivity and functionality.",
      "Regularly communicated with clients to understand their requirements, gather feedback, and make necessary adjustments to the application.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "June 2018 - October 2019",
    points: [
      "I worked at IBM for 1 year and 5 months, focusing on developing new features and migrating an English student web app from Mootools library to React.",
      "I was also responsible for developing • a mobile version of this web app using React Native to enhance the support for students.",
      "In addition, I participated in the development of an IBM asset tracking system.",
      "Contributed to a HR project for visitors, enhancing user experience and functionality.",
      "Collaborated with other software developers on design, development and testing of programs.",
      "Participated in code reviews, providing constructive feedback and ensuring adherence to coding standards and best practices.",
      "Engaged in debugging and troubleshooting software defects, identifying root causes and implementing effective solutions to fix them.",
      "Assisted in the maintenance and enhancement of existing software applications, addressing customer feedback and implementing new features.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bluecore",
    icon: bluecore,
    iconBg: "#E6DEDD",
    date: "December 2017 - April 2018",
    points: [
      "I worked at Bluecore, where I was involved in developing new features for the company's intranet application and providing support for legacy systems.",
      "I worked in the team giving assistance for two large retail networks in Brazil specializing in construction materials, renovations, decorations, and gardening. My role included enhancing the intranet platform and ensuring the smooth operation of the existing systems used by these major retailers.",
      "Developed responsive web applications using modern React to create intuitive and visually appealing user interfaces.",
      "Collaborated with the UX/UI team to ensure seamless integration of design elements and provided feedback on user interface enhancements.",
    ],
  },
  {
    title: "Systems Engineering Assistant",
    company_name: "Lenovo",
    icon: lenovo,
    iconBg: "#E6DEDD",
    date: "October 2013 - September 2017",
    points: [
      "I worked at Lenovo for approximately 4 years, where I had the opportunity to be involved in various internal company projects. These included migrating a system from ASP to PHP, improving the performance of legacy systems, and developing a label identification system.",
      "Encompassed both enhancing existing technologies and introducing new solutions to streamline and optimize operational processes.",
      "Assisted the systems engineering team in designing, testing, and troubleshooting hardware and software solutions.",
      "Developed responsive Intranet webpages using JavaScript, jQuery, PHP, MySQL, HTML5, and CSS3, focusing on ensuring responsiveness. With these skills, I was able to create dynamic and user-friendly Intranet webpages that met project requirements and industry standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the privilege of being able to follow the first steps of Gabriel's journey at IBM and his strength and determination are references as well as his ability to learn new things. All these soft skills together differentiate him to contribute in a unique way to the company's success and customers!",
    name: "Armando Luís de Oliveira",
    designation: "IT Senior Manager",
    image:
      "https://media.licdn.com/dms/image/C4D03AQG_1GHtugMZVA/profile-displayphoto-shrink_100_100/0/1556563110252?e=1709164800&v=beta&t=RY4e1WyOVeEKzNMPlO8xDDs_9TkNNWlk3fBk5EeSgco",
  },
  {
    testimonial:
      "Gabriel is a committed professional engaged to the business purpose, sick for learning and development of new skills, aligned with his career plans and with the organization strategy. Gabriel is an ethic person who carries strong values and applies it in his daily work. He is also a very good partner, he knows to work as a team and contributes to the team's sinergy. I had the great pleasure to work with Gabriel, who is always smiling... I highly recommend! =)",
    name: "Leandro Matto",
    designation: "Diretor Comercial",
    image:
      "https://media.licdn.com/dms/image/C4D03AQE8xfMz0Q3t7g/profile-displayphoto-shrink_100_100/0/1643804417729?e=1709164800&v=beta&t=9Hu8ZpeqwItFMDAAU9yYnLSu0Fu6DXdvNgKr6Oe20kM",
  },
  {
    testimonial:
      "Gabriel is a solution-focused professional with the ability to design and develop innovative applications using advanced technologies. We worked together on a challenging project that he was able to understand the current application code, to improve it and implement new features ensuring optimal functionality, quality, and reliability.",
    name: "Elaine C De Paula Furst",
    designation: "Project Manager",
    image:
      "https://media.licdn.com/dms/image/C4D03AQE9GAUKIqoF_w/profile-displayphoto-shrink_100_100/0/1599247467262?e=1709164800&v=beta&t=eLDJkp-ZhkBvEoNMvp9nOdFM_Iq61q0yPLrMdum2kAQ",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
