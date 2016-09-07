import React from 'react';
import { browserHistory, IndexRoute, Route, Router} from 'react-router';
import ForestNavHome from './navigation/ForestNavHome';
import TreeNavigator from './navigation/TreeNavigator';
import BranchNavigator from './navigation/BranchNavigator';
import MainLayout from './layout/MainLayout';
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
