import React from 'react'
import Select from 'react-select'

interface Props {
  listOfCurrencies: string[];
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
  defaultValue: string;
}

export default function CurrencyList ({
  listOfCurrencies,
  setBaseCurrency,
  defaultValue
}: Props) {
  return (
    <>
        <Select
          options={listOfCurrencies
            .sort()
            .map(currency => ({ label: currency, value: currency }))}
          defaultValue={{ label: defaultValue, value: defaultValue }}
          onChange={(e) => setBaseCurrency(e!.value)}
          className="d-inline-block"
        />
    </>
  )
}
