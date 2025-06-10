import CodeWarsLogo from "./CodeWarsLogo.astro";
import FacebookLogo from "./FacebookLogo.astro";
import FrontendMentorLogo from "./FrontendMentorLogo.astro";
import InstagramLogo from "./InstagramLogo.astro";
import LinkedInLogo from "./LinkedInLogo.astro";

export const logos = {
  instagram: InstagramLogo,
  codewars: CodeWarsLogo,
  facebook: FacebookLogo,
  linkedin: LinkedInLogo,
  frontendmentor: FrontendMentorLogo,
} as const;

export type LogoKey = keyof typeof logos;
