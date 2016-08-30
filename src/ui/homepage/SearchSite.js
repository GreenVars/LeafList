import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import BadgeIcon from 'material-ui/svg-icons/action/dashboard';
import AutoComplete from 'material-ui/AutoComplete'

export default class SearchSite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="site-search">
        <AutoComplete dataSource={['this', 'is', 'a', 'placeholder']} hintText="Search"/>
        <IconButton className='site-search-icon'> <SearchIcon /> </IconButton>
        <IconButton className='site-search-icon' onTouchTap={this.handleTouchTap}> <BadgeIcon /> </IconButton>
        <Popover
          className='badge-popover'
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Subheader> Badges </Subheader>
          <Menu>
            <MenuItem>
              <Toggle label="Free"/>
            </MenuItem>
            <MenuItem>
              <Toggle label="Limit ads"/>
            </MenuItem>
            <MenuItem>
              <Toggle label="Dev approved?"/>
            </MenuItem>
            <MenuItem>
              <Toggle label="Certificate rewarded"/>
            </MenuItem>
            <MenuItem>
              <Toggle label="Highly Rated"/>
            </MenuItem>
          </Menu>
        </Popover>
      </div>
    );
  }
}
