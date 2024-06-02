import { useState } from "react";
import Icon from "./components/Icon/Icon";
import NavBar from "./components/NavBar/NavBar";
import GithubImg from "./assets/github.svg";
import DiscordImg from "./assets/discord.svg";
import ChertNodesImg from "./assets/project_chertnodes.jpg";
import ProtectXImg from "./assets/project_protectx.jpg";
import KahootAnswersImg from "./assets/project_kahoot_answers.jpg";
import KotikBotImg from "./assets/project_kotik_bot.jpg";
import PortfolioImg from "./assets/project_portfolio.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";

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
    image: KahootAnswersImg,
    technologies: ["CSS", "Express", "Node.js"],
    description: "Get answers to your kahoot quiz",
    demo: "https:/ /kahoot-answers.herokuapp.com",
    github: "https://github.com/ChertCraft/kahoot-answers",
  },
  {
    id: 4,
    name: "Kotik Bot",
    image: KotikBotImg,
    technologies: ["HTML", "CSS", "JS"],
    description: "Multi-functional discord bot",
    demo: "https://kotikbot.xyz",
    github: "https://github.com/ChertCraft/kotik-bot",
  },
  {
    id: 5,
    name: "Portfolio",
    image: PortfolioImg,
    technologies: ["Vue", "TS", "Less"],
    description: "You're using it rn",
    demo: "https://shivam.vercel.app",
    github: "https://github.com/ChertCraft/portfolio",
  },
];

const skills = [
  {
    category: "Languages",
    skills: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    category: "Databases",
    skills: ["SQLite", "PostgreSQL", "Mongo"],
  },
  {
    category: "Tools",
    skills: [
      "VSCode",
      "Neovim",
      "Linux",
      "Figma",
      "XFCE",
      "Arch",
      "Git",
      "Font Awesome",
    ],
  },
  {
    category: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
  },
];

function App() {
  const [activePageRoute, setActivePageRoute] = useState("fsdasd");

  return (
    <div className="max-w-5xl mx-auto">
      <div className="absolute left-4 top-0 flex flex-col items-center gap-2">
        <div className="w-0.25 h-48 bg-gray"></div>
        <div className="flex flex-col gap-2">
          <Icon
            icon={GithubImg}
            name="Github"
            href="https://github.com/HackerXeroid"
          />
          <Icon
            icon={DiscordImg}
            name="Discord"
            href="https://discord.gg/R6N3UQxyp8"
          />
        </div>
      </div>

      {/* Nav Bar */}
      <Router>
        <NavBar
          activePageRoute={activePageRoute}
          setActivePageRoute={setActivePageRoute}
          name="Shivam"
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage projects={projects} skills={skills} />}
          />
          <Route
            path="/home"
            element={<HomePage projects={projects} skills={skills} />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
