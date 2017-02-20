import React, { PureComponent } from 'react'
import PlayerAvatar from '../components/PlayerAvatar'
import GameScore from './GameScore'
import RaisedButton from 'material-ui/RaisedButton'
import './GamePlayerBox.sass'

export default class GamePlayerBox extends PureComponent {
  render() {
    return(
      <div className="playerbox">
        <div className="player">
          <div className="avatar">
            <PlayerAvatar />
          </div>
          <div className="ready">
            <RaisedButton type="submit" label="I'm Ready!" />
          </div>
        </div>
        <div className="score">
          <GameScore />
        </div>
      </div>
    )
  }
}
