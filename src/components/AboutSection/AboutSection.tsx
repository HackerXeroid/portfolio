import LineBreak from "../LineBreak/LineBreak";
import SectionHeading from "../SectionHeading/SectionHeading";
import AboutMeImg from "../../assets/about_me.png";
import PatternImg from "../../assets/person_front_dots.svg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="mb-28">
      <div>
        <SectionHeading headingText="about-me" widthClass="w-1/3" />
      </div>
      <div className="flex gap-40">
        {/* Left part */}
        <div className="w-2/3">
          <p className="text-gray text-base leading-6 mb-7">
            Hello, I&apos;m Shivam! <LineBreak times={2} />
            I&apos;m a self-taught front-end developer based in Bengaluru,
            India. I can develop responsive websites from scratch and raise them
            into modern user-friendly web experiences. <LineBreak
              times={2}
            />{" "}
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <Link
            to="/about"
            className="text-base font-medium text-white px-4 py-2 border border-primary"
          >
            Read more -&gt;
          </Link>
        </div>
        {/* Right part */}
        <div className="w-1/3 relative">
          <img
            src={AboutMeImg}
            alt="About me Image"
            className="w-full object-cover z-20 relative"
          />
          <img
            src={PatternImg}
            alt="Pattern"
            className="absolute -left-1 top-20 w-20 h-20 z-10"
          />
          <img
            src={PatternImg}
            alt="Pattern"
            className="absolute right-4 bottom-44 object-cover w-24 h-14 z-30"
          />
          <span className="left-1/2 z-30 -translate-x-1/2 w-4/5 h-0.25 bg-primary absolute bottom-0"></span>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
