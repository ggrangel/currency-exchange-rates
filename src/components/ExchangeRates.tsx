import { Box, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import CurrencyList from './CurrencyList'
import ExchangeRatesTable from './ExchangeRatesTable'
import SectionHeader from './SectionHeader'

export default function ExchangeRates () {
  const defaultCurr = 'EUR'
  const [baseCurrency, setBaseCurrency] = useState(defaultCurr)

  function baseCurrencyChanged (newCurrency: string) {
    setBaseCurrency(newCurrency)
  }

  return (
    <>
      <Box maxWidth='md' m='auto'>
        <SectionHeader title='Exchange Rates' />
        <FormControlLabel
          label='Exchange Rates for 1'
          labelPlacement='start'
          control={
            <Box ml={1}>
              <CurrencyList
                defaultValue={defaultCurr}
                onChange={baseCurrencyChanged}
              />
            </Box>
          }
        ></FormControlLabel>
        <ExchangeRatesTable baseCurrency={baseCurrency} />
      </Box>
    </>
  )
}
