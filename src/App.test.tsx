import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('select BRL and test if exchange rates table change accordingly', async () => {
  render(<App />)
  const belgiumExchangeRate = await screen.findByText('1.9009')
  expect(belgiumExchangeRate).toBeInTheDocument()
})
