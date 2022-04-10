import { useState } from 'react'
import CurrencyList from './CurrencyList'
import ExchangeRatesTable from './ExchangeRatesTable'
import SectionHeader from './SectionHeader'

interface Props {
  listOfCurrencies: string[];
}

export default function ExchangeRates ({ listOfCurrencies }: Props) {
  const defaultCurr = 'EUR'
  const [baseCurrency, setBaseCurrency] = useState(defaultCurr)

  return (
    <>
      <SectionHeader title='Exchange Rates' />
      <div className='container' style={{ width: '300px' }}>
        <p className='d-inline-block me-2'>Exchange rates for 1</p>
        <CurrencyList
          listOfCurrencies={listOfCurrencies}
          defaultValue={defaultCurr}
          setBaseCurrency={setBaseCurrency}
        />
      </div>
      <ExchangeRatesTable baseCurrency={baseCurrency} />
    </>
  )
}
