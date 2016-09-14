import React, { Component, PropTypes } from 'react';
import AboutIcon from 'material-ui/svg-icons/action/help';
import AuthorIcon from 'material-ui/svg-icons/maps/person-pin';
import CodeIcon from 'material-ui/svg-icons/action/code';
import IconButton from 'material-ui/IconButton/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class GeneralInfoDirectory extends Component {
  static propTypes = {

  }

  render () {
    // TODO Remove workaround to avoid IconMenu injected props
    return (
      <IconMenu
        iconButtonElement={ <IconButton style={ {height:'100%'} }><MenuIcon /></IconButton> }
        anchorOrigin={ {horizontal: 'left', vertical: 'top'} }
        targetOrigin={ {horizontal: 'left', vertical: 'top'} }
      >
        <Link to="/about">
          <MenuItem primaryText="About" leftIcon={ <AboutIcon /> } />
        </Link>

        <Link to="/author">
          <MenuItem primaryText="Author" leftIcon={ <AuthorIcon /> } />
        </Link>

        <MenuItem primaryText="Source" leftIcon={ <CodeIcon /> }
          onTouchTap={ () => window.open('https://github.com/GreenVars/LeafList') }
        />
      </IconMenu>
    );
  }
}
