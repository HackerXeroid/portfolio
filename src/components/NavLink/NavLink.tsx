import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  url: string;
  text: string;
  activePageRoute: string;
  setActivePageRoute: (section: string) => void;
}

function NavLink({
  url,
  text,
  activePageRoute,
  setActivePageRoute,
}: NavLinkProps) {
  const isActive = url.toLowerCase() === activePageRoute.toLowerCase();
  const handleClick = () => {
    setActivePageRoute(url.toLowerCase());
  };

  return (
    <Link
      to={url}
      onClick={handleClick}
      className={`${styles.navLink} font-medium ${isActive && styles.active}`}
    >
      <span className="text-primary">#</span>
      <span className={`${styles.navLinkText} text-gray`}>{text}</span>
    </Link>
  );
}
export default NavLink;
