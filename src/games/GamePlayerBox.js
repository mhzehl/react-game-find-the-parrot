import React, { PureComponent } from 'react'
import PlayerAvatar from '../components/PlayerAvatar'
import RaisedButton from 'material-ui/RaisedButton'
import './GamePlayerBox.sass'

export default class GamePlayerBox extends PureComponent {



  render() {
    return(
      <div className="playerbox">
        <div className="avatar">
          <PlayerAvatar name={this.props.name}/>
        </div>
        <div className="ready">
          <RaisedButton type="submit" label="I'm Ready!" />
        </div>
      </div>
    )
  }
}
