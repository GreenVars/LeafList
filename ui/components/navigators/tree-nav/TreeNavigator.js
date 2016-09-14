import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import TreeBox from './TreeBox';

export default class TreeNavigator extends Component {
  static propTypes = {
  }

  render () {
    return (
      <div id='tree-box-container'>
        <br />
        <GridList
          padding={ 25 }
          cols={ 3 }
          height="100%"
          className="tree-box-grid"
        >
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree1' />
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree2' />
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree3' />
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree4' />
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree5' />
          <TreeBox forestName={ this.props.params.forestName } treeName='Tree6' />
        </GridList>
      </div>
    );
  }
}
