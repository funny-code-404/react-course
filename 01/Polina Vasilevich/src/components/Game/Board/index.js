import React from "react";
import PropTypes from "prop-types";
import Square from "../Square";
import { Board, BoardRow } from "./styles";

const BoardComponent = ({ countRows, countCols, squares, onClick }) => (
  <Board>
    {[...Array(countRows).keys()].map((itemRow, indexRow) => (
      <BoardRow key={indexRow}>
        {[...Array(countCols).keys()].map((itemCol, indexCol) => (
          <Square
            key={indexCol}
            value={squares[indexRow * countCols + indexCol]}
            onClick={() => onClick(indexRow * countCols + indexCol)}
          />
        ))}
      </BoardRow>
    ))}
  </Board>
);

BoardComponent.propTypes = {
  countRows: PropTypes.number,
  countCols: PropTypes.number,
  squares: PropTypes.array,
  onClick: PropTypes.func,
};

BoardComponent.defaultProps = {
  countRows: 0,
  countCols: 0,
  squares: [],
  onClick: "",
};

export default BoardComponent;
