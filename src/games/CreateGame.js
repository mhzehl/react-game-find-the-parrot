import React, { PureComponent } from 'react'
import createGame from '../actions/games/create'
import { connect } from 'react-redux'
import { link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import './CreateGame.sass'

class CreateGame extends PureComponent {
  render() {
    return(
      <div>
        <h3>Start a New Game</h3>
        <RaisedButton type="submit" label="Start Game" />
      </div>
    )
  }
}

export default connect(null, { createGame })(CreateGame)
