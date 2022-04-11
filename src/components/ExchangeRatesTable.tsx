import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './ExchangeRatesTable.css'

function countDigitsBeforeDecimal (num: number): number {
  if (Number.isInteger(num)) {
    return num.toString().length
  }

  return num.toString().split('.')[0].length
}

function formatExchangeRateDecimals (num: number, totalNDigits: number) {
  const nBeforeDecimal = countDigitsBeforeDecimal(num)

  const nLeft = totalNDigits - nBeforeDecimal

  return num.toFixed(Math.max(nLeft, 0))
}

interface Props {
  baseCurrency: string;
}

export default function ExchangeRatesTable ({ baseCurrency }: Props) {
  const [exchangeRates, setExchangeRates] = useState(Object)

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const host = 'altexchangerateapi.herokuapp.com'

      try {
        const exchangeRates = await axios.get(
          `https://${host}/latest?from=${baseCurrency}`
        )
        exchangeRates.data.rates[`${baseCurrency}`] = 1

        setExchangeRates(exchangeRates.data.rates)
      } catch (error) {}
    }

    fetchExchangeRates()
  }, [baseCurrency])

  return (
    <>
      {exchangeRates && (
        <Grid container mt={3} spacing={1}>
          {Object.keys(exchangeRates)
            .sort()
            .map((currency, i) => (
              <Grid key={i} item md={3} xs={6}>
                <Grid container>
                  <Grid item xs={6}>
                    <Box display='flex' justifyContent='flex-end'>
                      <Typography align='left' mr={2} color='primary'>
                        {currency}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display='flex' justifyContent='flex-start'>
                      <Typography align='left' color='secondary'>
                        {formatExchangeRateDecimals(exchangeRates[currency], 5)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      )}
    </>
  )
}
