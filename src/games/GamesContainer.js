// src/games/GamesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import CreateGame from './CreateGame'
import GameItem from './GameItem'
import './GamesContainer.sass'
import GamePlayerBox from './GamePlayerBox'

export class GamesContainer extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  render() {
    return(
      <div className="app wrapper">
        <div className="games wrapper">
          <CreateGame />
          <div className="container">
            { this.props.games.map(this.renderGame.bind(this)) }
          </div>
        </div>
        <div className="newGame wrapper">
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService
})(GamesContainer)
