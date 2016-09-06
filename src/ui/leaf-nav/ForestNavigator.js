import React from 'react';
import { browserHistory, IndexRoute, Route, Router} from 'react-router';
import ForestNavMain from './ForestNavMain';
import ForestNavHome from './ForestNavHome';
import TreeNavigator from './TreeNavigator';
import BranchNavigator from './BranchNavigator';
import homepage from '../homepage/LeafList';

export default function ForestNavigator (props) {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ homepage } />
      <Route path="forests/:forestName" component={ ForestNavMain }>
        <IndexRoute component={ ForestNavHome } />
        <Route path=":treeName" component={ TreeNavigator } />
        <Route path=":treeName/:branchName" component={ BranchNavigator } />
      </Route>
    </Router>
  )
}
