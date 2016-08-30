import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import PersonIcon from 'material-ui/svg-icons/social/person-outline';

import '../../css/homepage.css';

const drawerStyle = {
  overflow: '',
  width: '',
  backgroundColor: '',
}

export default class HomeSideBar extends Component {
  render() {
    return (
      <Drawer containerClassName='drawer-container'
        containerStyle={drawerStyle}
        openSecondary={true}
        docked={true}
      >
        <AppBar
          title="Grape Vine"
          iconElementLeft={
            <IconButton tooltip="Refresh">
              <RefreshIcon />
            </IconButton>
          }
          iconElementRight={
            <IconButton tooltip="My Account">
              <PersonIcon />
            </IconButton>
          }
        />
      </Drawer>
      )
  }
}
