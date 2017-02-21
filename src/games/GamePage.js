import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import Title from '../components/Title'
import GamePlayerBox from './GamePlayerBox'
import GameScore from './GameScore'
import './GamePage.sass'
import Board from '../components/Board'
import Goal from '../components/Goal'

export class GamePage extends PureComponent {

  constructor() {
    super()
    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
    }
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  getInitials() {
    var name = this.state.playerGuest
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
    return initials
  }

  render() {

    return(
      <div className="page">
        <div className="game-page">
          <div className="player-1">
            <GamePlayerBox />
            <GameScore score={this.state.scorePlayer1}/>
          </div>
          <div className="goal">
            <Goal name={ this.getGoal } />
          </div>
          <div className="player-2">
            <GameScore score={this.state.scorePlayer2} />
            <GamePlayerBox name={this.getInitials} />
          </div>
        </div>
        <div className="board">
          <Board />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames, subscribeToGamesService })(GamePage)
