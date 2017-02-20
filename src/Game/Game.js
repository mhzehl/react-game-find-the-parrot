import React, { PureComponent } from 'react'
import Board from '../components/Board'
import Goal from '../components/Goal'
import Tile from '../components/Tile'
import './Game.sass'


class Game extends PureComponent {

  constructor() {
    super()
    this.state = {

    }
  }

  componentWillMount() {
    //TODO load parrots
  }

  //gameLogic



  render() {


    return(
      <div className="game-wrapper">

        <main className="game-container">

          <Goal />
          <Board />

        </main>

      </div>
    )
  }
}

export default Game
