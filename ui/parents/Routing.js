import React from 'react';
import { browserHistory, IndexRoute, Route, Router} from 'react-router';
import TreeNavigator from '../components/navigators/tree-nav/TreeNavigator';
import BranchNavigator from '../components/navigators/branch-nav/BranchNavigator';
import LeafNavigator from '../components/navigators/leaf-nav/LeafNavigator';
import MainLayout from './MainLayout';
import ForestNavigator from '../components/navigators/forest-nav/ForestNavigator';
import About from '../components/header/info-directory/About';
import Author from '../components/header/info-directory/Author';

export default function Routing (props) {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ ForestNavigator } />
        <Route path="about" component={ About } />
        <Route path="author" component={ Author } />
        <Route path="forests/:forestName">
          <IndexRoute component={ TreeNavigator } />
          <Route path=":treeName" component={ BranchNavigator } />
          <Route path=":treeName/:branchName" component={ LeafNavigator } />
        </Route>
      </Route>
    </Router>
  )
}
