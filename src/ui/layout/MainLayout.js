import React, { Component, PropTypes } from 'react';
import LeafListHeader from './LeafListHeader';
import LeafListSideBar from './SideBar';

import '../../css/forest.css';
import '../../css/homepage.css';

export default class ForestNavMain extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <div className="side-bar-shifted">
          <LeafListHeader location={ this.props.location }/>
          { this.props.children }
        </div>
        <LeafListSideBar />
      </div>
    );
  }
}
