import { useState } from "react";

import ChevronImg from "../../assets/chevron-down.svg";

const CustomDropdown = ({
  options,
  onOptionChange,
}: {
  options: string[];
  onOptionChange: (option: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("EN");

  return (
    <div className="dropdown text-gray font-semibold text-base">
      <button
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <span className="inline-block mr-2">
          {selectedOption || "Select an option"}{" "}
        </span>
        <span className="absolute -right-2 top-1/2 -translate-y-1/2">
          <img
            src={ChevronImg}
            alt="chevron"
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
        {!isOpen && (
          <span className="absolute left-full top-1/2 -translate-y-2/3 font-extrabold text-2xl"></span>
        )}
        {isOpen && (
          <span className="absolute left-full top-1/2 -translate-y-1/3 align-super font-semibold"></span>
        )}
      </button>
      <ul
        className={`options absolute mt-1 font-normal flex flex-col gap-2 p-2 border-gray border whitespace-nowrap transition-all duration-200 z-50 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {options.map((option) =>
          option === selectedOption ? null : (
            <button
              key={option}
              onClick={() => {
                setSelectedOption(option);
                onOptionChange(option);
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              {option}
            </button>
          )
        )}
      </ul>
    </div>
  );
};

export default CustomDropdown;
