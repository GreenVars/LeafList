import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import ForestNavMain from './ForestNavMain';
import ForestNavHome from './ForestNavHome';
import TreeNavigator from './TreeNavigator';
import BranchNavigator from './BranchNavigator';

export default function ForestNavigator (props) {
  return (
    <Router>
      <Route path="/" component={ ForestNavMain }>
        <IndexRoute component={ ForestNavHome }/>
        <Route path=":treeName" component={ TreeNavigator } >
          <Route path=":branchName" component={ BranchNavigator } >

          </Route>
        </Route>
      </Route>
    </Router>
  )
}
