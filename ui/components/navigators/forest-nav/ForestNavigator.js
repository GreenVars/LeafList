import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader'
import ForestBox from './ForestBox';
import { setForests } from '../../state/actions';
import { connect } from 'react-redux';

const headerStyle = {
  color: '',
  fontSize: '',
  lineHeight: '',
}

class ForestNavigator extends Component {
  componentWillMount() {
    // TODO Load actual data from server
    const forests = [
      {forestName: "FOREST NAME", trees: [{treeName:"TREE1", branches:[{branchName:"BRANCH1", desc:"BRANCH DESC", leafs:[{leafName:"LEAF1", site:"medium.com", desc:"LEAF DESCRIPTION"}]}]}]},
      {forestName: "FOREST NAME", trees: [{treeName:"TREE1", branches:[{branchName:"BRANCH1", desc:"BRANCH DESC", leafs:[{leafName:"LEAF1", site:"medium.com", desc:"LEAF DESCRIPTION"}]}]}]},
      {forestName: "FOREST NAME", trees: [{treeName:"TREE1", branches:[{branchName:"BRANCH1", desc:"BRANCH DESC", leafs:[{leafName:"LEAF1", site:"medium.com", desc:"LEAF DESCRIPTION"}]}]}]},
      {forestName: "FOREST NAME", trees: [{treeName:"TREE1", branches:[{branchName:"BRANCH1", desc:"BRANCH DESC", leafs:[{leafName:"LEAF1", site:"medium.com", desc:"LEAF DESCRIPTION"}]}]}]},
    ];

    this.props.setForests(forests); // TODO Make sure this doesn't execute a new server request every route change
  }

  render() {
    let keyN = 0;
    return (
      <div id='forest-box-container'>
        <Subheader
          className='forest-box-container-header'
          style={ headerStyle }
        >
          FORESTS
        </Subheader>

        <GridList
          padding={ 25 }
          cols={ 3 }
          height="100%"
          className="forest-box-grid"
        >
          { this.props.forests.map(forest => {
            keyN += 1;
            return <ForestBox { ...forest } key={ keyN } />
          }) }
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forests: state.forestList || [],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setForests: (forests) => {
      dispatch(setForests(forests));
    }
  }
}

const ForestNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForestNavigator);

export default ForestNavigatorContainer;
