import React from 'react';
import ActionIcon from './ActionIcon';

export default function FilterMenu(props) {
  return (
    <div id="filter-menu">
      { props.data.map(filter =>
        <ActionIcon
          className={ filter.className }
          onClick={ filter.onClick }
          tooltip={ filter.tooltip }
        />
        ) }
    </div>
  );
}
