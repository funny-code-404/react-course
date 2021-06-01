import React from 'react'
import './styles.css'

import Cell from '../Cell'

export const Table = (props) => {
  const { rows, columns, boardData } = props.data

  let boardElements = []
  let keyCounter = 0
  for (let r = 0; r < rows; r++) {
    let currentRow = []
    for (let c = 0; c < columns; c++) {
      currentRow.push(<Cell key={keyCounter} row={r} col={c} status={boardData[r][c].status} />)
      keyCounter++
    }
    boardElements.push(<tr key={r}>{currentRow}</tr>)
  }
  return (
    <table>
      <tbody>{boardElements}</tbody>
    </table>
  )
}

export default Table
