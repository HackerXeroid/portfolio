import { useState } from "react";

const options: string[] = ["en", "ru", "ua"];
function ChangeLanguage() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className="bg-color text-gray font-extrabold border-none"
      onChange={handleChange}
      value={selectedOption}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
export default ChangeLanguage;
