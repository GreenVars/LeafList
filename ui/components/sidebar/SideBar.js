import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FilterMenu from './FilterMenu';
import SortMenu from './SortMenu';
import QuickNav from './QuickNav';
import { connect } from 'react-redux';
import { removeFilter } from '../state/actions';

const drawerStyle = {
  overflow: 'visible',
  width: '20rem',
  backgroundColor: 'white',
}

function LeafListSideBar(props) {
  return (
    <Drawer
      containerClassName='nav-side-bar'
      containerStyle={ drawerStyle }
      openSecondary
      open
    >

      <AppBar
        title="Quick Tools"
        iconElementLeft={ <span /> }
      />
      <SortMenu />
      <br />
      <FilterMenu data={ props.filters } remover={ props.removeFilter } />
      <QuickNav />
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.leafFilters || [],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeFilter: (filter) => {
      dispatch(removeFilter(filter));
    }
  }
}

const LeafListSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeafListSideBar);

export default LeafListSideBarContainer;
