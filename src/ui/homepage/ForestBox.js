import React, { Component, PropTypes } from 'react';
import TreePreview from './TreePreview';
import { GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import '../../css/homepage.css';

export default class ForestBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
  }

  render() {
    return (
        <div className="forest-box">
          <GridTile className="forest-box-grid-tile" style={{overflow: ''}}>
          <Card className="forest-box-backprop" style={{background: ''}}>
            <CardTitle
              title={ this.props.forestName }
              titleStyle={{fontSize: ''}}
              className="forest-box-header"
            />
            <Divider />
            <CardText className='forest-box-text' style={{padding: 0}}>
              <TreePreview treeName="TREE NAME" />
              <Divider />
              <TreePreview treeName="TREE NAME" />
            </CardText>
          </Card>
          </GridTile>
        </div>
    )
  }
}
