import React from "react";

import styles from "./CurrencyConverter.module.scss";

const CurrencyConverter = () => {
  return (
    <section className={styles.currency_converter}>
      <div className={styles.container}>
        <div className={styles.currency_converter_inner}>
          <h1 className={styles.currency_converter_title}>Currency Converter</h1>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
