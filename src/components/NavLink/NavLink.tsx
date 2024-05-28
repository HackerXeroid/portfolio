import styles from "./NavLink.module.css";

interface NavLinkProps {
  url: string;
  text: string;
  isActive?: boolean;
}

function NavLink({ url, text, isActive }: NavLinkProps) {
  const color: string = isActive ? "text-white" : "text-gray";

  return (
    <a href={url} className={`${styles.navLink} font-medium`}>
      <span className="text-primary">#</span>
      <span className={`${styles.navLinkText} ${color}`}>{text}</span>
    </a>
  );
}
export default NavLink;
