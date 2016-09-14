import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import BranchPreview from '../../common/BranchPreview';
import { addBranch } from '../../state/actions';
import { connect } from 'react-redux';

class BranchNavigator extends Component {
  static propTypes = {
    branches: PropTypes.arrayOf(PropTypes.object),
  }

  componentWillMount() {
    // TODO Remove placeholder w/ server info
    const data = [
      {branchName: "PLACEHOLDER", leafs: [{leafName: "LEAF NAME", site:"twitter.com", desc:"DESCRIPTION"}]},
      {branchName: "PLACEHOLDER", leafs: [{leafName: "LEAF NAME", site:"twitter.com", desc:"DESCRIPTION"}]},
      {branchName: "PLACEHOLDER", leafs: [{leafName: "LEAF NAME", site:"twitter.com", desc:"DESCRIPTION"}]},
      {branchName: "PLACEHOLDER", leafs: [{leafName: "LEAF NAME", site:"twitter.com", desc:"DESCRIPTION"}]},
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
              <BranchPreview open largeHeader
                { ...this.props.params }
                { ...branch }
              >
              </BranchPreview>
          )})
        }
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
