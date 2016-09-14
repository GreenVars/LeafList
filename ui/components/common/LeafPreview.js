import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import LeafIconBox from './LeafIconBox';


const getFaviconSrc = (site) =>
  `http://www.google.com/s2/favicons?domain=${site}`

export default class LeafPreview extends Component {
  static propTypes = {
    leafName: PropTypes.string.isRequired,
    displayTags: PropTypes.bool,
  }

  render() {
    const secondContent = this.props.displayTags ?
      <div className="leaf-preview-content" style={ {display: '', overflow: ''} }>
        <a href="#" className="shifted-leaf-description leaf-description"> { this.props.desc } </a>
        <LeafIconBox data={ [] } />
      </div> :
      <a href="#" className="leaf-description"> { this.props.desc }</a> ;

    return (
      <ListItem
        disabled={ true }
        secondaryTextLines={ 2 }
        className="leaf-preview"
        style={ {padding: '', marginLeft: ''} }
        leftIcon={ <Avatar
          className="leaf-favicon"
          src={ getFaviconSrc(this.props.site) }
          style={ {margin: '', left: ''} }
                   /> }
        primaryText={
          <a href="#" className="leaf-link"> { this.props.leafName } </a>
        }
        secondaryText={
          secondContent
        }
      />
    )
  }
}
