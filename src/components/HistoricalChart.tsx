import axios from "axios"
import { CategoryScale, Chart, ChartData, LinearScale, LineElement, PointElement, Title } from "chart.js"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title)

interface Rate {
  [key: string]: number;
}

interface Props {
  currency1: string,
  currency2: string
}

export default function HistoricalChart({currency1, currency2}: Props) {
  const [chartData, setChartData] = useState<ChartData>(
    {
      labels: [],
      datasets: [
        {data: []}
      ],
    }
  )

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${currency1}/${currency2}`,
        color: "green",
      }
    }
  }

  async function getHistoricalExchangeRate () {
    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0]

    const host = 'altexchangerateapi.herokuapp.com'

    try {
      const historicalExchangeRate = await axios.get(
        `https://${host}/${startDate}..${endDate}?from=${currency1}&to=${currency2}`
      )

      const labels = Object.keys(historicalExchangeRate.data.rates)
      const values = Object.values(historicalExchangeRate.data.rates).map(rate => 
        (rate as Rate)[currency2])

      setChartData({
        labels: labels,
        datasets: [
          {
            label: `${currency1}/${currency2}`,
            data: values,
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 2,
          }
        ]
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHistoricalExchangeRate()
  }, [currency1, currency2])

  return (
    <>
      <Line data={chartData as any} options={options} />
    </>
  )
}
