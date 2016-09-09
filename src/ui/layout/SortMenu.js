import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../../css/sidebar.css';

export default class SortMenu extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }


  handleChange = (event, index, value) => this.setState({value});

  render () {
    return (
      <div>
        <p className="side-bar-header">
          SORT BY
        </p>
        <DropDownMenu
          value={ this.state.value }
          onChange={ this.handleChange }
          autoWidth={ false }
          style={ {width: "100%"} }
        >
          <MenuItem value={ 1 } primaryText="Votes" />
          <MenuItem value={ 2 } primaryText="Approval" />
          <MenuItem value={ 3 } primaryText="Discussion" />
          <MenuItem value={ 4 } primaryText="Oldest" />
          <MenuItem value={ 5 } primaryText="Newest" />
        </DropDownMenu>
      </div>
    );
  }
}
