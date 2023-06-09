// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/alt1.png";
import HeroDark from "./images/darkai2.png";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

 // add github username
export const githubUsername = "soufiane-radouni";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="uiw:linkedin" />;

// About Me

export const moreInfo =
  "Constant learner with Over 4 years of cross-industry experience combined with a diverse background in information technologies and strong business acumen";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="logos:bootstrap" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="vscode-icons:file-type-reactjs" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="skill-icons:redux" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <Icon icon="vscode-icons:file-type-typescriptdef-official" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 9,
    skill: <Icon icon="logos:nextjs-icon" className="display-4" />,
    name: "Next.js",
  },
  {
    id: 9,
    skill: <Icon icon="logos:aws" className="display-4" />,
    name: "AWS",
  },
];

export const resume = null;

/* Projects
  
  List the repo names you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

//GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mlekovve";
