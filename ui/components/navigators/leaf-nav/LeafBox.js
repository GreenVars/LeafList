import React from 'react';
import LeafIconBox from '../../common/LeafIconBox';
import LeafBoxSide from './LeafBoxSide';
import MinimalComment from './MinimalComment';

export default function LeafBox(props) {
  return (
    <div className="leaf-box">
      <div>
        <LeafBoxSide onUp={ props.onUp } onDown={ props.onDown }
          status={ props.status } count={ props.count }
          onStar={ props.onStar }
        />
        <h1 className="leaf-box-header">
          LEAFNAME
          <LeafIconBox data={ [] } />
        </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>

      <div>
        <h3> Comments </h3>
        <MinimalComment score={ 50 }> This is great </MinimalComment>
        <MinimalComment score={ 50 }> This is great </MinimalComment>
        <MinimalComment score={ 50 }> This is great </MinimalComment>
      </div>
    </div>
  );
}
