// src/data/projects.js
export const projects = [
  {
    id: "project-1",
    title: "Project One",
    description: "A cool project",
    src: "/images/project-1.jpg",
    category: "projects",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "Another awesome project",
    src: "/images/project-2.jpg",
    category: "projects",
  },
];

export const imageList = projects.map((project) => ({
  id: project.id,
  title: project.title,
  src: project.src,
  category: project.category,
  description: project.description,
}));
