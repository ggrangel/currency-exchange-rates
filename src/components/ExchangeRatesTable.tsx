import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
  baseCurrency: string;
}

export default function ExchangeRatesTable ({ baseCurrency }: Props) {
  const [currencies, setCurrencies] = useState(Object)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const host = 'altexchangerateapi.herokuapp.com'

      try {
        const exchangeRates = await axios.get(
          `https://${host}/latest?from=${baseCurrency}`
        )
        exchangeRates.data.rates[`${baseCurrency}`] = 1

        setCurrencies(exchangeRates.data.rates)
        setError(false)
      } catch (error) {
        setError(true)
      }
    }

    fetchExchangeRates()
  }, [baseCurrency])

  function checkAPIError () {
    return (
      error &&
      'Oops, could not fetch exchange rates, please try to fix the error shown in the console or try again later.'
    )
  }

  return (
    <>
      {checkAPIError()}
      {currencies && (
        <div className='container'>
          <div className='row '></div>
          {Object.keys(currencies)
            .sort()
            .map((currency, i) => (
              <div key={i} className='col-6 col-md-3 d-inline-flex '>
                <div className='container'>
                  <div className='row justify-content-start'>
                    <div className='col-6 mb-3'>{currency}</div>
                    <div className='col-6 mb-3'>
                      {currencies[currency].toFixed(3)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  )
}
