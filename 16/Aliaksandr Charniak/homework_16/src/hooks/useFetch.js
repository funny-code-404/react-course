import { useEffect, useState } from 'react'

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url, options)
        const result = await res.json()

        setResponse(result)
        setLoading(false)
      } catch (e) {
        setError(e)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return [response, loading, error]
}

// EXAMPLE
// const [res, loading, error] = useFetch('https://cat-fact.herokuapp.com/facts')
// console.log(res, loading, error)
