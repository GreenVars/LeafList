import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import BranchIcon from 'material-ui/svg-icons/action/timeline';
import ForestIcon from 'material-ui/svg-icons/image/landscape';
import HomeIcon from 'material-ui/svg-icons/action/home';
import TreeIcon from 'material-ui/svg-icons/image/nature';


export default class LeafTrail extends Component {
  static propTypes = {

  }

  render () {
    return (
      <Stepper>
        <a href="#">
          <Step>
            <StepLabel
              icon={ <HomeIcon /> }
              style={ {height:'100%'} }
            >
              LeafList
            </StepLabel>
          </Step>
        </a>
        <a href="#">
          <Step>
            <StepLabel
              icon={ <ForestIcon /> }
              style={ {height:'100%'} }
            >
              Forest
            </StepLabel>
          </Step>
        </a>
        <a href="#">
          <Step>
            <StepLabel
              icon={ <TreeIcon  /> }
              style={ {height:'100%'} }
            >
              Tree
            </StepLabel>
          </Step>
        </a>
        <a href="#">
          <Step>
            <StepLabel
              icon={ <BranchIcon /> }
              style={ {height:'100%'} }
            >
              Branch
            </StepLabel>
          </Step>
        </a>
      </Stepper>
    );
  }
}
