import React from 'react';
import logo from '../../assets/logo.svg';
import SearchSite from './SearchSite';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const ButtonStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

export default class HomeHeader extends React.Component {

  render() {
    return (
      <Toolbar className="homepage-header" style={ {background: ''} }>
        <ToolbarGroup>
          <ToolbarTitle className="homepage-title" text="LeafList" />
          <img src={ logo } alt="LOGO"/>
          <ToolbarSeparator />
          <FlatButton label="About" className="header-button" style={ ButtonStyle }/>
          <FlatButton label="Author" className="header-button" style={ ButtonStyle }/>
          <FlatButton label="GitHub" className="header-button" style={ ButtonStyle }/>
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
          <SearchSite />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
