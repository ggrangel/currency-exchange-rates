import { Box, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import './CurrencyConverter.css'
import CurrencyList from './CurrencyList'
import SectionHeader from './SectionHeader'

interface Props {
  listOfCurrencies: string[];
}

export default function CurrencyConverter ({ listOfCurrencies }: Props) {
  const defaultCurr1 = 'EUR'
  const defaultCurr2 = 'BRL'

  const [currency1, setCurrency1] = useState(defaultCurr1)
  const [currency2, setCurrency2] = useState(defaultCurr2)

  return (
    <>
      <SectionHeader title='Currency Converter' />
      <Grid
        container
        // direction='row'
        // justifyContent='center'
        // alignItems='center'
        rowSpacing={1}
        columnSpacing={3}
      >
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-end'>
            <TextField size='small' sx={{ width: 100 }} defaultValue={1} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-start'>
            <CurrencyList
              listOfCurrencies={listOfCurrencies}
              defaultValue={defaultCurr1}
              setBaseCurrency={setCurrency1}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-end'>
            <TextField size='small' sx={{ width: 100 }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display='flex' justifyContent='flex-start'>
            <CurrencyList
              listOfCurrencies={listOfCurrencies}
              defaultValue={defaultCurr2}
              setBaseCurrency={setCurrency2}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
