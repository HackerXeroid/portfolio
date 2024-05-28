import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

import ChertNodesImg from "./assets/project_chertnodes.jpg";
import ProtectXImg from "./assets/project_protectx.jpg";
import KahootAnswers from "./assets/project_kahoot_answers.jpg";
import KotikBot from "./assets/project_kotik_bot.jpg";
import Portfolio from "./assets/project_portfolio.jpg";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Github from "./assets/github.svg";
import Dribble from "./assets/dribble.svg";
import Discord from "./assets/discord.svg";
import Icon from "./components/Icon/Icon";
import SkillsSection from "./components/SkillsSection/SkillsSection";

const projects = [
  {
    id: 1,
    name: "ChertNodes",
    image: ChertNodesImg,
    technologies: ["HTML", "SCSS", "Python", "Flask"],
    description: "Minecraft servers hosting",
    demo: "https://chertnodes.com",
    github: "https://github.com/ChertCraft/chertnodes",
  },
  {
    id: 2,
    name: "ProtectX",
    image: ProtectXImg,
    technologies: [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
      "HTML",
      "SCSS",
      "Python",
      "Flask",
    ],
    description: "Discord anti-crash bot",
    demo: "https://protectx.xyz",
    github: "https://github.com/ChertCraft/protectx",
  },
  {
    id: 3,
    name: "Kahoot Answers Viewer",
    image: KahootAnswers,
    technologies: ["CSS", "Express", "Node.js"],
    description: "Get answers to your kahoot quiz",
    demo: "https:/ /kahoot-answers.herokuapp.com",
    github: "https://github.com/ChertCraft/kahoot-answers",
  },
  {
    id: 4,
    name: "Kotik Bot",
    image: KotikBot,
    technologies: ["HTML", "CSS", "JS"],
    description: "Multi-functional discord bot",
    demo: "https://kotikbot.xyz",
    github: "https://github.com/ChertCraft/kotik-bot",
  },
  {
    id: 5,
    name: "Portfolio",
    image: Portfolio,
    technologies: ["Vue", "TS", "Less"],
    description: "You're using it rn",
    demo: "https://shivam.vercel.app",
    github: "https://github.com/ChertCraft/portfolio",
  },
];

function App() {
  return (
    <>
      <div className="absolute left-4 top-0 flex flex-col items-center gap-2">
        <div className="w-0.25 h-48 bg-gray"></div>
        <div className="flex flex-col gap-2">
          <Icon icon={Github} name="Github" />
          <Icon icon={Dribble} name="Dribble" />
          <Icon icon={Discord} name="Discord" />
        </div>
      </div>
      <NavBar name="Shivam" />
      <HeroSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
    </>
  );
}
export default App;
