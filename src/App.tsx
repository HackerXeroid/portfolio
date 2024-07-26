import { useEffect, useState } from "react";
import Icon from "./components/Icon/Icon";
import NavBar from "./components/NavBar/NavBar";
import GithubImg from "./assets/github.svg";
import DiscordImg from "./assets/discord.svg";
import JobPreviewDashboardImg from "./assets/job-dashboard-project.png";
import ChatAppProjectImg from "./assets/chat-app-project.png";
import BetterChatAppUiImg from "./assets/chat-app-ui.png";
import PortfolioImg from "./assets/portfolio-image.png";
import StudentCommitTrackerImg from "./assets/student-commit-tracker-image.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotHandledScreen from "./screens/NotHandledScreen";
import useWindowWidth from "./hooks/useWindowWidtth";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import resources from "./translations/translations";

const projects = [
  {
    id: 4,
    name: "Students commit tracker",
    image: StudentCommitTrackerImg,
    technologies: [
      "React",
      "Tailwind",
      "shadcn/ui",
      "Node",
      "Express.js",
      "MongoDB",
      "OpenAI",
    ],
    description:
      "AI-led GitHub grading of student assignments with leaderboard.",
    demo: "#",
    github: "https://github.com/HackerXeroid/students-commit-tracker",
  },
  {
    id: 2,
    name: "Anonymous Chat",
    image: ChatAppProjectImg,
    technologies: ["React.js", "Express.js", "Socket.io"],
    description:
      "A chat application for anonymous conversations. [PS: Server starts in 2m]",
    demo: "https://chat-app-frontend1.netlify.app/",
    github: "https://github.com/HackerXeroid/chat-app-frontend",
  },
  {
    id: 1,
    name: "Job Preview Dashboard",
    image: JobPreviewDashboardImg,
    technologies: ["React.js", "Tailwind", "Vite"],
    description: "A dashboard for previewing job listings",
    demo: "https://jobdashboardpreview.netlify.app/",
    github: "https://github.com/HackerXeroid/job_preview_dashboard",
  },
  {
    id: 3,
    name: "Better Chat app UI",
    image: BetterChatAppUiImg,
    technologies: ["React", "TypeScript", "shadcn/ui"],
    description: "A better version Chat application UI.",
    demo: "https://the-ultimate-chat-app.netlify.app/",
    github: "https://github.com/HackerXeroid/firebase-chat-app",
  },
  {
    id: 5,
    name: "Portfolio",
    image: PortfolioImg,
    technologies: ["React", "TypeScript", "Tailwind"],
    description:
      "My personal portfolio website showcasing my projects and skills.",
    demo: "https://theshivam.netlify.app",
    github: "https://github.com/HackerXeroid/portfolio",
  },
];

const skills = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "Java", "Python"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["VSCode", "Linux", "Figma", "Git", '"Font Awesome"'],
  },
  {
    category: "Other",
    skills: ["HTML", "CSS", "SCSS", "REST"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Express.js", '"Spring Boot"'],
  },
];

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const windowWidth = useWindowWidth();
  const [activePageRoute, setActivePageRoute] = useState("/");
  const [pageLanguage, setPageLanguage] = useState("EN");
  console.log(pageLanguage);

  useEffect(() => {
    if (i18n.language !== pageLanguage) {
      i18n.changeLanguage(pageLanguage.toLowerCase());
    }
  }, [pageLanguage]);

  return windowWidth >= 1208 ? (
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
          setPageLanguage={setPageLanguage}
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
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
          <Route path="/skills" element={<SkillsPage skills={skills} />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  ) : (
    <NotHandledScreen />
  );
}
export default App;
