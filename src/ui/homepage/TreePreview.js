import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';
import '../../css/homepage.css';
import BranchPreview from './BranchPreview';

export default class TreePreview extends Component {
  static propTypes = {
    treeName: PropTypes.string.isRequired,
  }

  render() {
    return (
        <div className="tree-preview">
        <List>
          <Subheader
            className='tree-preview-header'
            style={ {fontSize: ''} }
          > { this.props.treeName } </Subheader>
          <BranchPreview branchName="BRANCH ONE" />
          <BranchPreview branchName="BRANCH TWO" />
          </List>
        </div>
    )
  }
}
