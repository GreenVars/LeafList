import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FlatButton from 'material-ui/FlatButton';


export default class AddItemMenu extends Component {
  state = {
    open: false,
  }

  static propTypes = {

  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={ true }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        label="Submit"
        primary={ true }
        disabled={ true }
        onTouchTap={ this.handleClose }
      />,
    ];

    return (
      <div>
        <IconButton style={ {height:'100%'} } onTouchTap={ this.handleOpen }><AddIcon /></IconButton>
        <Dialog
          title="Contribute to LeafList"
          actions={ actions }
          modal={ true }
          open={ this.state.open }
        >
          What would you like to add?
        </Dialog>
      </div>
    );
  }
}
