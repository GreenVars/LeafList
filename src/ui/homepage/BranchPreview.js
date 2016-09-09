import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import LeafPreview from './LeafPreview';
import '../../css/homepage.css';
import { Link } from 'react-router';

export default class BranchPreview extends Component {
  static propTypes = {
    branchName: PropTypes.string.isRequired,
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ListItem
        disabled={ true }
        primaryText={
          <Link className="branch-preview-link" to={ `/forests/${this.props.forestName}/${this.props.treeName}/${this.props.branchName}` }>
            { this.props.branchName }
          </Link>
        }
        initiallyOpen={ this.props.open || false }
        secondaryText="BRANCH DESCRIPTION"
        nestedItems={ [
        <LeafPreview key={ 1 } leafName="LEAF" />,
        <LeafPreview key={ 2 } leafName="LEAF2" />,
        ...(this.props.children || [])
      ] }
      />
    )
  }
}
