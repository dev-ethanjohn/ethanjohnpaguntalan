export const TechStack = Object.freeze({
  HTML: { name: "HTML", color: "#FFB3B3" },
  CSS: { name: "CSS", color: "#B2F0E6" },
  SCSS: { name: "SASS/SCSS", color: "#C5B3FF" },
  TAILWIND: { name: "TAILWIND", color: "#A7DBF7" },
  JAVASCRIPT: { name: "JavaScript", color: "#FFEF9F" },
  ASTRO: { name: "Astro", color: "#FFD0B3" },
  MDX: { name: "MDX", color: "#A7F7D1" },
  FIGMA: { name: "Figma", color: "#DCC6FF" },
  REACT: { name: "React", color: "#C3F3FF" },
  REACT_ROUTER: { name: "React Router", color: "#FFB5C5" },
  FRAMER_MOTION: { name: "Framer Motion", color: "#FFB3E9" },
});

export const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta error ex non inventore nam quas eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
      "as eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
    ],
    src: "/images/project-1.jpg",
    category: "projects",
    stack: [
      TechStack.HTML,
      TechStack.CSS,
      TechStack.JAVASCRIPT,
      TechStack.ASTRO,
      TechStack.FIGMA,
      TechStack.MDX,
    ],
  },
  {
    id: "project-2",
    title: "Project Two",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta error ex non inventore nam quas eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
      "as eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
    ],
    src: "/images/project-2.jpg",
    category: "projects",
    stack: [
      TechStack.HTML,
      TechStack.CSS,
      TechStack.JAVASCRIPT,
      TechStack.ASTRO,
      TechStack.MDX,
      TechStack.SCSS,
    ],
  },
  {
    id: "project-3",
    title: "Project Three",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta error ex non inventore nam quas eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
      "as eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
    ],
    src: "/images/project-2.jpg",
    category: "projects",
    stack: [
      TechStack.HTML,
      TechStack.CSS,
      TechStack.JAVASCRIPT,
      TechStack.ASTRO,
      TechStack.MDX,
      TechStack.SCSS,
    ],
  },
  {
    id: "project-4",
    title: "Project Four",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta error ex non inventore nam quas eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
      "as eius earum ipsum provident, similique omnis harum iusto nostrum quis. Vero impedit sequi vel.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus vero quaerat enim perferendis voluptatum dolorem nulla incidunt facilis cum, debitis fugiat vel earum eaque, dicta sed minima! Doloremque, eos.",
    ],
    src: "/images/project-1.jpg",
    category: "projects",
    stack: [
      TechStack.HTML,
      TechStack.CSS,
      TechStack.JAVASCRIPT,
      TechStack.ASTRO,
      TechStack.MDX,
      TechStack.SCSS,
    ],
  },
];

// export const imageList = projects.map((project) => ({
//   id: project.id,
//   title: project.title,
//   src: project.src,
//   category: project.category,
//   description: project.description,
//   stack: project.stack,
// }));
