import { Box, Grid, TextField } from '@mui/material'
import axios from 'axios'
import HistoricalChart from './HistoricalChart'
import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import CurrencyList from './CurrencyList'

export default function CurrencyConverter () {
  const defaultCurr1 = 'EUR'
  const defaultCurr2 = 'BRL'

  const [currency1, setCurrency1] = useState(defaultCurr1)
  const [currency2, setCurrency2] = useState(defaultCurr2)

  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(0)

  // This state exists to avoid calling the API again whenever we only change the text inputs.
  const [exchangeRateFrom1To2, setExchangeRateFrom1To2] = useState(0)

  async function convertCurrencies (
    curr1: string,
    curr2: string
  ): Promise<any> {
    const host = 'altexchangerateapi.herokuapp.com'

    try {
      const exchangeRates = await axios.get(
        `https://${host}/latest?from=${curr1}&to=${curr2}`
      )

      return exchangeRates.data.rates[`${curr2}`]
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchCurrencyConversion = () => {
      convertCurrencies(defaultCurr1, defaultCurr2).then(exchangeRate => {
        setExchangeRateFrom1To2(parseFloat(exchangeRate))
        setValue2(parseFloat(exchangeRate.toFixed(2)))
      })
    }

    fetchCurrencyConversion()
  }, [])

  function textField1Changed (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const textFieldValue = Math.max(parseFloat(event.target.value), 0)

    setValue1(textFieldValue)
    setValue2(parseFloat((textFieldValue * exchangeRateFrom1To2).toFixed(2)))
  }

  function textField2Changed (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const textFieldValue = Math.max(parseFloat(event.target.value), 0)

    setValue2(textFieldValue)
    setValue1(
      parseFloat((textFieldValue * (1 / exchangeRateFrom1To2)).toFixed(2))
    )
  }

  function currency1Changed (newCurrency: string) {
    setCurrency1(newCurrency)

    if (newCurrency == currency2) {
      setExchangeRateFrom1To2(1)
      setValue2(value1)
    } else {
      convertCurrencies(newCurrency, currency2).then(exchangeRate => {
        setExchangeRateFrom1To2(parseFloat(exchangeRate))
        setValue2(parseFloat((value1 * exchangeRate).toFixed(2)))
      })
    }
  }

  function currency2Changed (newCurrency: string) {
    setCurrency2(newCurrency)

    if (newCurrency == currency1) {
      setExchangeRateFrom1To2(1)
      setValue2(value1)
    } else {
      convertCurrencies(currency1, newCurrency).then(exchangeRate => {
        setExchangeRateFrom1To2(parseFloat(exchangeRate))
        setValue2(parseFloat((value1 * exchangeRate).toFixed(2)))
      })
    }
  }

  return (
    <>
      <SectionHeader title='Currency Converter' />
      <Grid container justifyContent='center'>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
          <Grid item xs={6}>
            <Grid container rowSpacing={1} columnSpacing={3}>
              <Grid item xs={6}>
                <Box display='flex' justifyContent='flex-end'>
                  <TextField
                    type='number'
                    size='small'
                    sx={{ width: 150 }}
                    value={value1}
                    onChange={e => textField1Changed(e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display='flex' justifyContent='flex-start'>
                  <CurrencyList
                    defaultValue={defaultCurr1}
                    onChange={currency1Changed}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display='flex' justifyContent='flex-end'>
                  <TextField
                    type='number'
                    size='small'
                    sx={{ width: 150 }}
                    value={value2}
                    onChange={e => textField2Changed(e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display='flex' justifyContent='flex-start'>
                  <CurrencyList
                    defaultValue={defaultCurr2}
                    onChange={currency2Changed}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={3}>
          <Box display='flex' justifyContent='flex-start'>
            <HistoricalChart currency1={currency1} currency2={currency2} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
