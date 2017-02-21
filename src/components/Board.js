import React, { PureComponent } from 'react'
import Tile from './Tile'
import './Board.sass'

class Board extends PureComponent {
  render() {
    return(
      <div className="board">
        <div className="board-row">
          <Tile name="1" />
          <Tile name="2" />
          <Tile name="3" />
          <Tile name="4" />
          <Tile name="5" />
        </div>
        <div className="board-row">
          <Tile name="6" />
          <Tile name="7" />
          <Tile name="8" />
          <Tile name="9" />
          <Tile name="10" />
        </div>
        <div className="board-row">
          <Tile name="11" />
          <Tile name="12" />
          <Tile name="13" />
          <Tile name="14" />
          <Tile name="15" />
        </div>
        <div className="board-row">
          <Tile name="16" />
          <Tile name="17" />
          <Tile name="18" />
          <Tile name="19" />
          <Tile name="20" />
        </div>
        <div className="board-row">
          <Tile name="21" />
          <Tile name="22" />
          <Tile name="23" />
          <Tile name="24" />
          <Tile name="25" />
        </div>
      </div>
    )
  }
}

export default Board
