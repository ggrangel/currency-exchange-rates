import { MenuItem, Select } from '@mui/material'
import React from 'react'

interface Props {
  listOfCurrencies: string[];
  onChange: (currency: string) => void;
  defaultValue: string;
}

export default function CurrencyList ({
  listOfCurrencies,
  onChange,
  defaultValue
}: Props) {
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
