import React from 'react';

export default function MinimalComment(props) {
  return (
    <p className="minimal-comment">
      <span> { props.score } </span>
      { props.children }
    </p>
  );
}
