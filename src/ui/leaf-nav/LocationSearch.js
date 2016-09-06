import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete'

export default class LocationSearch extends Component {
  static propTypes = {

  }

  render () {
    return (
      <AutoComplete
        dataSource={ ['leaf', 'placeholder'] }
        hintText="Search..."
      />
    );
  }
}
