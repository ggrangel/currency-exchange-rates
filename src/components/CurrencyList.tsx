import { MenuItem, Select } from '@mui/material'
import React from 'react'

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
        autoWidth
        variant='standard'
        defaultValue={defaultValue}
        onChange={e => setBaseCurrency(e.target.value)}
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
