import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import LeafPreview from './LeafPreview';
import '../../css/homepage.css';

export default class BranchPreview extends Component {
  static propTypes = {
    branchName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ListItem
        disabled={true}
        primaryText={ this.props.branchName }
        secondaryText="BRANCH DESCRIPTION"
        nestedItems={[
        <LeafPreview key={1} leafName="LEAF" />,
        <LeafPreview key={2} leafName="LEAF2" />,
      ]}/>
    )
  }
}
