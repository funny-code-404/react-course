import { useSelector, useDispatch } from 'react-redux'

import { CHANGE_GAME_FIELD, CLEAR_FIELDS, EXIT_GAME } from '../../ducks/game'

import './styles.css'

const TicTacToe = () => {
  const fields = useSelector((state) => state.game.fields)
  const step = useSelector((state) => state.game.step)
  const isWin = useSelector((state) => state.game.isWin)
  const isShowClear = useSelector((state) => state.game.isShowClear)
  const isDraw = useSelector((state) => state.game.isDraw)

  const dispatch = useDispatch()

  const handleClickField = (e) => {
    const { id } = e.target
    dispatch(CHANGE_GAME_FIELD(+id))
  }

  const handleClearClick = (e) => {
    dispatch(CLEAR_FIELDS())
  }

  const handleClickClose = (e) => {
    dispatch(EXIT_GAME())
  }

  return (
    <div>
      <div className="tittactoegrid">
        {fields.map((field, i) => (
          <div key={i} id={i} className="tittactoecell" onClick={handleClickField}>
            {field}
          </div>
        ))}
      </div>
      {isShowClear && <button onClick={handleClearClick}>Заново</button>}
      Ходит: <span>{step}</span>
      {(!isWin || !isDraw) && <button onClick={handleClickClose}>Close</button>}
    </div>
  )
}

export default TicTacToe
