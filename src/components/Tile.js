import React, { PureComponent } from 'react'
import './Tile.sass'


class Tile extends PureComponent {

  tileClick() {
    const { name } = this.props
    console.log('Tile clicked: ', name)
  }

  render() {
    return(
      <button className="button"
        onClick={ this.tileClick.bind(this) }
      >{this.props.name}</button>
    )
  }
}

export default Tile
