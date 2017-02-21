import React, { PureComponent } from 'react'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class PlayerAvatar extends PureComponent {

  getInitials() {
    this.props.getName()
  }

  render() {
    return(
      <Avatar
        color={deepOrange300}
        backgroundColor={purple500}
        size={60}
        style={style}
      >
        {this.props.name}
      </Avatar>
    )
  }
}
