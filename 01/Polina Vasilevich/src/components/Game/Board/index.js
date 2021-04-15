import React from "react";
import Square from "../Square";
import { Board, BoardRow } from "./styles";

class BoardComponent extends React.Component {
  renderSquare(i, key) {
    return (
      <Square
        key={key}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const cells = [...Array(this.props.cells).keys()];
    let index = -1;
    return (
      <Board>
        {cells.map((cell) => (
          <BoardRow key={cell}>
            {cell.map(() => {
              index++;
              return this.renderSquare(index, cell);
            })}
          </BoardRow>
        ))}
      </Board>
    );
  }
}

export default BoardComponent;
