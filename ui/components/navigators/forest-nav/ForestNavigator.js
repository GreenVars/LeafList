import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader'
import ForestBox from './ForestBox';
import '../../css/homepage.css';

const headerStyle = {
  color: '',
  fontSize: '',
  lineHeight: '',
}

export default class ForestNavigator extends Component {
  render() {
    return (
      <div id='forest-box-container'>
        <Subheader
          className='forest-box-container-header'
          style={ headerStyle }
        >
          FORESTS
        </Subheader>

        <GridList
          padding={ 25 }
          cols={ 3 }
          height="100%"
          className="forest-box-grid"
        >
          <ForestBox forestName='Programming' />
          <ForestBox forestName='Math' />
          <ForestBox forestName='Science' />
          <ForestBox forestName='Language' />
          <ForestBox forestName='Business' />
          <ForestBox forestName='Life' />
        </GridList>
      </div>
    )
  }
}
