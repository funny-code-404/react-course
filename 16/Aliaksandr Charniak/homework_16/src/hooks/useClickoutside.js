import { useEffect } from 'react'

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

// EXAMPLE
// const ClickBox = ({ onClickOutside }) => {
//   const clickRef = React.useRef()
//   useClickOutside(clickRef, onClickOutside)
//   return (
//     <div ref={clickRef}>
//       <p>Click out of this element</p>
//     </div>
//   )
// }
