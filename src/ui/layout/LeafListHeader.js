import React, { Component, PropTypes } from 'react';
import logo from '../../assets/logo.svg';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LeafTrail from './LeafTrail';
import SearchSite from './SearchSite';
import AddItemMenu from './AddItemMenu';
import GeneralInfoDirectory from './GeneralInfoDirectory';

export default class LeafListHeader extends Component {
  static propTypes = {

  }

  render () {
    return (
      <Toolbar className="main-header" style={ {background: ''} }>
        <ToolbarGroup>
          <ToolbarTitle className="homepage-title" text="LeafList" />
          <img src={ logo } alt="LOGO" />
          <GeneralInfoDirectory />
          <AddItemMenu location={ this.props.location } />
          <ToolbarSeparator />
          <LeafTrail location={ this.props.location } />
        </ToolbarGroup>
        <SearchSite />
      </Toolbar>
    );
  }
}
