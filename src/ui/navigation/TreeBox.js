import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

export default class TreeBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
    treeName: PropTypes.string.isRequired,
  } 

  render () {
    return (
      <div className="tree-box">
        <GridTile className="tree-box-grid-tile" style={ {overflow: ''} }>
          <Card className="tree-box-backprop" style={ {background: ''} }>
              <CardTitle title={
                <Link to={ "/forests/" + this.props.forestName + "/" + this.props.treeName }>
                  { this.props.treeName }
                </Link>
              }
              titleStyle={ { fontSize: ''} }
              className="tree-box-header"
              />
            <Divider />
            <CardText className='tree-box-content' style={ {padding: 0} }>
              PLACEHOLDER
            </CardText>
          </Card>
        </GridTile>
      </div>
    );
  }
}
