import React, { Component, PropTypes } from 'react';
import LeafBox from './LeafBox';
export default class BranchNavigator extends Component {
  static propTypes = {

  }

  render () {
    const branchName = this.props.params.branchName;
    return (
      <div id="leaf-box-container">
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
        <LeafBox />
      </div>
    );
  }
}
