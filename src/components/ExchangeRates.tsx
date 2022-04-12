import { Box, FormControlLabel } from '@mui/material'
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

  function baseCurrencyChanged (newCurrency: string) {
    setBaseCurrency(newCurrency)
  }

  return (
    <>
      <SectionHeader title='Exchange Rates' />
      <FormControlLabel
        label='Exchange Rates for 1'
        labelPlacement='start'
        control={
          <Box ml={1}>
            <CurrencyList
              listOfCurrencies={listOfCurrencies}
              defaultValue={defaultCurr}
              onChange={baseCurrencyChanged}
            />
          </Box>
        }
      ></FormControlLabel>
      <ExchangeRatesTable baseCurrency={baseCurrency} />
    </>
  )
}
