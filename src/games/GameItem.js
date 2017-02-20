// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import joinGameAction from '../actions/games/join-game'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'

export class GameItem extends PureComponent {

  joinGameAction() {
    const { _id, players, currentUser } = this.props
    if (!currentUser) return

    console.log('Click (GameItem):', _id)
    this.props.joinGameAction({ _id, players}, currentUser)
  }

  render() {
    const { _id, title, players, currentUser, host } = this.props

    return(
      <article className="game">
        <header>
          <h1>{ title }</h1>
          <p>Players: { players.length } / 2</p>
          <p>Created by: { host.name }</p>
        </header>
        <main>
          <div className="join">
            <RaisedButton onClick={this.joinGameAction.bind(this)} label="Join now!" />
          </div>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  }
}

export default connect(mapStateToProps, { joinGameAction })(GameItem);
