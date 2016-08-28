import React, { Component } from 'react';
import ForestBoxContainer from './ForestBoxContainer';
import HomeHeader from './HomeHeader';
import HomeSideBar from './HomeSideBar';
import '../../css/homepage.css';

export default class LeafList extends Component {
  render() {
    return (
      <div className="homepage">
        <HomeHeader />
        <ForestBoxContainer />
        <HomeSideBar />
      </div>
    );
  }
}
