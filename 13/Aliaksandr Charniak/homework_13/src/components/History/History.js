import { useSelector, useDispatch } from 'react-redux'

import { CLEAR_FIELDS, EXIT_GAME, SHOW_HISTORY } from '../../ducks/game'

import './styles.css'

const History = () => {
  const historyItem = useSelector((state) => state.game.historyItem)

  const dispatch = useDispatch()

  const handleClearClick = (e) => {
    dispatch(CLEAR_FIELDS())
  }

  const handleClickClose = (e) => {
    dispatch(EXIT_GAME())
  }

  const handlePreviousClick = (e) => {
    dispatch(SHOW_HISTORY(-1))
  }

  const handleNextClick = (e) => {
    dispatch(SHOW_HISTORY(1))
  }

  return (
    <div>
      <h2>История:</h2>
      <div className="tittactoegrid">
        {historyItem.map((field, i) => (
          <div key={i} id={i} className="tittactoecell">
            {field}
          </div>
        ))}
      </div>
      <button onClick={handlePreviousClick}>Предыдущее</button>
      <button onClick={handleNextClick}>Следующее</button>
      <button onClick={handleClearClick}>Заново</button>
      <button onClick={handleClickClose}>Выйти</button>
    </div>
  )
}

export default History
