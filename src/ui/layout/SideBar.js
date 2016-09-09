import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FilterMenu from './FilterMenu';
import SortMenu from './SortMenu';

const drawerStyle = {
  overflow: 'visible',
  width: '20rem',
  backgroundColor: 'white',
}

export default class LeafListSideBar extends Component {
  static propTypes = {

  }

  render () {
    return (
      <Drawer
        containerClassName='nav-side-bar'
        containerStyle={ drawerStyle }
        openSecondary
        open
      >

        <AppBar
          title="Quick Tools"
          iconElementLeft={ <span/> }
        />
        <SortMenu />
        <br />
        <FilterMenu />
      </Drawer>
    );
  }
}
