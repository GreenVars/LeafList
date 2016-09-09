import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import PlaceholderIcon from 'material-ui/svg-icons/maps/place';

export default class LeafIconBox extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div className="icon-box">
        <IconButton
          className="leaf-badge"
          tooltip="BADGE INFO"
          style={ {height: '', padding: ''} }
        >
          <PlaceholderIcon />
        </IconButton>
        <IconButton
          className="leaf-badge"
          tooltip="BADGE INFO"
          style={ {height: '', padding: ''} }
        >
          <PlaceholderIcon />
        </IconButton>
        <IconButton
          className="leaf-badge"
          tooltip="BADGE INFO"
          style={ {height: '', padding: ''} }
        >
          <PlaceholderIcon />
        </IconButton>
        <IconButton
          className="leaf-badge"
          tooltip="BADGE INFO"
          style={ {height: '', padding: ''} }
        >
          <PlaceholderIcon />
        </IconButton>
        <IconButton
          className="leaf-badge"
          tooltip="BADGE INFO"
          style={ {height: '', padding: ''} }
        >
          <PlaceholderIcon />
        </IconButton>
      </div>
    );
  }
}
