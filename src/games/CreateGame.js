import React, { PureComponent } from 'react'
import createGame from '../actions/games/create'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import 'medium-editor/src/sass/medium-editor.scss';
import toMarkdown from 'to-markdown'

import './CreateGame.sass'

class CreateGame extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title,
    }
  }

  updateTitle(event) {
  this.setState({
    title: this.refs.title.value
  })
}

saveGame() {
  const {
    title,
  } = this.state

  const game = {
    title,
  }

  console.log(game)
}

render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveGame.bind(this)}>Create</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createGame })(CreateGame)
