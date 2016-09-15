import React from 'react';
import ActionIcon from '../../common/ActionIcon';

export default function StatBanner(props) {
  let keyN = 0;
  return (
    <div className="stat-banner">
      {
        props.stats.map(stat => {
          keyN += 1;
          return (
            <div key={ keyN }>
              <ActionIcon
                tooltip={ stat.name }
                className={ "icon-chart" }
              />
              <span>{ stat.value } </span>
            </div>
          )
        })
      }
    </div>
  );
}
