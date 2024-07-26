// Import hero image
import HeroImg from "../../assets/hero-image.png";
import Dots from "../../assets/person_front_dots.svg";
import Pattern from "../../assets/person_behind_home.svg";
import RectangleImg from "../../assets/rectangle.svg";

import ContactBtn from "../ContactBtn/ContactBtn";
import CurrentlyWorkingOn from "../CurrentlyWorkingOn/CurrentlyWorkingOn";
import MainHeading from "../Heading/MainHeading";
import Quote from "../Quote/Quote";

function HeroSection() {
  return (
    <>
      <div className="flex mb-28">
        <div className="flex flex-col items-start justify-center">
          <MainHeading
            name="Shivam"
            jobs={["React Specialist", "UI/UX Enthusiast"]}
          />

          <p className="text-lg text-gray mb-6">
            He crafts <span className="text-primary">responsive websites</span>{" "}
            where technology meets creativity and builds
            <span className="text-primary">
              &nbsp;complex web applications.
            </span>
          </p>

          <ContactBtn text={"Contact me!!"} />
        </div>

        <div className="flex flex-col items-center justify-center py-8 px-6 relative">
          <div className="relative">
            <img
              src={HeroImg}
              alt="hero"
              className="relative object-cover z-20"
            />

            <img src={Dots} className="absolute right-4 bottom-14 z-30" />
            <img src={Pattern} className="absolute -left-3 top-20 z-10" />
          </div>

          <CurrentlyWorkingOn currProject="student-commit-tracker" />
        </div>
      </div>
      <div>
        <img
          src={RectangleImg}
          alt="rectangle"
          className="absolute w-24 h-24 -right-6 mt-4"
        />
        <Quote />
      </div>
    </>
  );
}
export default HeroSection;
