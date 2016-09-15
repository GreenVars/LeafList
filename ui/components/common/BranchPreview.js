import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import LeafPreview from './LeafPreview';
import { Link } from 'react-router';

export default class BranchPreview extends Component {
  static propTypes = {
    branchName: PropTypes.string.isRequired,
    forestName: PropTypes.string.isRequired,
    largeHeader: PropTypes.bool,
    open: PropTypes.bool,
    treeName: PropTypes.string.isRequired,
    leafs: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const extraClassName = this.props.largeHeader ? "branch-preview-link-large" : "";
    let keyN = 0;
    return (
      <ListItem
        disabled={ true }
        primaryText={
          <Link className={ `branch-preview-link ${extraClassName}` } to={ `/forests/${this.props.forestName}/${this.props.treeName}/${this.props.branchName}` }>
            { this.props.branchName }
          </Link>
        }
        initiallyOpen={ this.props.open || false }
        secondaryText={ this.props.desc }
        nestedItems={ this.props.leafs.map(leaf => {
          keyN += 1;
          return <LeafPreview { ...leaf } key={ keyN } />
        }) }
      />
    )
  }
}
