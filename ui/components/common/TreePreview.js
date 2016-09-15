import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';
import BranchPreview from './BranchPreview';
import { Link } from 'react-router';

export default class TreePreview extends Component {
  static propTypes = {
    branches: PropTypes.arrayOf(PropTypes.object),
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render() {
    let keyN = 0;
    return (
      <div className="tree-preview">
        <List>
          <Subheader
            className='tree-preview-header'
            style={ {fontSize: ''} }
          >
            <Link to={ `/forests/${this.props.forestName}/${this.props.treeName}` }>
              { this.props.treeName }
            </Link>
          </Subheader>
          { this.props.branches.map(branch => {
            keyN += 1;
            return <BranchPreview { ...branch }
              key={ keyN }
              forestName={ this.props.forestName }
              treeName={ this.props.treeName }
                   />
          }) }
        </List>
      </div>
    )
  }
}
