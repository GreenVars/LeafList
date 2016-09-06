import React, { Component, PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LeafTrail from './LeafTrail';
import LocationSearch from './LocationSearch';

export default class ForestNavHeader extends Component {
  static propTypes = {

  }

  render () {
    return (
        <Toolbar>
          <ToolbarGroup>
            <LeafTrail />
          </ToolbarGroup>
          <LocationSearch />
        </Toolbar>
    );
  }
}
