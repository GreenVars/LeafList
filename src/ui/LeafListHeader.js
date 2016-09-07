import React, { Component, PropTypes } from 'react';
import logo from '../assets/logo.svg';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LeafTrail from './leaf-nav/LeafTrail';
import SearchSite from './homepage/SearchSite';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';

export default class LeafListHeader extends Component {
  static propTypes = {

  }

  render () {
    return (
        <Toolbar className="main-header" style={ {background: ''} }>
          <ToolbarGroup>
            <ToolbarTitle className="homepage-title" text="LeafList" />
            <img src={ logo } alt="LOGO"/>
            <IconMenu
              iconButtonElement={ <IconButton style={ {height:'100%'} }><MenuIcon/></IconButton> }
              anchorOrigin={ {horizontal: 'left', vertical: 'top'} }
              targetOrigin={ {horizontal: 'left', vertical: 'top'} }
            >
              <MenuItem primaryText="About" />
              <MenuItem primaryText="Author" />
              <MenuItem primaryText="Source" />
            </IconMenu>
            <ToolbarSeparator />
            <LeafTrail location={ this.props.location }/>
          </ToolbarGroup>
          <SearchSite />
        </Toolbar>
    );
  }
}
