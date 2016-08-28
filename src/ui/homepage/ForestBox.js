import React, { Component, PropTypes } from 'react';
import { GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import '../../css/homepage.css';

export default class ForestBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
  }

  render() {
    return (
        <GridTile
          className="test"
        >
        <Card style={{'fontSize':'2em'}}>
          <CardTitle title={ this.props.forestName } />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardText>
        </Card>
        </GridTile>
    )
  }
}
