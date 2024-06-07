import { Link } from "react-router-dom";

interface ContactBtnProps {
  text: string;
}

function ContactBtn({ text }: ContactBtnProps) {
  return (
    <Link
      to="/contacts"
      className="text-white py-2 px-4 border border-primary font-semibold"
    >
      {text}
    </Link>
  );
}

export default ContactBtn;
