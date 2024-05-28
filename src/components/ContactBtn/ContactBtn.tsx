interface ContactBtnProps {
  text: string;
}

function ContactBtn({ text }: ContactBtnProps) {
  return (
    <button className="text-white py-2 px-4 border border-primary font-semibold">
      {text}
    </button>
  );
}

export default ContactBtn;
