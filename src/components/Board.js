import React, { PureComponent } from 'react'
import Tile from './Tile'
import './Board.sass'

class Board extends PureComponent {
  render() {
    return(
      <div className="board">
        <div className="board-row">
          <Tile name="A" />
          <Tile name="B" />
          <Tile name="C" />
          <Tile name="D" />
          <Tile name="E" />
        </div>
        <div className="board-row">
          <Tile name="F" />
          <Tile name="G" />
          <Tile name="H" />
          <Tile name="I" />
          <Tile name="J" />
        </div>
        <div className="board-row">
          <Tile name="K" />
          <Tile name="L" />
          <Tile name="M" />
          <Tile name="N" />
          <Tile name="O" />
        </div>
        <div className="board-row">
          <Tile name="P" />
          <Tile name="Q" />
          <Tile name="R" />
          <Tile name="S" />
          <Tile name="T" />
        </div>
        <div className="board-row">
          <Tile name="U" />
          <Tile name="V" />
          <Tile name="W" />
          <Tile name="X" />
          <Tile name="Y" />
        </div>
      </div>
    )
  }
}

export default Board
