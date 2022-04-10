import React from "react";

export const CURRENCIES = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  // "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR",
];

export default function CurrencyList({
  setBaseCurrency,
}: {
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <select id="currency" onChange={(e) => setBaseCurrency(e.target.value)}>
        {CURRENCIES.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
}
