import React from 'react';
import ActionIcon from '../layout/ActionIcon';

export default function VoteIndicator(props) {
  return (
    <div className="vote-indicator">
      <ActionIcon className={ props.status === 1 ? "icon-up" : "icon-up-outline" }
        onClick={ props.onUp }
      />
      <br />
      <span> { props.count } </span>
      <br />
      <ActionIcon className={ props.status === -1 ? "icon-down" : "icon-down-outline" }
        onClick={ props.onDown }
      />
    </div>
  );
}
