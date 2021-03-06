import React, { Component } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import BranchIcon from 'material-ui/svg-icons/action/timeline';
import ForestIcon from 'material-ui/svg-icons/image/landscape';
import HomeIcon from 'material-ui/svg-icons/action/home';
import TreeIcon from 'material-ui/svg-icons/image/nature';
import { Link, withRouter } from 'react-router';

const iconOrder = [<ForestIcon />, <TreeIcon />, <BranchIcon />];

@withRouter
export default class LeafTrail extends Component {
  static propTypes = {

  }

  render () {
    let steps = [
      <Step key="root" className="hoverable">
        <StepLabel
          onClick={ () => this.props.router.push("/") }
          icon={ <HomeIcon /> }
          style={ {height: '100%'} }
        >
          Home
        </StepLabel>
      </Step>
    ];

    let currentPath = "/forests/"
    const splitPath = this.props.location.pathname.split('/');
    splitPath.shift(); // Remove leading /
    splitPath.shift(); // Remove forests
    if(splitPath[splitPath.length - 1] === "") {
      splitPath.pop(); // Remove trailing /
    }

    for(let i in splitPath) {
      currentPath += splitPath[i] + '/';
      steps.push(
        <Step key={ i } >
          <Link to={ currentPath }>
            <StepLabel
              icon={ iconOrder[i] }
              style={ {height: '100%'} }
            >
                { decodeURI(splitPath[i]).toUpperCase() }
            </StepLabel>
          </Link>
        </Step>
      )
    }

    return (
      <Stepper linear={ false }>
        { steps }
      </Stepper>
    );
  }
}
