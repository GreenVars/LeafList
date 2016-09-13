import React from 'react';
import IconButton from 'material-ui/IconButton/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { addFilter } from '../state/actions';

const FILTER_DATA = {
  free: {
    tooltip: "FREE",
    className:"icon-globe",
    exclusive: false,
    name: 'placeholder',
  },
  certificate: {
    tooltip: "CERTIFICATE",
    className:"icon-certificate",
    exclusive: false,
    name: 'placeholder',
  },
  approved: {
    tooltip: "APPROVED",
    className:"icon-ok",
    exclusive: false,
    name: 'placeholder',
  }
}

const AddFilterMenu = props => {
  return (
    <IconMenu
      iconButtonElement={ <IconButton style={ {height:'100%'} }><FontIcon className="icon-filter" /></IconButton> }
      anchorOrigin={ {horizontal: 'left', vertical: 'top'} }
      targetOrigin={ {horizontal: 'left', vertical: 'top'} }
    >
      <MenuItem primaryText="Free" leftIcon={ <FontIcon className="icon-globe" /> }
        onTouchTap={ () => props.addFilter(FILTER_DATA.free) }
      />

      <MenuItem primaryText="Certificate" leftIcon={ <FontIcon className="icon-certificate" /> }
        onTouchTap={ () => props.addFilter(FILTER_DATA.certificate) }
      />

      <MenuItem primaryText="Approved" leftIcon={ <FontIcon className="icon-ok" /> }
        onTouchTap={ () => props.addFilter(FILTER_DATA.approved) }
      />
    </IconMenu>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (filter) => {
      dispatch(addFilter(filter));
    }
  }
}
const AddFilterMenuContainer = connect(
  null,
  mapDispatchToProps
)(AddFilterMenu);

export default AddFilterMenuContainer;
