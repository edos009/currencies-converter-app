import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/HomeComponents/Home";
import CurrencyConverter from "./components/CurrencyConverterComponents/CurrencyConverter";
import ExchangeRates from "./components/ExchangeRatesComponents/ExchangeRates";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currency_converter" element={<CurrencyConverter />} />
        <Route path="/exchange_rates" element={<ExchangeRates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
