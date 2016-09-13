import React from 'react';
import ActionIcon from './ActionIcon';
import AddFilterMenu from './AddFilterMenu';

export default function FilterMenu(props) {
  return (
    <div id="filter-menu">
      <h4>
        <AddFilterMenu />
        Current Filters
      </h4>
      { props.data.map(filter =>
        <ActionIcon
          className={ filter.className }
          onClick={ () => props.remover(filter) }
          tooltip={ filter.tooltip }
        />
        ) }
    </div>
  );
}
