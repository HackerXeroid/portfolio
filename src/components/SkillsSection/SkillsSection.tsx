import SectionHeading from "../SectionHeading/SectionHeading";
import SkillCategory from "../SkillCategory/SkillCategory";
import Dots from "../../assets/person_front_dots.svg";
import Pattern from "../../assets/person_behind_home.svg";
import Rectangle from "../../assets/rectangle.svg";
import Masonry from "react-masonry-css";

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SkillsSectionProps {
  skills: SkillCategory[];
}

function SkillsSection({ skills }: SkillsSectionProps) {
  const breakpointColumnsObj = {
    default: 3,
  };

  return (
    <section className="mb-28">
      <SectionHeading headingText="skills" widthClass="w-1/4" />
      <div className="flex">
        {/* Left: Shapes */}
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
        {/* Right: Skills categorized */}
        <div className="w-3/5 flex justify-end">
          <Masonry
            className="flex items-center w-auto"
            columnClassName="grid-item ml-2"
            breakpointCols={breakpointColumnsObj}
          >
            {skills.map((skillCategory) => (
              <div className="mb-2" key={skillCategory.category}>
                <SkillCategory {...skillCategory} />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;
