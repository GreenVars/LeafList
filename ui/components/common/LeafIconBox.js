import React from 'react';
import ActionIcon from './ActionIcon';
import { connect } from 'react-redux';
import { addFilter } from '../state/actions';

const LeafIconBox = props => {
  let data = props.data
  data = [
    {tooltip: "PLACEHOLDER", className:"icon-leaf", exclusive: false, name: 'placeholder'},
    {tooltip: "PLACEHOLDER", className:"icon-leaf", exclusive: false, name: 'placeholder'},
    {tooltip: "PLACEHOLDER", className:"icon-leaf", exclusive: false, name: 'placeholder'},
    {tooltip: "PLACEHOLDER", className:"icon-leaf", exclusive: false, name: 'placeholder'},
                              ]

  let keyN = 0;
  return (
    <div className="icon-box">
      {
        data.map(icon => {
          keyN += 1;
          return <ActionIcon className={ icon.className }
            key={ keyN }
            tooltip={ icon.tooltip }
            onClick={ () => props.addFilter(icon) }
                 />
        }
        )
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFilter: (filter) => {
      dispatch(addFilter(filter));
    }
  }
}

const LeafIconBoxContainer = connect(
  null,
  mapDispatchToProps
)(LeafIconBox);

export default LeafIconBoxContainer;
