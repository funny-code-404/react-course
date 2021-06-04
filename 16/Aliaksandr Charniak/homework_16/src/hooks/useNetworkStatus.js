import { useEffect, useState } from 'react'

export const useNetworkStatus = () => {
  const getOnLineStatus = () =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true

  const [status, setStatus] = useState(getOnLineStatus())

  const setOnline = () => setStatus(true)
  const setOffline = () => setStatus(false)

  useEffect(() => {
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)

    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
  }, [])

  return status
}

// EXAMPLE
//const isOnline = useNetworkStatus();
//<p>You are {isOnline ? 'online' : 'offline'}.</p>
