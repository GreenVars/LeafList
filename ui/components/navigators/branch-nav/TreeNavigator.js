import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import BranchPreview from '../homepage/BranchPreview';
import LeafPreview from '../homepage/LeafPreview';

export default class TreeNavigator extends Component {
  static propTypes = {

  }

  render () {
    const { treeName } = this.props.params;
    return (
      <div>
        <p className="navigation-header"> { treeName } </p>
        <List className="branch-preview-list">
          <BranchPreview branchName="Stuff" open
            largeHeader { ...this.props.params }
          >
            <LeafPreview displayTags={ true } />
          </BranchPreview>
          <BranchPreview branchName="Stuff" open
            largeHeader { ...this.props.params }
          >
            <LeafPreview displayTags={ true } />
          </BranchPreview>
          <BranchPreview branchName="Stuff" open
            largeHeader { ...this.props.params }
          >
            <LeafPreview displayTags={ true } />
          </BranchPreview>
          <BranchPreview branchName="Stuff" open
            largeHeader { ...this.props.params }
          >
            <LeafPreview displayTags={ true } />
          </BranchPreview>
        </List>
      </div>
    );
  }
}
