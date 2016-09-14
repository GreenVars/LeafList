import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import StatBanner from './StatBanner';
import MinimalBranchPreview from './MinimalBranchPreview';

export default class TreeBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  }

  render () {
    return (
      <div className="tree-box">
        <GridTile className="tree-box-grid-tile" style={ {overflow: ''} }>
          <Card className="tree-box-backprop"
            containerStyle={ {paddingBottom: 0} }
            style={ {background: ''} }
          >
            <CardTitle title={
              <Link to={ "/forests/" + this.props.forestName + "/" + this.props.treeName }>
                { this.props.treeName }
              </Link>
            }
              titleStyle={ { fontSize: ''} }
              className="tree-box-header"
            />
            <CardText className='tree-box-content' style={ {padding: 0} }>
              <p>
                DESCRIPTION
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <Divider />
              <MinimalBranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
                branchName="branch1"
              />
              <MinimalBranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
                branchName="branch2"
              />
              <MinimalBranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
                branchName="branch3"
              />
              <StatBanner />

            </CardText>
          </Card>
        </GridTile>
      </div>
    );
  }
}
