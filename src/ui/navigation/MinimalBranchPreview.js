import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router';

export default class MinimalBranchPreview extends Component {
  static propTypes = {
    branchName: PropTypes.string.isRequired,
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render () {
    return (
      <ListItem
        className="mini-branch-preview"
        disabled={ true }
        primaryText={
          <Link className="branch-preview-link" to={ `/forests/${this.props.forestName}/${this.props.treeName}/${this.props.branchName}` }>
            { this.props.branchName }
          </Link>
        }
        initiallyOpen={ this.props.open || false }
        secondaryText="BRANCH DESCRIPTION"
      />
    );
  }
}
