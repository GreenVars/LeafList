import React from 'react';
import { browserHistory, IndexRoute, Route, Router} from 'react-router';
import ForestNavMain from './leaf-nav/ForestNavMain';
import ForestNavHome from './leaf-nav/ForestNavHome';
import TreeNavigator from './leaf-nav/TreeNavigator';
import BranchNavigator from './leaf-nav/BranchNavigator';
import MainLayout from './MainLayout';
import ForestBoxContainer from './homepage/ForestBoxContainer'

export default function Routing (props) {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout } >
        <IndexRoute component={ ForestBoxContainer } />
        <Route path="forests/:forestName" >
          <IndexRoute component={ ForestNavHome } />
          <Route path=":treeName" component={ TreeNavigator } />
          <Route path=":treeName/:branchName" component={ BranchNavigator } />
        </Route>
      </Route>
    </Router>
  )
}
