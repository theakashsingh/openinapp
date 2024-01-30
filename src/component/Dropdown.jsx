import  { useState, useRef, useEffect } from 'react';
import './dropdown.css'; // Import your CSS file for styling

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div ref={dropdownRef} className="custom_dropdown">
      <button className="dropdown_button" onClick={() => setIsOpen(!isOpen)}>
         Select Tags
        <span className="dropdown_icon">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9.75L12.5 14.25L8 9.75" stroke="#999CA0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className={`dropdown_options ${isOpen ? 'open' : 'closed'}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
