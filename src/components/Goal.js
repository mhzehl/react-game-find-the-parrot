import React, { PureComponent } from 'react'
import Tile from './Tile'
import './Goal.sass'

class Goal extends PureComponent {
  render() {

    return (
      <div className="goal-container">
        <Tile name={this.props.name} />
      </div>
    )
  }
}

export default Goal
