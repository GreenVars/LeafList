import React from 'react';
import ActionIcon from '../layout/ActionIcon';
import LeafBoxSide from './LeafBoxSide';

export default function LeafBox(props) {
  return (
    <div className="leaf-box">
      <LeafBoxSide onUp={ props.onUp } onDown={ props.onDown }
        status={ props.status } count={ props.count }
        onStar={ props.onStar }
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
