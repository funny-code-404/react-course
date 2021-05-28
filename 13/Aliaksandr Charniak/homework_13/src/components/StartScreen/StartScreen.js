import { useDispatch } from 'react-redux'

import { START_GAME } from '../../ducks/game'

const StartScreen = () => {
  const dispatch = useDispatch()
  const handleStartClick = (e) => {
    dispatch(START_GAME())
  }

  return (
    <div>
      <h2>Крестики-нолики</h2>
      <h3>Начать новую игру?</h3>
      <button onClick={handleStartClick}>Начать</button>
    </div>
  )
}

export default StartScreen
