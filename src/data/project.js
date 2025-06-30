export const TechStack = Object.freeze({
  HTML: { name: "HTML", color: "#FFB3B3" },
  CSS: { name: "CSS", color: "#B2F0E6" },
  SCSS: { name: "SASS/SCSS", color: "#C5B3FF" },
  TAILWIND: { name: "Tailwind CSS", color: "#A7DBF7" },
  JAVASCRIPT: { name: "JavaScript", color: "#FFEF9F" },
  ASTRO: { name: "Astro", color: "#FFD0B3" },
  MDX: { name: "MDX", color: "#A7F7D1" },
  FIGMA: { name: "Figma", color: "#DCC6FF" },
  REACT: { name: "React", color: "#C3F3FF" },
  REACT_ROUTER: { name: "React Router", color: "#FFB5C5" },
  FRAMER_MOTION: { name: "Framer Motion", color: "#FFB3E9" },
  EXPRESS: { name: "Express", color: "#B3E6FF" },
  NODE: { name: "Node.js", color: "#C1E1C1" },
});

export const projects = [
  {
    id: "project-1",
    title: "Portfolio",
    summary: "Showcase portfolio site built with Astro and vanilla JS",
    description: [
      "My portfolio is a thoughtfully crafted web showcase built with Astro for a static site generation framework, leveraging vanilla HTML, CSS, and JavaScript for a lightweight and customizable structure, View Transitions for smooth page animations, and Markdown for dynamic content management. Designed with a responsive and adaptive style using CSS, it adapts seamlessly across devices, from desktops to mobiles, ensuring an optimal viewing experience. This project highlights a blend of modern web development practices, emphasizing good adaptive design, while serving as a professional platform to display my projects, skills, and creative works. p.s. I would probably transition this project to React with React Router to handle even better client side interactions and transitions. Also, I will add more robust routing especially on desktop tabs",
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
    title: "DoNote",
    summary: "Note-taking app using React, Tailwind, View Transitions",
    description: [
      "Donote is a sleek note-taking web application built with React for a dynamic user interface, React Router for seamless navigation, View Transitions for smooth page animations, Tailwind CSS for a responsive and stylish design, and local storage for offline data persistence. This project offers an intuitive experience where users can create, edit, and delete notes with real-time updates, navigate effortlessly between views, and enjoy a polished look across devices, all without requiring a backend server. Highlighting modern frontend techniques, Donote serves as a lightweight, standalone tool with potential for future enhancements like cloud synchronization, authentication and accessibility features.",
    ],
    src: "/images/donote.png",
    category: "projects",
    stack: [
      TechStack.REACT,
      TechStack.TAILWIND,
      TechStack.REACT_ROUTER,
      TechStack.FIGMA,
    ],
  },
  {
    id: "project-3",
    title: "Foodie AI",
    summary: "Web app analyzes meal photos with Gemini AI in React",
    description: [
      "Foodie AI is a collaborative web application developed with a friend, utilizing React for a dynamic frontend, React Router with the newer createBrowserRouter for efficient navigation, the Gemini API for advanced photo analysis, and Framer Motion for engaging animations. This innovative tool allows users to upload a meal photo, which Gemini analyzes to provide detailed insights including benefits, outcomes, ingredients, and nutrients. My contributions included organizing and refining styling, refactoring CSS to resolve responsive layout issues, enhancing animations and user interactions, simplifying JSX by reducing div containers for a more intuitive structure, converting global CSS to modular CSS files with a maintainable filing system for easier access and scalability, and refactoring routing to leverage modern createBrowserRouter, making Foodie AI a user-friendly and efficiently structured resource for food enthusiasts.",
    ],
    src: "/images/project-2.jpg",
    category: "projects",
    stack: [
      TechStack.REACT,
      TechStack.REACT_ROUTER,
      TechStack.FRAMER_MOTION,
      TechStack.EXPRESS,
      TechStack.NODE,
      TechStack.CSS,
    ],
  },
  {
    id: "project-4",
    title: "Tip Calculator",
    summary: "Tip calculator with SCSS, ES6 modules, responsive UI",
    description: [
      "The Tip Calculator is a fun little project I tackled from a Frontend Mentor challenge, where I built a handy tool to figure out tips based on your bill and how good the service was. I used HTML to set up the structure, SCSS/SASS to style it with a clean and flexible look, ES6 modules to keep my JavaScript nice and organized, and plain JavaScript to make it all work smoothly with real-time feedback for users. I really enjoyed crafting a responsive design that’s easy to use, and it turned out to be a solid way to show off my frontend skills while meeting the challenge’s goals!",
    ],
    src: "/images/project-1.jpg",
    category: "projects",
    stack: [
      TechStack.HTML,
      TechStack.CSS,
      TechStack.JAVASCRIPT,
      TechStack.SCSS,
      TechStack.FIGMA,
    ],
  },

  {
    id: "project-5",
    title: "Meet Landing Page",
    summary: "Landing page project using HTML, CSS Grid, Flexbox",
    description: [
      "The Meet Landing Page is a project I built from the ground up (Frontend Mentor), using Semantic HTML5 markup to create a well-structured and accessible foundation, CSS custom properties for easy theme management, Grid for dynamic layouts, Flexbox for flexible component alignment, and Media Queries to ensure it looks great on all screen sizes. Through this project, I dove deeper into mastering CSS Grid and Flexbox for adaptive layouts, got the hang of utility class flows, and honed my skills with media queries and positioning—especially for larger desktop screens",
    ],
    src: "/images/project-1.jpg",
    category: "projects",
    stack: [TechStack.HTML, TechStack.CSS, TechStack.JAVASCRIPT],
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
