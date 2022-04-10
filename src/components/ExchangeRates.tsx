import { useState } from 'react'
import CurrencyList from './CurrencyList'
import ExchangeRatesTable from './ExchangeRatesTable'

export default function ExchangeRates () {
  const [baseCurrency, setBaseCurrency] = useState('AUD')

  return (
    <>
      <CurrencyList setBaseCurrency={setBaseCurrency} />
      <ExchangeRatesTable baseCurrency={baseCurrency} />
    </>
  )
}
