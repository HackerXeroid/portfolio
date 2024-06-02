interface IconProps {
  icon?: string;
  name: string;
  href: string;
  children?: React.ReactNode;
}

function Icon({ icon, name, href, children }: IconProps) {
  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(href, "_blank");
  };

  return (
    <a
      className="flex items-center"
      onClick={clickHandler}
      href={href}
      target="_blank"
    >
      <img className="w-8 h-8 p-2" src={icon} alt={name} />
      {children}
    </a>
  );
}
export default Icon;
