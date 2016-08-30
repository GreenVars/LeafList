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
        <LeafPreview leafName="LEAF" />,
        <LeafPreview leafName="LEAF2" />,
      ]}/>
    )
  }
}
