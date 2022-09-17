import React, { useState } from "react";

import person_money from "../../../assets/images/person_money.svg";
import Dropdown from "../../Dropdown";

import styles from "./CurrencyConverter.module.scss";

const CurrencyConverter = () => {
  const [selectedTo, setSelectedTo] = useState("USD");
  const [selectedFrom, setSelectedFrom] = useState("UAH");

  return (
    <section className={styles.currency_converter}>
      <div className={styles.container}>
        <div className={styles.currency_converter_inner}>
          <h1 className={styles.currency_converter_title}>
            Currency Converter
          </h1>
          <div className={styles.currency_converter_container}>
            <div className={styles.currency_converter_box}>
              <div className={styles.currency_converter_element}>
                <Dropdown
                  selected={selectedFrom}
                  setSelected={setSelectedFrom}
                />
              </div>
              <div className={styles.currency_converter_control}></div>
              <div className={styles.currency_converter_element}>
                <Dropdown selected={selectedTo} setSelected={setSelectedTo} />
              </div>
            </div>
            <div className={styles.currency_converter_box_img}>
              <img src={person_money} alt="person_money" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
