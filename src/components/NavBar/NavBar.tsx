import { useLocation } from "react-router-dom";
import Logo from "../../../src/assets/logo.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NavLink from "../NavLink/NavLink";
import { useEffect } from "react";

interface NavBarProps {
  name: string;
  activePageRoute: string;
  setActivePageRoute: (section: string) => void;
}

const urls = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "projects",
    route: "/projects",
  },
  {
    name: "skills",
    route: "/skills",
  },
  {
    name: "about-me",
    route: "/about",
  },
  {
    name: "contacts",
    route: "/contacts",
  },
];

function NavBar({ name, activePageRoute, setActivePageRoute }: NavBarProps) {
  const location = useLocation();

  useEffect(() => {
    setActivePageRoute(location.pathname);
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className="flex justify-between pt-8 pb-2 mb-16">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-4 h-4" alt="logo" />
        <p className="text-white font-extrabold">{name}</p>
      </div>

      <ul className="flex gap-8">
        {urls.map((url) => (
          <li key={url.name}>
            <NavLink
              url={url.route}
              text={url.name}
              activePageRoute={activePageRoute}
              setActivePageRoute={setActivePageRoute}
            />
          </li>
        ))}
        <li>
          <CustomDropdown />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
