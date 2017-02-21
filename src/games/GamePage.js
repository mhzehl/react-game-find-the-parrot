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
      goalName: '',
      boardClick: '',
    }
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  getGoal() {
    console.log('GET GOAL')
    const { parrots } = this.props
    var i = 0
    return parrots[i]
  }

  checkSameParrots() {

  }

  render() {
    const {
      title,
      scorePlayerHost,
      scorePlayerGuest,
      playerHost,
      playerGuest,
      parrots,
    } = this.props

    return(
      <div className="page">
        <div className="game-page">
          <p>{title}</p>
          <div className="player-1">
            <GamePlayerBox name="RN"/>
            <GameScore score={scorePlayerHost}/>
          </div>
          <div className="goal">
            <Goal name="7"/>
          </div>
          <div className="player-2">
            <GameScore score={scorePlayerGuest} />
            <GamePlayerBox name="MZ" />
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
