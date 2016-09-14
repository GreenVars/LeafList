import React from 'react';

export default function ActionIcon(props) {
  return props.tooltip ?
    <div className="tooltip">
      <i className={ props.className } onClick={ props.onClick } />
      <span className="tooltip-content">{ props.tooltip }</span>
    </div>
      :
    <i className={ props.className } onClick={ props.onClick } />
}
