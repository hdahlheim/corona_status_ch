import useStats, { useDailyStats } from '../utils/stats'
import { formatNumber } from '../utils/formatter'

export default function WorldStats() {
  const { data, loading } = useStats()
  const { data: dailyData, loading: dailyLoading } = useDailyStats()
  const sickEmojies = ['😷', '🤒', '🤧']

  return (
    (!loading && (
      <div className="w-full p-4 mx-auto bg-white rounded shadow">
        <h2 className="text-3xl font-bold">Weltweit</h2>
        <div className="grid my-4 md:grid-cols-3">
          <div className="mb-3 border-b md:border-none md:mx-auto md:mb-0">
            <h3 className="text-xl font-semibold md:text-sm">Confirmed:</h3>
            <div className="text-2xl font-bold">
              {sickEmojies[(sickEmojies.length * Math.random()) | 0]}{' '}
              {formatNumber(data.confirmed.value)}
            </div>
            {!dailyLoading && (
              <div className="text-sm font-semibold">
                Delta: {formatNumber(dailyData.deltaConfirmed)}
              </div>
            )}
          </div>
          <div className="mb-3 border-b md:border-none md:mx-auto md:mb-0">
            <h3 className="text-xl font-semibold md:text-sm">Recovered:</h3>
            <div className="text-2xl font-bold">
              🤙 {formatNumber(data.recovered.value)}
            </div>
            {!dailyLoading && (
              <div className="text-sm font-semibold">
                Delta: {formatNumber(dailyData.deltaRecovered)}
              </div>
            )}
          </div>
          <div className="mb-3 border-b md:border-none md:mx-auto md:mb-0">
            <h3 className="text-xl font-semibold md:text-sm">Deaths:</h3>
            <div className="text-2xl font-bold">
              💀 {formatNumber(data.deaths.value)}
            </div>
            <div className="text-sm font-semibold">Delta: unavailable</div>
          </div>
        </div>
        <div className="text-sm">
          Last Update: {new Date(data.lastUpdate).toDateString()}
        </div>
      </div>
    )) || (
      <div className="w-full p-4 mx-auto bg-white rounded shadow-md">
        <p>loading...</p>
      </div>
    )
  )
}
