import React from 'react';
import ActionIcon from '../common/ActionIcon';
import AddFilterMenu from './AddFilterMenu';

export default function FilterMenu(props) {
  let keyN = 0;
  return (
    <div id="filter-menu">
      <h4>
        <AddFilterMenu />
        Current Filters
      </h4>
      { props.data.map(filter => {
        keyN += 1;
        return <ActionIcon
          key={ keyN }
          className={ filter.className }
          onClick={ () => props.remover(filter) }
          tooltip={ filter.tooltip }
               />
      }) }
    </div>
  );
}
