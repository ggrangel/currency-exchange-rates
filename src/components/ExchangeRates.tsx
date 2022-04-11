import { Box, FormControl, FormControlLabel, InputLabel } from '@mui/material'
import { purple } from '@mui/material/colors'
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
      <FormControlLabel
        label='Exchange Rates for 1'
        labelPlacement='start'
        control={
          <Box ml={1}>
            <CurrencyList
              listOfCurrencies={listOfCurrencies}
              defaultValue={defaultCurr}
              setBaseCurrency={setBaseCurrency}
            />
          </Box>
        }
      ></FormControlLabel>
      <ExchangeRatesTable baseCurrency={baseCurrency} />
    </>
  )
}
