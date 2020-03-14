import useStats from '../utils/stats'

export default function Stats({ country, countryCode = null }) {
  const { data, loading, error } = useStats(countryCode)
  const sickEmojies = ['😷', '🤒', '🤧']

  return (
    (!loading && (
      <div className="w-full p-4 mx-auto bg-white shadow-md md:rounded">
        <h2 className="text-3xl font-bold">{country}</h2>
        <div className="grid grid-cols-3 my-4">
          <div className="mx-auto">
            <h3 className="text-sm font-semibold">Confirmed:</h3>
            <span className="text-xl font-bold md:text-2xl">
              {sickEmojies[(sickEmojies.length * Math.random()) | 0]}{' '}
              {data.confirmed.value}
            </span>
          </div>
          <div className="mx-auto">
            <h3 className="text-sm font-semibold">Recovered:</h3>
            <span className="text-xl font-bold md:text-2xl">
              🤙 {data.recovered.value}
            </span>
          </div>
          <div className="mx-auto">
            <h3 className="text-sm font-semibold">Deaths:</h3>
            <span className="text-xl font-bold md:text-2xl">
              💀 {data.deaths.value}
            </span>
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
