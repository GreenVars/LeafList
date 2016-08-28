import React from 'react';
import logo from '../../assets/logo.svg';
import SearchSite from './SearchSite';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const ButtonStyle = {
  marginLeft: '2px',
  marginRight: '2px',
}

export default class HomeHeader extends React.Component {

  render() {
    return (
      <Toolbar style={{width:'75%'}}>
        <ToolbarGroup>
          <ToolbarTitle className="homepage-title" text="LeafList" />
          <img src={logo} alt="LOGO"/>
          <ToolbarSeparator />
          <FlatButton label="About" style={ButtonStyle}/>
          <FlatButton label="Author" style={ButtonStyle}/>
          <FlatButton label="GitHub" style={ButtonStyle}/>
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
          <SearchSite />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
