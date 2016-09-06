import React, { Component, PropTypes } from 'react';
import ForestNavHeader from './ForestNavHeader';
import ForestNavSideBar from './ForestNavSideBar';

import '../../css/forest.css';

export default class ForestNavMain extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <div className="side-bar-shifted">
          <ForestNavHeader location={ this.props.location }/>
          { this.props.children }
        </div>
        <ForestNavSideBar />
      </div>
    );
  }
}
