import React, { Component, PropTypes } from 'react';
import LeafBox from './LeafBox';
import { connect } from 'react-redux';
import { addLeaf, setVoteStatus } from '../state/actions';

class BranchNavigator extends Component {
  static propTypes = {
    leafs: PropTypes.object,
    onStatusClick: PropTypes.func.isRequired,
  }

  componentWillMount(props, context) {
    const leafs = [ {id:1, status: 0, starred: false,},
                    {id:2, status: 0, starred: false,},
                    {id:3, status: 0, starred: false,},
                    {id:4, status: 0, starred: false,},
                    {id:5, status: 0, starred: false,},
                    {id:6, status: 0, starred: false,},
                    {id:7, status: 0, starred: false,},
                    {id:8, status: 0, starred: false,},
                    {id:9, status: 0, starred: false,},
                    {id:10, status: 0, starred: false,},
                    {id:11, status: 0, starred: false,},
                  ]

    leafs.map(leaf => {
      this.props.addLeaf(leaf)
    });

  }

  render () {
    let leafs = [];
    for (let leaf in this.props.leafs) {
      if( this.props.leafs.hasOwnProperty( leaf ) ) {
        let {
          id,
          status,
        } = this.props.leafs[leaf];
        leafs.push(
          <LeafBox key={ id }
            status={ status }
            onUp={ () => this.props.onStatusClick(id, 1) }
            onDown={ () => this.props.onStatusClick(id, -1) }
            onStar={ () => console.log("Star Toggled") }
          />
        )
      }
    }

    return (
      <div id="leaf-box-container">
        { leafs }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leafs: state.leafList,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStatusClick: (id, newStatus) => {
      dispatch(setVoteStatus(id, newStatus));
    },
    addLeaf: (id) => {
      dispatch(addLeaf(id));
    }
  }
}

const BranchNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BranchNavigator);

export default BranchNavigatorContainer;
