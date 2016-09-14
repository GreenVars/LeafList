import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import TreeBox from './TreeBox';
import { addTree } from '../../state/actions';
import { connect } from 'react-redux';

class TreeNavigator extends Component {
  static propTypes = {
    trees: PropTypes.arrayOf(PropTypes.object)
  }

  componentWillMount() {
    // TODO Remove placeholder w/ server info
    const data = [
      {name: "PLACEHOLDER", desc: "DESCRIPTION PLACEHOLDER", branchPreviews: [{name: "BRANCH NAME", desc:"DESCRIPTION"}], stats: [{name: "STAT", value:"999"}, {name: "INFO", value:"1001"}, {name:"PLACEHOLDER", value:"-1"}, {name: "INPUT", value:"abc"}]},
      {name: "PLACEHOLDER", desc: "DESCRIPTION PLACEHOLDER", branchPreviews: [{name: "BRANCH NAME", desc:"DESCRIPTION"}], stats: [{name: "STAT", value:"999"}, {name: "INFO", value:"1001"}, {name:"PLACEHOLDER", value:"-1"}, {name: "INPUT", value:"abc"}]},
      {name: "PLACEHOLDER", desc: "DESCRIPTION PLACEHOLDER", branchPreviews: [{name: "BRANCH NAME", desc:"DESCRIPTION"}], stats: [{name: "STAT", value:"999"}, {name: "INFO", value:"1001"}, {name:"PLACEHOLDER", value:"-1"}, {name: "INPUT", value:"abc"}]},
      {name: "PLACEHOLDER", desc: "DESCRIPTION PLACEHOLDER", branchPreviews: [{name: "BRANCH NAME", desc:"DESCRIPTION"}], stats: [{name: "STAT", value:"999"}, {name: "INFO", value:"1001"}, {name:"PLACEHOLDER", value:"-1"}, {name: "INPUT", value:"abc"}]},
      {name: "PLACEHOLDER", desc: "DESCRIPTION PLACEHOLDER", branchPreviews: [{name: "BRANCH NAME", desc:"DESCRIPTION"}], stats: [{name: "STAT", value:"999"}, {name: "INFO", value:"1001"}, {name:"PLACEHOLDER", value:"-1"}, {name: "INPUT", value:"abc"}]},
    ];

    data.map(tree => {
      this.props.addTree(tree);
    });
  }

  render () {
    return (
      <div id='tree-box-container'>
        <br />
        <GridList
          padding={ 25 }
          cols={ 3 }
          height="100%"
          className="tree-box-grid"
        >
        { this.props.trees.map(tree => {
            return (
              <TreeBox
                { ...this.props.params }
                treeName={ tree.name }
                branchPreviews={ tree.branchPreviews }
                stats={ tree.stats }
                desc={ tree.desc }
              />
            )
        }) }
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trees: state.treeList || [],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTree: (branch) => {
      dispatch(addTree(branch));
    }
  }
}

const TreeNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeNavigator);

export default TreeNavigatorContainer;
