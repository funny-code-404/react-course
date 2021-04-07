import React from "react";
import Board from "./Board";

import { Game, GameInfo, Button } from "./styles";

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares,
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  reset = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  };

  render() {
    const { squares } = this.state;
    const winner = calculateWinner(squares);
    const player = this.state.xIsNext ? "X" : "O";
    const status = winner ? winner : `Next player: ${player}`;

    return (
      <Game>
        <GameInfo>{status}</GameInfo>
        <Board
          squares={this.state.squares}
          onClick={(i) => this.handleClick(i)}
        />

        {winner && <Button onClick={this.reset}>New game</Button>}
      </Game>
    );
  }
}
export default GameComponent;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return `Winner: ${squares[a]}`;
    }

    if (!squares.includes(null)) {
      return "Finish game!";
    }
  }
  return null;
}
