import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { ListOfCurrenciesContext } from '../App'

interface Props {
  onChange: (currency: string) => void;
  defaultValue: string;
}

export default function CurrencyList ({ onChange, defaultValue }: Props) {
  const listOfCurrencies = React.useContext(ListOfCurrenciesContext)
  return (
    <>
      <Select
        autoWidth
        variant='standard'
        defaultValue={defaultValue}
        onChange={e => onChange(e.target.value)}
      >
        {listOfCurrencies.sort().map(currency => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
