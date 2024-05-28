import SectionHeading from "../SectionHeading/SectionHeading";
import SkillCategory from "../SkillCategory/SkillCategory";
import Dots from "../../assets/person_front_dots.svg";
import Pattern from "../../assets/person_behind_home.svg";
import Rectangle from "../../assets/rectangle.svg";

function SkillsSection() {
  // 112 / 4 = 28
  // 209 / 4 = 52
  return (
    <section className="mb-28">
      <SectionHeading headingText="skills" widthClass="w-1/4" />
      <div className="flex">
        <div className="w-2/5 relative">
          <img
            src={Dots}
            alt="Decoration"
            className="absolute top-2 left-8 w-16 h-16"
          />
          <img
            src={Pattern}
            alt="Decoration"
            className="absolute bottom-8 left-12 w-28 h-28"
          />
          <img
            src={Dots}
            alt="Decoration"
            className="absolute top-28 left-52 w-16 h-16"
          />
          <img
            src={Rectangle}
            alt="Decoration"
            className="absolute -top-8 left-64 w-20 h-20"
          />

          <img
            src={Rectangle}
            alt="Decoration"
            className="absolute bottom-16 left-80 w-13 h-13 right-64 w-14 h-14"
          />
        </div>
        <div className="flex justify-end gap-4 w-3/5">
          {/* 1st column */}
          <div className="flex flex-col gap-4">
            <SkillCategory
              category="Languages"
              skills={["TypeScript", "Lua", "Python", "JavaScript"]}
              className="w-44"
            />
          </div>

          {/* 2nd column */}
          <div className="flex flex-col gap-4 w-44">
            <SkillCategory
              category="Databases"
              skills={["SQLite", "PostgreSQL", "Mongo"]}
              className="w-44"
            />

            <SkillCategory
              category="Other"
              skills={["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]}
              className="w-44"
            />
          </div>

          {/* 3rd column */}
          <div className="flex flex-col gap-4">
            <SkillCategory
              category="Tools"
              skills={[
                "VSCode",
                "Neovim",
                "Linux",
                "Figma",
                "XFCE",
                "Arch",
                "Git",
                "Font\u00A0Awesome",
              ]}
              className="w-48"
            />
            <SkillCategory
              category="Frameworks"
              skills={[
                "React",
                "Vue",
                "Disnake",
                "Discord.js",
                "Flask",
                "Express.js",
              ]}
              className="w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;
