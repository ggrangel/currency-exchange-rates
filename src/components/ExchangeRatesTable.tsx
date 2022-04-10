import axios from 'axios'
import { useEffect, useState } from 'react'

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
        <div className='container'>
          <div className='row '></div>
          {Object.keys(exchangeRates)
            .sort()
            .map((currency, i) => (
              <div key={i} className='col-6 col-md-3 d-inline-flex '>
                <div className='container'>
                  <div className='row justify-content-start'>
                    <p className='col-6 mb-3'>{currency}</p>
                    <p id={currency} className='col-6 mb-3'>
                      {exchangeRates[currency].toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  )
}
