import React, { PureComponent } from 'react'
import Tile from './Tile'
import './Goal.sass'

const parrots = [
  'A', 'B', 'C', 'D', 'E',
]

class Goal extends PureComponent {

  randomGoal(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  render() {

    return (
      <div className="goal-container">
        <Tile name={this.randomGoal(parrots)}/>
      </div>
    )
  }
}

export default Goal
