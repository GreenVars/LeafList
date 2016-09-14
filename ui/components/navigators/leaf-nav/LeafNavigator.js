import React, { Component, PropTypes } from 'react';
import LeafBox from './LeafBox';
import { connect } from 'react-redux';
import { addLeaf, setVoteStatus } from '../state/actions';

class LeafNavigator extends Component {
  static propTypes = {
    leafs: PropTypes.object,
    onStatusClick: PropTypes.func.isRequired,
  }

  componentWillMount(props, context) {
    const leafs = [ {id:1, status: 0, starred: false, count:0},
                    {id:2, status: 0, starred: false, count:0},
                    {id:3, status: 0, starred: false, count:0},
                    {id:4, status: 0, starred: false, count:0},
                    {id:5, status: 0, starred: false, count:0},
                    {id:6, status: 0, starred: false, count:0},
                    {id:7, status: 0, starred: false, count:0},
                    {id:8, status: 0, starred: false, count:0},

                  ]

    // eslint-disable-next-line
    leafs.map(leaf => {
      this.props.addLeaf(leaf)
    });

  }

  render () {
    let leafs = [];
    for (let id in this.props.leafs) {
      if( this.props.leafs.hasOwnProperty( id ) ) {
        let {
          count,
          status,
        } = this.props.leafs[id];
        leafs.push(
          <LeafBox key={ id }
            count={ count }
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

const LeafNavigatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeafNavigator);

export default LeafNavigatorContainer;
