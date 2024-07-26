import LogoImg from "../../assets/logo.svg";
import GithubImg from "../../assets/github.svg";
import FigmaImg from "../../assets/figma.svg";
import DiscordImg from "../../assets/discord.svg";
import Icon from "../Icon/Icon";

function Footer({ jobs }: { jobs: string[] }) {
  return (
    <footer className="p-8 pt-0">
      <hr className="absolute bg-gray left-0 w-screen h-0.25 border-none" />
      <div className="flex mb-12 pt-8">
        {/* Left */}
        <div className="flex flex-col gap-4 w-2/3">
          <div className="flex items-center">
            <Icon icon={LogoImg} name="Logo" href="#" />
            <p className="text-white font-medium">Shivam</p>
            <a
              href="mailto:xeroid.space@gmail.com"
              className="text-white text-base ml-6 c-gray-text"
            >
              xeroid.space@gmail.com
            </a>
          </div>
          <p className="text-base text-white font-normal">
            {jobs.map((job, i) => {
              return (
                <span key={i}>
                  {job}

                  {i === jobs.length - 2
                    ? " and "
                    : i === jobs.length - 1
                    ? ""
                    : ", "}
                </span>
              );
            })}
          </p>
        </div>
        {/* Right */}
        <div className="flex justify-end w-1/3">
          <div>
            <span className="text-2xl font-medium text-white mb-3 block">
              Media
            </span>
            <div className="flex gap-1 -ml-2 -mt-2">
              <Icon
                icon={GithubImg}
                name="Github"
                href="https://github.com/HackerXeroid"
              />
              <Icon
                icon={FigmaImg}
                name="Figma"
                href="https://www.figma.com/@shivam44"
              />
              <Icon
                icon={DiscordImg}
                name="Discord"
                href="https://discord.gg/R6N3UQxyp8"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center c-gray-text font-normal">
        &copy; Copyright 2024. Made by Shivam
      </p>
    </footer>
  );
}
export default Footer;
