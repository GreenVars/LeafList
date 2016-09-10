import React, { Component, PropTypes } from 'react';
import StatIcon from 'material-ui/svg-icons/social/poll';
import FlatButton from 'material-ui/FlatButton';

export default class StatBanner extends Component {
  static propTypes = {

  }

  render () {
    return (
      <div className="stat-banner">
        <FlatButton
          label="STAT"
          labelPosition="after"
          style={ {height:''} }
          primary={ true }
          icon={  <StatIcon /> }
        />
        <FlatButton
          label="STAT"
          labelPosition="after"
          style={ {height:''} }
          primary={ true }
          icon={  <StatIcon /> }
        />
        <FlatButton
          label="STAT"
          labelPosition="after"
          style={ {height:''} }
          primary={ true }
          icon={  <StatIcon /> }
        />
        <FlatButton
          label="STAT"
          labelPosition="after"
          style={ {height:''} }
          primary={ true }
          icon={  <StatIcon /> }
        />
        <FlatButton
          label="STAT"
          labelPosition="after"
          style={ {height:''} }
          primary={ true }
          icon={  <StatIcon /> }
        />
      </div>
    );
  }
}
