import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RaisedButton from 'material-ui/RaisedButton'
import createGame from '../actions/games/create'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import 'medium-editor/src/sass/medium-editor.scss';
import toMarkdown from 'to-markdown'

import './CreateGame.sass'

class CreateGame extends PureComponent {
  constructor(props) {
    super()

    const { title, host } = props

    this.state = {
      title,
      host
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
    host,
  } = this.state

  const game = {
    title,
    host,
  }

  this.props.createGame(game)
}

render() {
    return (
      <div>
        <Title content="New Game" />
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
            <RaisedButton className="primary" onClick={this.saveGame.bind(this)} label="Start Now!" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { host: state.currentUser }
}

export default connect(mapStateToProps, { createGame })(CreateGame)
