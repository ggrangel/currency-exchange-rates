import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRates from "./components/ExchangeRates";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightRegular: "900"
  }
})

export const ListOfCurrenciesContext = React.createContext<string[]>([])

function App() {
  const [allCurrencies, setAllCurrencies] = useState<string[]>([])

  useEffect(() => {
    const fetchCurrencies = async () => {
      const host = 'altexchangerateapi.herokuapp.com'

      try {
        const exchangeRates = await axios.get(`https://${host}/latest?from=EUR`)

        const fetchedCurrencies = Object.keys(exchangeRates.data.rates)
        fetchedCurrencies.push('EUR')

        setAllCurrencies(fetchedCurrencies)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCurrencies()
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
        <ListOfCurrenciesContext.Provider value={allCurrencies}>
      <CurrencyConverter />
      <ExchangeRates />
        </ListOfCurrenciesContext.Provider>
        <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
