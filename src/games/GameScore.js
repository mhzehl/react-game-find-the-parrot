import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper';
import './GameScore.sass'

// Todo hook up score

const style = {
  height:60,
  width: 60,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class GameScore extends PureComponent {
  render() {
    return(
      <div>
        <Paper style={style} zDepth={4}>
          <div className="playerScore">
            5
          </div>
        </Paper>
      </div>
    )
  }
}
