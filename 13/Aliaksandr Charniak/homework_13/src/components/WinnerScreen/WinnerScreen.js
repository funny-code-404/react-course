import { useSelector, useDispatch } from 'react-redux'

import { CLEAR_FIELDS, EXIT_GAME, SET_HISTORY_FLAG } from '../../ducks/game'

const WinnerScreen = () => {
  const isWin = useSelector((state) => state.game.isWin)

  const dispatch = useDispatch()

  const handleClearClick = (e) => {
    dispatch(CLEAR_FIELDS())
  }

  const handleClickClose = (e) => {
    dispatch(EXIT_GAME())
  }

  const handleHistoryClick = (e) => {
    dispatch(SET_HISTORY_FLAG())
  }

  return (
    <div>
      <button onClick={handleClickClose}>Выйти</button>
      <h1>{isWin ? `${isWin} Выиграл!` : `Ничья`}</h1>
      <button onClick={handleClearClick}>Заново</button>
      <button onClick={handleHistoryClick}>Смотреть историю ходов</button>
    </div>
  )
}

export default WinnerScreen
