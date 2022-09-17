import React, { useState, useEffect } from "react";
import cx from "classnames";

import styles from "./Dropdown.module.scss";

const options = ["UAH", "USD", "EUR", "GBP"];

const Dropdown = ({ selected, setSelected }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownContentStyles = cx(styles.dropdown_content, {
    [styles.dropdown_content_show]: isDropdownActive,
  });

  const dropdownBtnStyles = cx(styles.dropdown_btn, {
    [styles.dropdown_btn_active]: isDropdownActive,
  });

  const handleClickOutside = () => {
    setIsDropdownActive(false);
  };

  useEffect(() => {
    if (isDropdownActive) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isDropdownActive]);

  return (
    <div className={styles.dropdown}>
      <div
        className={dropdownBtnStyles}
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownActive(!isDropdownActive);
        }}
      >
        <div className={styles.text}>{selected}</div>
        <div className={styles.arrow}></div>
      </div>
      <div className={dropdownContentStyles}>
        {options.map((option, i) => (
          <div
            className={cx(styles.dropdown_item, {
              [styles.dropdown_item_selected]: selected === option,
            })}
            key={i}
            onClick={({ target: { innerText } }) => {
              setSelected(innerText);
              setIsDropdownActive(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
