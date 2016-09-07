import React, { Component, PropTypes } from 'react';

export default class BranchNavigator extends Component {
  static propTypes = {

  }

  render () {
    const branchName = this.props.params.branchName;
    return (
      <span> On branch| { branchName } </span>
    );
  }
}
