import React, { Component, PropTypes } from 'react';
import LeafPreview from './LeafPreview';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import HotIcon from 'material-ui/svg-icons/social/whatshot';
import CakeIcon from 'material-ui/svg-icons/social/cake';
import NewIcon from 'material-ui/svg-icons/device/access-time';
import WorldIcon from 'material-ui/svg-icons/social/public';
import Divider from 'material-ui/Divider';

const iconProps = {
  className: 'leaf-feed-icon',
  style: {
    fill: '',
  }
}
const nameToIcon = {
  hot: <HotIcon {...iconProps} />,
  new: <NewIcon {...iconProps} />,
  news: <CakeIcon {...iconProps} />,
};

const DEFAULT_ICON = WorldIcon;

export default class LeafFeed extends Component {
  static propTypes = {
    feedName: PropTypes.string.isRequired
  }

  componentWillMount() {
    if(this.props.feedName in nameToIcon) {
      this.icon = nameToIcon[this.props.feedName];
    } else {
      this.icon = DEFAULT_ICON;
    }
  }

  render() {
    return (
      <List>
        <Subheader
          className="leaf-feed-header"
          style={{fontSize:''}}
        >
          { this.props.feedName.toUpperCase() }
          { this.icon }
        </Subheader>

        <LeafPreview leafName="thing2"/>
        <LeafPreview leafName="thing3"/>
        <LeafPreview leafName="thing4"/>
        <Divider style={{marginTop: '15px'}}/>
      </List>
    )
  }

}
