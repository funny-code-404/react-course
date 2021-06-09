import React from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_CHANGE_BOARD_DATA } from '../../redux/game/actions'

import './styles.css'

export const Cell = (props) => {
  const { row, col, status, boardData } = props
  const dispatch = useDispatch()

  const handleCellClick = () => {
    let newBoardData = boardData.slice(0)
    newBoardData[row][col].status = status === 'alive' ? 'dead' : 'alive'
    dispatch(ACTION_CHANGE_BOARD_DATA(newBoardData))
  }

  return <td className={status} onClick={handleCellClick}></td>
}

export default Cell
