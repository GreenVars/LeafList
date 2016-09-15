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
    branchPreviews: PropTypes.arrayOf(PropTypes.object),
    desc: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
  }

  render () {
    let keyN = 0;
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
                { this.props.desc }
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <Divider />
              { this.props.branchPreviews.map(branch => {
                  keyN += 1
                  return (
                    <MinimalBranchPreview forestName={ this.props.forestName } treeName={ this.props.treeName }
                      branchName={ branch.name } key={ keyN }
                    />
                  )
              }) }
              <StatBanner stats={ this.props.stats } />

            </CardText>
          </Card>
        </GridTile>
      </div>
    );
  }
}
