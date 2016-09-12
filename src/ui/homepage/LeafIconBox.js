import React, { Component, PropTypes } from 'react';
import ActionIcon from '../layout/ActionIcon';

export default class LeafIconBox extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div className="icon-box">
        <ActionIcon
          className="icon-leaf"
          tooltip="Placeholder"
        />
        <ActionIcon
          className="icon-leaf"
          tooltip="Placeholder"
        />
        <ActionIcon
          className="icon-leaf"
          tooltip="Placeholder"
        />
        <ActionIcon
          className="icon-leaf"
          tooltip="Placeholder"
        />
      </div>
    );
  }
}
