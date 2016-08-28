import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader'
import ForestBox from './ForestBox';
import '../../css/homepage.css';

export default class ForestBoxContainer extends Component {
  render() {
    return (
      <div className='forest-box-container'>
        <Subheader style={{fontSize:'2em'}}> FORESTS </Subheader>
        <GridList
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
