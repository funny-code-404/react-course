import { useEffect, useState, useCallback, useRef } from 'react'

export const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState)
  const cbRef = useRef(null)

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb
    setState(state)
  }, [])

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = null
    }
  }, [state])

  return [state, setStateCallback]
}

// EXAMPLE
// const [state, setState] = useStateCallback(0)

// const handleClick = () =>
//   setState(
//     (prev) => prev + 1,
//     (s) => console.log('I am called after setState, state:', s)
//   )

// <button onClick={handleClick}>Click me</button>
