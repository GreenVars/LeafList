import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TreeNavigator extends Component {
  static propTypes = {

  }

  render () {
    const { treeName, forestName } = this.props.params;
    return (
      <span><Link to={  "/forests/" + forestName + "/" + treeName + "/branch" } > { this.props.routeParams.treeName } </Link></span>
    );
  }
}
