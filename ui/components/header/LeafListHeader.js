import React, { Component, PropTypes } from 'react';
import logo from '../../assets/logo.svg';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CircularProgress from 'material-ui/CircularProgress';
import LeafTrail from './LeafTrail';
import SearchSite from './SearchSite';
import AddItemMenu from './AddItemMenu';
import GeneralInfoDirectory from './info-directory/GeneralInfoDirectory';
import { connect } from 'react-redux'

class LeafListHeader extends Component {
  static propTypes = {

  }

  render () {
    return (
      <Toolbar className="main-header" style={ {background: ''} }>
        <ToolbarGroup>
          <ToolbarTitle className="homepage-title" text="LeafList" />
          <img src={ logo } alt="LOGO" />
          <GeneralInfoDirectory />
          <AddItemMenu location={ this.props.location } />
          <ToolbarSeparator />
          <LeafTrail location={ this.props.location } />
        </ToolbarGroup>
        <ToolbarGroup>
          { this.props.loading ? // TODO Make indicator update properly
            <CircularProgress size={ .5 } />
              :
            <span />
          }
          <SearchSite />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = function (state) {
  return { loading: state.toggleLoading.loading }
}

const HeaderContainer = connect(
  mapStateToProps,
)(LeafListHeader);

export default HeaderContainer;
