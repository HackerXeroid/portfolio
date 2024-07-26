import LineBreak from "../LineBreak/LineBreak";
import SectionHeading from "../SectionHeading/SectionHeading";
import AboutMeImg from "../../assets/about_me.png";
import PatternImg from "../../assets/person_front_dots.svg";
import { Link } from "react-router-dom";

function AboutSection({
  showDownloadResumeBtn,
}: {
  showDownloadResumeBtn: boolean;
}) {
  return (
    <div className="mb-28">
      <div>
        <SectionHeading headingText="about-me" widthClass="w-1/3" />
      </div>
      <div className="flex gap-40">
        {/* Left part */}
        <div className="w-2/3">
          <p className="text-gray text-base leading-6 mb-7">
            Hello, I'm Shivam! <LineBreak times={2} />
            I'm a self-taught{" "}
            <span className="text-primary">React Specialist</span> and{" "}
            <span className="text-primary">UI/UX Enthusiast</span> based in
            Bengaluru, India. I craft responsive websites from scratch and
            transform them into modern, user-friendly web experiences.{" "}
            <LineBreak times={2} />
            For over a year, my passion has been to turn my creativity and
            knowledge into websites. Even though I haven't had any gigs yet,
            I've built various projects to hone my skills and establish my
            online presence. I'm always eager to learn about the latest
            technologies and frameworks.
          </p>
          {!showDownloadResumeBtn && (
            <Link
              to="/about"
              className="text-base font-medium text-white px-4 py-2 border border-primary"
            >
              Read more -&gt;
            </Link>
          )}
          {showDownloadResumeBtn && (
            <a
              href="https://drive.google.com/file/d/1LA9rZ4i3U1XyQmgursfBSw94-qx5DjH7/view"
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-white px-4 py-2 border border-primary"
            >
              Download Resume
            </a>
          )}
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
