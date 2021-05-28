import { useSelector } from 'react-redux'

import StartScreen from '../StartScreen'
import WinnerScreen from '../WinnerScreen'
import History from '../History'
import TicTacToe from '../TicTacToe'

const Game = () => {
  const isWin = useSelector((state) => state.game.isWin)
  const isGameStarted = useSelector((state) => state.game.isGameStarted)
  const isDraw = useSelector((state) => state.game.isDraw)
  const isShowHistory = useSelector((state) => state.game.isShowHistory)

  return (
    <>
      {!isGameStarted ? (
        <StartScreen />
      ) : isShowHistory ? (
        <History />
      ) : isWin || isDraw ? (
        <WinnerScreen />
      ) : (
        <TicTacToe />
      )}
    </>
  )
}

export default Game
