import { useState } from 'react'

export const useStorage = (key) => {
  const [value, setValueState] = useState(() => {
    const data = localStorage.getItem(key)

    return data && data !== 'undefined' ? JSON.parse(data) : ''
  })

  const setValue = (value) => {
    setValueState(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  const removeValue = () => {
    localStorage.removeItem(key)
  }

  return [value, setValue, removeValue]
}

// EXAMPLE
//const [item, setItem, removeItem] = useStorage('temp')
//console.log(item, setItem, removeItem)
