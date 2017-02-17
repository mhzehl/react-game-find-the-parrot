// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'

export class GameItem extends PureComponent {

  render() {
    return(
      <article className="game">
        <header>
          <h1>{ title }</h1>
        </header>
        <main>
          <Link to={`/games/${_id}`}>Join</Link>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

export default connect(GameItem);
