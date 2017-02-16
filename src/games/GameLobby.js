// src/games/GamesLobby.js
import React, { PureComponent, PropTypes } from 'react'
import './GameLobby.sass'

export class GameLobby extends PureComponent {

  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="All Games" />
        </header>

        <main className="container">
          { this.props.games.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}
