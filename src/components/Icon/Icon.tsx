interface IconProps {
  icon: string;
  name: string;
}

function Icon({ icon, name }: IconProps) {
  return <img className="w-8 h-8 p-2" src={icon} alt={name} />;
}
export default Icon;
