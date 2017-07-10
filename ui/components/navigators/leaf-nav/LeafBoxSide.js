import React from 'react';
import VoteIndicator from './VoteIndicator';
import ActionIcon from '../../common/ActionIcon';

const getFaviconSrc = (site) =>
  `http://www.google.com/s2/favicons?domain=${site}`

export default function LeafBoxSide(props) {
  return (
    <div className="leaf-box-side">
      <img src={ getFaviconSrc('medium.com') } className="leaf-box-favicon"
        role="presentation"
      />
      <VoteIndicator
        count={ props.count }
        status={ props.status }
        onUp={ props.onUp }
        onDown={ props.onDown }
      />
      <ActionIcon
        className="icon-star"
        onClick={ props.onStar }
      />
    </div>
  );
}
