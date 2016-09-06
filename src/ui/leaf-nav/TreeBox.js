import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';

export default class TreeBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render () {
    return (

      <GridTile>
        <Link to={ "/forests/" + this.props.forestName + "/" + this.props.treeName }> { this.props.treeName } </Link>
      </GridTile>
    );
  }
}
