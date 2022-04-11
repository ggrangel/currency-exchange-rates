import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRates from "./components/ExchangeRates";


const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightRegular: "900"
  }
})


function App() {
  const [allCurrencies, setAllCurrencies] = useState<string[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCurrencies = async () => {
      const host = 'altexchangerateapi.herokuapp.com'

      try {
        const exchangeRates = await axios.get(`https://${host}/latest?from=EUR`)

        const fetchedCurrencies = Object.keys(exchangeRates.data.rates)
        fetchedCurrencies.push('EUR')
        console.log(fetchedCurrencies)

        setAllCurrencies(fetchedCurrencies)
        setError(false)
      } catch (error) {
        setError(true)
      }
    }

    fetchCurrencies()
  }, [])

  function checkAPIError () {
    return (
      error &&
      'Oops, could not fetch exchange rates, please try to fix the error shown in the console or try again later.'
    )
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {error && checkAPIError()}
      {allCurrencies && <CurrencyConverter listOfCurrencies={allCurrencies}/>}
      {allCurrencies && <ExchangeRates listOfCurrencies={allCurrencies}/>}
    </div>
    </ThemeProvider>
  );
}

export default App;
