// src/components/Navigation.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import LocationSearching from 'material-ui/svg-icons/device/location-searching'
import FlatButton from 'material-ui/FlatButton'

const navBar = {
  backgroundColor: '#00bcd4',
}

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    history.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        className='navBar'
        style={{backgroundColor: '#00bcd4'}}
        title="Find the Parrot"
        iconElementLeft={<IconButton onClick={this.goHome}><LocationSearching /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
