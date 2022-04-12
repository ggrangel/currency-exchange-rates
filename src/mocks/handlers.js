import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://altexchangerateapi.herokuapp.com/latest',
    (req, res, ctx) => {
      const { from } = req.url.searchParams.get('from')
      return res(
        ctx.status(200),
        ctx.json({
          amount: 1,
          base: 'BRL',
          date: '2022-04-08',
          rates: {
            BGN: 1.9009,
            CAD: 0.93973,
            CHF: 0.69784,
            CNY: 4.7495,
            CZK: 16.8217,
            DKK: 5.1108,
            EUR: 0.68719,
            GBP: 0.57281,
            HKD: 5.8503,
            HRK: 5.1876,
            HUF: 258.15,
            IDR: 10722,
            ILS: 2.4059,
            INR: 56.618,
            ISK: 95.93,
            JPY: 92.68,
            KRW: 916.11,
            MXN: 15.0309,
            MYR: 3.1508,
            NOK: 6.5338,
            NZD: 1.0891,
            PHP: 38.476,
            PLN: 3.1911,
            RON: 3.3964,
            SEK: 7.0621,
            SGD: 1.0171,
            THB: 25.075,
            TRY: 11.0113,
            USD: 0.74636,
            ZAR: 10.9929
          }
        })
      )
    }
  ),
  rest.get(
    'https://altexchangerateapi.herokuapp.com/latest?from=BRL',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          amount: 1,
          base: 'BRL',
          date: '2022-04-08',
          rates: {
            BGN: 1.9009,
            CAD: 0.93973,
            CHF: 0.69784,
            CNY: 4.7495,
            CZK: 16.8217,
            DKK: 5.1108,
            EUR: 0.68719,
            GBP: 0.57281,
            HKD: 5.8503,
            HRK: 5.1876,
            HUF: 258.15,
            IDR: 10722,
            ILS: 2.4059,
            INR: 56.618,
            ISK: 95.93,
            JPY: 92.68,
            KRW: 916.11,
            MXN: 15.0309,
            MYR: 3.1508,
            NOK: 6.5338,
            NZD: 1.0891,
            PHP: 38.476,
            PLN: 3.1911,
            RON: 3.3964,
            SEK: 7.0621,
            SGD: 1.0171,
            THB: 25.075,
            TRY: 11.0113,
            USD: 0.74636,
            ZAR: 10.9929
          }
        })
      )
    }
  )
]
