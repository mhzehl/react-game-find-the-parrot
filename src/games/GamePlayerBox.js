import React, { PureComponent } from 'react'
import PlayerAvatar from '../components/PlayerAvatar'
import RaisedButton from 'material-ui/RaisedButton'
import './GamePlayerBox.sass'

export default class GamePlayerBox extends PureComponent {



  render() {
    return(
      <div className="playerbox">
        <div className="avatar">
<<<<<<< HEAD
          <PlayerAvatar name={this.props.name}/>
=======
          <PlayerAvatar name={this.props.name} />
>>>>>>> c58e4ea5b18b175f34463c4a791bd4c4caaa756d
        </div>
        <div className="ready">
          <RaisedButton type="submit" label="I'm Ready!" />
        </div>
      </div>
    )
  }
}
