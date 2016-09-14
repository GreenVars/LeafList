import React, { Component, PropTypes } from 'react';
import LeafListHeader from '../components/header/LeafListHeader';
import LeafListSideBar from '../components/sidebar/SideBar';

export default class MainLayout extends Component {
  static propTypes = {

  }

  componentWillReceiveProps() {
    global.store.dispatch({type: "TOGGLE_LOADING"});
  }

  componentDidUpdate() {
    global.store.dispatch({type: "TOGGLE_LOADING"});
  }

  render () {
    return (
      <div>
        <div className="side-bar-shifted">
          <LeafListHeader location={ this.props.location } />
          { this.props.children }
        </div>
        <LeafListSideBar location={ this.props.params } />
      </div>
    );
  }
}
