import { useState, useEffect } from 'react'

export default function useStats(country) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const url = country
    ? `https://covid19.mathdro.id/api/countries/${country}`
    : 'https://covid19.mathdro.id/api'

  useEffect(() => {
    async function getStats() {
      setLoading(true)
      setError(null)
      const stats = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err))
      setData(stats)
      setLoading(false)
    }
    getStats()
  }, [country])

  return {
    data,
    error,
    loading,
  }
}

export function useDailyStats(date) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getStats() {
      setLoading(true)
      setError(null)
      const stats = await fetch(`https://covid19.mathdro.id/api/daily`)
        .then(res => res.json())
        .then(res => res[res.length - 1])
        .catch(err => setError(err))
      setData(stats)
      setLoading(false)
    }
    getStats()
  }, [date])
  return {
    data,
    error,
    loading,
  }
}
