import React, { Component, PropTypes } from 'react';
import LeafIconBox from '../homepage/LeafIconBox';
import ActionIcon from '../layout/ActionIcon';
import LeafBoxSide from './LeafBoxSide';

export default class LeafBox extends Component {
  static propTypes = {

  }

  onUp = (event) => {
    console.log(event)
  }

  onDown = (event) => {
    console.log(event)
  }

  onStar = (event) => {
    console.log(event)
  }

  render () {
    return (
      <div className="leaf-box">
        <LeafBoxSide onUp={ this.onUp } onDown={ this.onDown }
          status={ this.props.status } count={ 40 /*this.props.count*/ }
          onStar={ this.onStar }
        />
        <h1>
          LEAFNAME
          <ActionIcon className="icon-globe" onClick={ () =>console.log(5) }
            tooltip="hi"
          />
        </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <h3> Comments </h3>
      </div>
    );
  }
}
