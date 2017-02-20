import React, { PureComponent } from 'react'
import './Tile.sass'


class Tile extends PureComponent {

  render() {
    // console.log(this.props)
    return(
      <button className="button" onClick={() => console.log(this.props.name)}>{this.props.name}</button>
    )
  }
}

export default Tile
