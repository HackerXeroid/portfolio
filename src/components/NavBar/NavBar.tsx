import Logo from "../../../src/assets/logo.svg";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import NavLink from "../NavLink/NavLink";

interface NavBarProps {
  name: string;
}

const urls: string[] = ["#home", "#works", "#about-me", "#contacts"];

function NavBar({ name }: NavBarProps) {
  return (
    <nav className="flex justify-between pt-8 pb-2 mb-16">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-4 h-4" alt="logo" />
        <p className="text-white font-extrabold">{name}</p>
      </div>

      <ul className="flex gap-8">
        {urls.map((url) => (
          <li key={url}>
            <NavLink url={url} text={url.slice(1)} />
          </li>
        ))}
        <li>
          <ChangeLanguage />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
