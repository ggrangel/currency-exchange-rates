import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('test if BGN exchange rate is shown', async () => {
  render(<App />)
  const belgiumCurrValue = await screen.findByText('1.956')
  expect(belgiumCurrValue).toBeInTheDocument()
  // screen.debug()
})

// test('test if CAD exchange rate is shown after selecting BRL currency', async () => {
//   render(<App />)
//   userEvent.click()
//   const belgiumCurrValue = await screen.findByText('1.956')
//   expect(belgiumCurrValue).toBeInTheDocument()
//   // screen.debug()
// })
