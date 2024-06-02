import SectionHeading from "../SectionHeading/SectionHeading";
import DiscordImg from "../../assets/discord.svg";
import MailImg from "../../assets/mail.svg";
import Icon from "../Icon/Icon";

function ContactSection() {
  return (
    <div className="mb-36">
      <SectionHeading headingText="contacts" widthClass="w-1/6" />
      <div className="flex gap-48">
        <div className="w-2/3">
          <p className="text-gray font-medium text-base">
            I&apos;m interested in freelance opportunities. However, if you have
            other request or question, don&apos;t hesitate to contact me
          </p>
        </div>
        <div className="w-1/3 flex items-end justify-end">
          <div className="flex flex-col gap-4 items-start p-4 border border-gray min-w-52">
            <strong className="text-white">Message me here</strong>
            <div className="flex flex-col c-gray-text">
              <Icon
                name="Discord"
                icon={DiscordImg}
                href="https://discord.gg/R6N3UQxyp8"
              >
                thexeroid
              </Icon>
              <Icon
                name="Mail"
                icon={MailImg}
                href="mailto:xeroid.space@gmail.com"
              >
                xeroid.space@gmail.com
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
