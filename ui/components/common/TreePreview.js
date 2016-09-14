import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';
import BranchPreview from './BranchPreview';
import { Link } from 'react-router';

export default class TreePreview extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render() {
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
          <BranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
            branchName="BRANCH ONE"
          />
          <BranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
            branchName="BRANCH TWO"
          />
        </List>
      </div>
    )
  }
}
