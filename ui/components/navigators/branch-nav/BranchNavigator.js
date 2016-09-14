import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import BranchPreview from '../../common/BranchPreview';
import LeafPreview from '../../common/LeafPreview';
import { addBranch } from '../../state/actions';
import { connect } from 'react-redux';

class BranchNavigator extends Component {
  static propTypes = {
    branches: PropTypes.arrayOf(PropTypes.object),
  }

  componentWillMount() {
    // TODO Remove placeholder w/ server info
    const data = [
      {name: "PLACEHOLDER", leaf: {name: "LEAF NAME"}},
      {name: "PLACEHOLDER", leaf: {name: "LEAF NAME"}},
      {name: "PLACEHOLDER", leaf: {name: "LEAF NAME"}},
      {name: "PLACEHOLDER", leaf: {name: "LEAF NAME"}},
      {name: "PLACEHOLDER", leaf: {name: "LEAF NAME"}},
    ];

    data.map(branch => {
      this.props.addBranch(branch);
    });
  }

  render () {
    return (
      <div>
        <p className="navigation-header"> { this.props.treeName } </p>
        <List className="branch-preview-list">
        {
          this.props.branches.map(branch => {
            return (
              <BranchPreview branchName={ branch.name } open
                largeHeader { ...this.props.params }
              >
                <LeafPreview displayTags={ true } />
              </BranchPreview>
          )})
        }
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    branches: state.branchList || [],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addBranch: (branch) => {
      dispatch(addBranch(branch));
    }
  }
}

const BranchNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BranchNavigator);

export default BranchNavigatorContainer;
