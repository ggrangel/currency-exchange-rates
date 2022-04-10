import { useState } from 'react'
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
      <CurrencyList
        listOfCurrencies={listOfCurrencies}
        defaultValue={defaultCurr1}
        setBaseCurrency={setCurrency1}
      />
    </>
  )
}
