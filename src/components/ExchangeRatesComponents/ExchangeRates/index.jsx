import React from "react";

import styles from "./ExchangeRates.module.scss";

const ExchangeRates = () => {
  return (
    <section className={styles.exchange_rates}>
      <div className={styles.container}>
        <div className={styles.exchange_rates_inner}>
          <h1 className={styles.exchange_rates_title}>Exchange Rates</h1>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
