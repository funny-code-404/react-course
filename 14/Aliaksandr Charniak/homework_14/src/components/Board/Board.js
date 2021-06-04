import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  ACTION_CHANGE_PLAING_STATUS,
  ACTION_CHANGE_BOARD_DATA,
  ACTION_INCREMENT_GENERATION,
} from '../../redux/game/actions'

import Table from '../Table'

import './styles.css'

export const Board = (props) => {
  const { rows, columns, boardData, generation, playing } = props.data

  const dispatch = useDispatch()

  const togglePlaying = () => {
    dispatch(ACTION_CHANGE_PLAING_STATUS(playing ? false : true))
  }

  const step = () => {
    let newBoardData = boardData

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let neighbors = getNeighbors(r, c, boardData)
        let neighborsAlive = neighbors.filter((status) => status === 'alive').length
        let cellStatus = boardData[r][c].status

        if (cellStatus === 'alive') {
          if (neighborsAlive < 2) {
            newBoardData[r][c].status = 'dead'
          } else if (neighborsAlive === 2 || neighborsAlive === 3) {
            continue
          } else if (neighborsAlive > 3) {
            newBoardData[r][c].status = 'dead'
          }
        }

        if (cellStatus === 'dead') {
          if (neighborsAlive >= 4 || neighborsAlive < 3) {
            continue
          }
          if (neighborsAlive === 3) {
            newBoardData[r][c].status = 'alive'
          }
        }
      }
    }
    let gen = generation
    gen++
    dispatch(ACTION_CHANGE_BOARD_DATA(newBoardData))
    dispatch(ACTION_INCREMENT_GENERATION(gen++))
  }

  const clearBoard = () => {
    let clearBoardState = []
    for (let r = 0; r < rows; r++) {
      let currentRow = []
      for (let c = 0; c < columns; c++) {
        currentRow.push({ status: 'dead' })
      }
      clearBoardState.push(currentRow)
    }

    dispatch(ACTION_CHANGE_BOARD_DATA(clearBoardState))
    dispatch(ACTION_INCREMENT_GENERATION(0))
  }

  const getNeighbors = (row, col, board) => {
    let neighbors = []
    if (row === 0 && col === 0) {
      // Top Left
      neighbors = [
        board[row][col + 1].status,
        board[row + 1][col].status,
        board[row + 1][col + 1].status,
      ]
    } else if (row === 0 && col === columns - 1) {
      // Top Right
      neighbors = [
        board[row][col - 1].status,
        board[row + 1][col - 1].status,
        board[row + 1][col].status,
      ]
    } else if (row === rows - 1 && col === 0) {
      // Bottom Left
      neighbors = [
        board[row - 1][col].status,
        board[row - 1][col + 1].status,
        board[row][col + 1].status,
      ]
    } else if (row === rows - 1 && col === columns - 1) {
      // Bottom Right
      neighbors = [
        board[row - 1][row].status,
        board[row][row - 1].status,
        board[row - 1][row - 1].status,
      ]
    } else if (row === 0) {
      // Top row
      neighbors = [
        board[row][col - 1].status,
        board[row][col + 1].status,
        board[row + 1][col - 1].status,
        board[row + 1][col].status,
        board[row + 1][col + 1].status,
      ]
    } else if (row === rows - 1) {
      // Bottom Row
      neighbors = [
        board[row - 1][col - 1].status,
        board[row - 1][col].status,
        board[row - 1][col + 1].status,
        board[row][col - 1].status,
        board[row][col + 1].status,
      ]
    } else if (col === 0) {
      // Left Column
      neighbors = [
        board[row - 1][col].status,
        board[row - 1][col + 1].status,
        board[row][col + 1].status,
        board[row + 1][col].status,
        board[row + 1][col + 1].status,
      ]
    } else if (col === columns - 1) {
      // Right Column
      neighbors = [
        board[row - 1][col - 1].status,
        board[row - 1][col].status,
        board[row][col - 1].status,
        board[row + 1][col - 1].status,
        board[row + 1][col].status,
      ]
    } else {
      // Everything else
      neighbors = [
        board[row - 1][col - 1].status,
        board[row - 1][col].status,
        board[row - 1][col + 1].status,
        board[row][col - 1].status,
        board[row][col + 1].status,
        board[row + 1][col - 1].status,
        board[row + 1][col].status,
        board[row + 1][col + 1].status,
      ]
    }
    return neighbors
  }

  useEffect(() => {
    clearBoard()
  }, [])

  return (
    <div>
      {playing ? <Table /> : <div />}
      <body>
        <h2>Generations: {generation}</h2>
        <button onClick={togglePlaying}>{playing ? 'Stop' : 'Start'}</button>
        <button onClick={step}>Step</button>
        <button onClick={clearBoard}>Clear Board</button>
      </body>
    </div>
  )
}

export default Board
