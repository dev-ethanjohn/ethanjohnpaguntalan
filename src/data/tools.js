// src/data/techStack.ts
import astro from "../images/techstack/astro.svg";
import bootstrap from "../images/techstack/bootstrap.svg";
import css from "../images/techstack/css3.svg";
import figma from "../images/techstack/figma.svg";
import git from "../images/techstack/git.svg";
import github from "../images/techstack/github.svg";
import html from "../images/techstack/html5.svg";
import javascript from "../images/techstack/javascript.svg";
import npm from "../images/techstack/npm.svg";
import reactrouter from "../images/techstack/react-router.svg";
import react from "../images/techstack/react.svg";
import sass from "../images/techstack/sass:scss.svg";
import styledcomponents from "../images/techstack/styled-components 1.svg";
import tailwind from "../images/techstack/tailwind.svg";
import vscode from "../images/techstack/vscode.svg";
import xcode from "../images/techstack/xcode.svg";

export const techStack = {
  categories: {
    "Core Web Technologies": [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
    ],
    "Styling & UI Frameworks": [
      { name: "SASS/SCSS", icon: sass },
      { name: "Tailwind", icon: tailwind },
      { name: "Styled Components", icon: styledcomponents },
      { name: "Bootstrap", icon: bootstrap },
    ],
    "Frontend Libraries & Frameworks": [
      { name: "React", icon: react },
      { name: "React Router", icon: reactrouter },
      { name: "Astro", icon: astro },
    ],
    Tools: [
      { name: "Git", icon: git },
      { name: "Npm", icon: npm },
      { name: "Github", icon: github },
      { name: "Figma", icon: figma },
      { name: "VSCode", icon: vscode },
      { name: "XCode", icon: xcode },
    ],
  },
};
