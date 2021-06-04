import { useEffect, useRef } from 'react'

export const usePrevious = (value) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// EXAMPLE
//const [value, setValue] = React.useState(0);
//const lastValue = usePrevious(value);
