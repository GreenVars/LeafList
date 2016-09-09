import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import BranchPreview from '../homepage/BranchPreview';

export default class TreeNavigator extends Component {
  static propTypes = {

  }

  render () {
    const { treeName, forestName } = this.props.params;
    return (
      <div>
        <p className="navigation-header"> { treeName } </p>
        <List className="branch-preview-list" containerClassName="test2">
          <BranchPreview branchName="Stuff" open/>
          <BranchPreview branchName="Stuff" open/>
          <BranchPreview branchName="Stuff" open/>

        </List>
      </div>
    );
  }
}
